export const updateEraser = (eraserData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const storage = firebase.storage();
    const uploadtask = storage
      .ref("erasers/" + eraserData.image.name)
      .put(eraserData.image);
    uploadtask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        console.log(error, "image error");
      },
      () => {
        storage
          .ref(eraserData.collection)
          .child(eraserData.image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url, "image uploaded");
            firestore
              .collection("erasers")
              .doc(eraserData.productid)
              .update({
                ...eraserData,
                image: null,
                image_url: url,
              })
              .then(() => {
                dispatch({ type: "Add_Product", data: eraserData });
                window.location = "/cms/uploadsuccess";
              })
              .catch((err) => {
                console.log(err);
              });
          });
      }
    );
  };
};

export const updateProductData = (productData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    // const firebase = getFirebase();
    // const storage = firebase.storage();

    firestore
      .collection(productData.collection)
      .doc(productData.productid)
      .update({
        ...productData,
      })
      .then(() => {
        dispatch({ type: "Add_Product", data: productData });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addImages = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const storage = firebase.storage();
    const FieldValue = firebase.firestore.FieldValue;
    let reduxstate = getState();
    let imageArray = reduxstate.files;
    // debugger
    console.log(imageArray);
    let imgurl = [];
    imageArray.map((img, index) => {
      const uploadtask = storage
        .ref(
          product.collection.stringValue +
            "/" +
            product.productid.stringValue +
            "-" +
            product.productname.stringValue +
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
              product.collection.stringValue +
                "/" +
                product.productid.stringValue +
                "-" +
                product.productname.stringValue
            )
            .child(img.name)
            .getDownloadURL()
            .then((url) => {
              imgurl.push(url);

              if (imgurl.length === imageArray.length) {
                firestore
                  .collection(product.collection.stringValue)
                  .doc(product.productid.stringValue)
                  .update({
                    image_url: FieldValue.arrayUnion.apply(null, imgurl),
                  })
                  .then(() => {
                    console.log("uploaded");
                    window.location.reload();
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
