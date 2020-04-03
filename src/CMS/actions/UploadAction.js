export const uploadAction = (productData) => {
    return (dispatch, getState,{getFirebase, getFirestore} ) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const storage = firebase.storage();
        const uploadtask = storage.ref('images/'+productData.image.name).put(productData.image);
        uploadtask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error, 'image error');
            },
            () => {
                storage
                    .ref("images")
                    .child(productData.image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url, 'image uploaded');
                        firestore.collection('erasers').doc(productData.productid).set({
                            ...productData,
                            image: null,
                            image_url: url
                        }).then(()=>{
                            dispatch({type:'Add_Product', data: productData});
                        }).catch(err=>{
                            console.log(err);
                        })
                    });
            }
        );
        
    }
}