import React from 'react'
import {Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button} from '@material-ui/core'
import { getFirestore } from 'redux-firestore';

class ProductCrudSummary extends React.Component {
    delete(id){
        const firestore = getFirestore();
        firestore.collection(this.props.product.collection.stringValue).doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
            window.location.reload(true);
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
    render(){
        const {product} = this.props;
        return (
            <>
                <Card className="">
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt={product.productname.stringValue}
                        height="140"
                        image={product.image_url.arrayValue.values[0].stringValue}
                        title={product.productname.stringValue}
                        /> 
                        <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            {product.productname.stringValue}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary">
                            <i class="fa fa-edit fa-2x"/>Edit
                        </Button>
                        <Button onClick={()=>this.delete(product.productid.stringValue)} size="large" color="primary">
                            <i class="fa fa-trash fa-2x"/>Delete
                        </Button>
                    </CardActions>
                </Card> 
            </>
        )
    }
}

export default ProductCrudSummary
