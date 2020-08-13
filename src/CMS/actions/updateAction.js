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
    const coverIndex = getState().coverIndex;
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
                    coverIndex:
                      product.image_url.arrayValue.values.length + coverIndex,
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
