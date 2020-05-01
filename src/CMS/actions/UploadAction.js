export const uploadAction = (productData) => {
    return (dispatch, getState,{getFirebase, getFirestore} ) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const storage = firebase.storage();
        const data = getState();

        let imageArray = data.files;
        imageArray.map(img=>{
            
        })
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
                        if(productData.bestselling =='on'){
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
                        firestore.collection(productData.collection+'/'+'root'+'/'+'Product').doc(productData.productid).set({
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

export const fetchProduct = () => {
    return (dispatch, getState,{getFirebase, getFirestore} ) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const storage = firebase.storage();
        let allcollection = ['rulers','markers','lunch_boxes','water_bottles','stationary_kits','pens','notebooks', 'erasers'];
        var data=[];
        allcollection.map(item=>{
            const itemref = firestore.collection(item);
            let allProduct = itemref.get()
            .then(snapshot => {
                snapshot.forEach(doc => {

                    data.push(doc._document.proto.fields);
                    // console.log(doc);
                    // console.log(doc._document.proto.fields);
                });
              })
              .catch(err => {
                console.log('Error getting documents', err);
              })
              console.log(data);
              dispatch({type: 'ALL_PRODUCT' ,data:data });
        });
        
    }
}

