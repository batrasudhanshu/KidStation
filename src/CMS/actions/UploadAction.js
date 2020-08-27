export const uploadAction = (productData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const storage = firebase.storage();
    let reduxstate = getState();
    let imageArray = reduxstate.files;
    let coverIndex = reduxstate.coverIndex;
    // debugger
    console.log(imageArray);
    let imgurl = [];
    imageArray.map((img, index) => {
      const uploadtask = storage
        .ref(
          productData.collection +
            "/" +
            productData.productid +
            "-" +
            productData.productname +
            "/" +
            img.name
        )
        .put(img);
      uploadtask.on(
        "state_changed",
        (snapshot) => {
          if (index === imageArray.length - 1) {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            dispatch({ type: "progress", value: { progress } });
          }
        },
        (error) => {
          console.log(error, "image error");
        },
        () => {
          storage
            .ref(
              productData.collection +
                "/" +
                productData.productid +
                "-" +
                productData.productname
            )
            .child(img.name)
            .getDownloadURL()
            .then((url) => {
              // debugger
              imgurl.push(url);
              if (imgurl.length === imageArray.length) {
                firestore
                  .collection(productData.collection)
                  .doc(productData.productid)
                  .set({
                    ...productData,
                    image_url: imgurl,
                    coverIndex: coverIndex || 0,
                    createdAt: new Date(),
                  })
                  .then(() => {
                    console.log("uploaded");
                    dispatch({ type: "Add_Product" });
                    dispatch({ type: "UPLOAD_SUCCESS" });
                    dispatch({ type: "progress", value: 0 });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            });
        }
      );
    });
  };
};

export const fetchProduct = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    let allcollection = [
      "bags",
      "markers",
      "lunch_boxes",
      "water_bottles",
      "geometry_boxes",
      "pens",
      "notebooks",
      "erasers",
      "end",
    ];
    var data = [];
    allcollection.map((item) => {
      const itemref = firestore.collection(item);
      itemref
        .get()
        .then((snapshot) => {
          dispatch({ type: "ALL_PRODUCT", data: [] });
          if (item === allcollection[8]) {
            dispatch({ type: "ALL_PRODUCT", data: data });
            dispatch({ type: "SEARCH", data: data });
            dispatch({ type: "FILTER_SORT", data: data });
          }
          snapshot.forEach((doc) => {
            if (item === allcollection[8]) {
            } else data.push(doc._document.proto.fields);
            // console.log(doc);
            // console.log(doc._document.proto.fields);
          });

          // dispatch({type: 'ALL_PRODUCT' ,data:data });
        })
        .catch((err) => {
          console.log("Error getting documents", err);
        });
      //   console.log(data);
    });
  };
};

export const fetchCurrentProduct = (url) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    let collection = url.split("/")[1];
    let productid = url.split("/")[2];
    console.log("collection", collection);
    const firestore = getFirestore();
    const docRef = firestore.collection(collection).doc(productid);
    docRef.get().then((snapshot) => {
      let currentProduct = snapshot.data();
      console.log("Snapshot data", !!currentProduct);
      !!currentProduct
        ? dispatch({ type: "CURRENT_PRODUCT", payload: currentProduct })
        : dispatch({ type: "ISPRODUCT", payload: false });
    });
  };
};
