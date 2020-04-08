export const uploadAction = (productData) => {
    return (dispatch, getState,{getFirebase, getFirestore} ) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const storage = firebase.storage();
        const uploadtask = storage.ref(productData.collection+'/'+productData.image.name).put(productData.image);
        uploadtask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(progress);
            },
            error => {
                console.log(error, 'image error');
            },
            () => {
                storage
                    .ref(productData.collection)
                    .child(productData.image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url, 'image uploaded');
                        if(productData.bestselling=='on'){
                            firestore.collection('bestselling').doc(productData.productid).set({
                                ...productData,
                                image: null,
                                image_url: url
                            }).then(()=>{
                                console.log('Best Selling added');
                            }).catch(error=>{
                                console.log(error);
                            });
                        }
                        firestore.collection(productData.collection).doc(productData.productid).set({
                            ...productData,
                            image: null,
                            image_url: url
                        }).then(()=>{
                            dispatch({type:'Add_Product', data: productData});
                            window.location = '/cms/uploadsuccess';
                        }).catch(err=>{
                            console.log(err);
                        });
                        
                    });

            }
        );
        
    }
}