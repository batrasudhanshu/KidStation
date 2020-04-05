export const updateEraser = (eraserData) => {
    return (dispatch, getState,{getFirebase, getFirestore} ) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const storage = firebase.storage();
        const uploadtask = storage.ref('erasers/'+eraserData.image.name).put(eraserData.image);
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
                    .ref(eraserData.collection)
                    .child(eraserData.image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url, 'image uploaded');
                        firestore.collection('erasers').doc(eraserData.productid).update({
                            ...eraserData,
                            image: null,
                            image_url: url
                        }).then(()=>{
                            dispatch({type:'Add_Product', data: eraserData});
                            window.location = '/cms/uploadsuccess';
                        }).catch(err=>{
                            console.log(err);
                        })
                    });
            }
        );
        
    }
}