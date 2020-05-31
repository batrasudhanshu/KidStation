export const fetchProductOnFilter = (data) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        let products = getState().products;
        
        let filteredProducts;
        let bestselling;
        let filtering = [];
        data.filter.length!=0 && products.map(product=>{
            data.filter.map(d=>{
                if(d==product.collection.stringValue){
                    filtering.push(product);
                }
            })
        });
        if(data.bestselling){
            bestselling = filtering.filter(product=>product.bestselling.booleanValue==true);
            filtering = bestselling;
        }
        // console.log("Filter/Sort:",filtering);
        // if(filtering.length!=0)
        //     filteredProducts = filtering;
        // else filteredProducts = products || [];
        // debugger
        if(filtering.length==0)
        {
            filteredProducts = products || [];
        }
        else{
            filteredProducts = filtering;
        }
        // console.log(filteredProducts);


        function compareName(a,b){
            const nameA = a.productname.stringValue.toUpperCase();
            const nameB = b.productname.stringValue.toUpperCase();
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        }
        function comparePrice(a,b){
            const priceA = parseInt(a.productprice.stringValue);
            const priceB = parseInt(b.productprice.stringValue);
            let comparison = 0;
            if (priceA > priceB) {
                comparison = 1;
            } else if (priceA < priceB) {
                comparison = -1;
            }
            return comparison;
        }
        function compareTimeStamp(a,b){
            const timestampA = a.modifiedat.timestampValue;
            const timestampB = b.modifiedat.timestampValue;
            let comparison = 0;
            if (timestampA > timestampB) {
                comparison = 1;
            } else if (timestampA < timestampB) {
                comparison = -1;
            }
            return comparison;
        }

        switch(data.sort){
            case 'productname':
                filteredProducts = filteredProducts.sort(compareName);
                break;
            case 'lowtohigh':
                filteredProducts = filteredProducts.sort(comparePrice);
                break;
            case 'hightolow':
                filteredProducts.sort(comparePrice);
                filteredProducts = filteredProducts.reverse(comparePrice);
                break;
            case 'timestamp':
                filteredProducts.sort(compareTimeStamp);
                filteredProducts = filteredProducts.reverse(comparePrice);
                break;
            default:
                break;
        }
            
        console.log(filteredProducts);
        dispatch({type:'FILTER_SORT', data:[...filteredProducts]});
    }
} 