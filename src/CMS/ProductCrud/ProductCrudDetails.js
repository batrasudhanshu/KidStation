import React from 'react';
import { connect } from 'react-redux';
import { Grid, TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Test from '../Test';
import CancelIcon from '@material-ui/icons/Cancel';
import { getFirebase} from 'react-redux-firebase'
import { getFirestore } from 'redux-firestore';


class ProductCrudDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
            productname:'',
            productprice: '',
            productdescription: '',
            productid: props.match.params.id,
            image:null
        }
    }

    deleteImage = (img,index) =>{
        let {product} = this.props;
        var firestore = getFirestore();
        var firebase = getFirebase();
        var storage = firebase.storage();
        const FieldValue = firebase.firestore.FieldValue;
        firestore.collection(product.collection.stringValue).doc(product.productid.stringValue).update(
            {
                "image_url": FieldValue.arrayRemove(img)
            }
        )
        var imageRef = storage.refFromURL(img);
        imageRef.delete().then(function() {
            // File deleted successfully
            console.log('file deleted successfully');
            window.location.reload();
          }).catch(function(error) {
            // Uh-oh, an error occurred!
            console.log('error in file deletion');
          });
    }
    
    handleChange=(e)=>{
        return(
            this.setState({
                [e.target.name]: e.target.value
            })
        );
    }
    handleChangeImage = (e) => {
        return(
            this.setState({
                image: e.target.files[0]
            })
        )
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.updateEraser(this.state);
    }
    render() {
        
        const {product} = this.props;
        console.log(product);
        return (
            <>
              {
                  product && <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <h2 className="crud-details-title">Update Product Details</h2>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="crud-details-upload-container">
                                <h3>Uploaded Images</h3>
                                <div className="crud-details-uploaded-images">
                                    {
                                        product.image_url.arrayValue.values.map((img,index)=>{
                                            return(
                                                <div className="remove-image-block">
                                                    <img src={img.stringValue} width="50px" height="50px" />
                                                    <CancelIcon onClick={()=>this.deleteImage(img.stringValue, index)} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="crud-details-dropzone">
                                <Test />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <form className="crud-details-form" noValidate autoComplete="off">
                                <TextField className="crud-details-field" id="standard-basic" defaultValue="Normal" label="Product Name" variant="outlined" />
                                <TextField className="crud-details-field" id="filled-basic" defaultValue="Normal" label="Product Price" variant="outlined" />
                                <TextField className="crud-details-field" id="outlined-basic" defaultValue="Normal" label="Product Description" multiline variant="outlined" />
                                <div className="crud-details-checkbox-outer crud-details-field">
                                <FormControlLabel
                                    className="crud-details-checkbox"
                                    value="bestselling"
                                    control={<Checkbox 
                                        color="primary"
                                        icon={<CheckBoxOutlineBlankIcon style={{width:25, height:25}}/>}
                                        checkedIcon={<CheckBoxIcon style={{width:25, height:25}}/>}
                                        />
                                    }
                                    label="Best Selling"
                                    labelPlacement="End"
                                />
                                </div>
                            </form>
                        </Grid>
                  </Grid>
              }  
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    console.log(id);
    console.log(state);
    return {
        product: state.SelectedProduct
    }
}

export default connect(mapStateToProps)(ProductCrudDetails)