import React, { Component } from 'react';
import {connect} from 'react-redux';
import {uploadAction} from './actions/UploadAction'

class CMS extends Component {
    state={
        productname: '',
        productprice: '',
        productdescription: '',
        productid: '',
        Notebook: 'off',
        Lunch: 'off',
        Pen: 'off',
        image:null

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
    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.uploadAction(this.state);
        
    }
    render() {
        return (
            <div className="container" style={{textAlign:'center'}}>
                <div className="product-info">
                    {/* name,price,description,image,productid, checkbox */}
                    <h3>Product Info</h3>
                    <form onSubmit={this.onSubmit}>
                        <label for="productid">Product-Id</label>
                        <input type="text" value={this.state.productid} name="productid" onChange={this.handleChange} /><br/><br/>
                        <label for="productname">Product-Name</label>
                        <input type="text" value={this.state.productname} name="productname" onChange={this.handleChange} /><br/>
                        <label for="productprice">Product-Price</label>
                        <input type="text" value={this.state.productprice} name="productprice" onChange={this.handleChange} /><br/>
                        <label for="productdescription">Product-Description</label>
                        <textarea value={this.state.productdescription} name="productdescription" onChange={this.handleChange} ></textarea><br/>
                        <input type="file" onChange={this.handleChangeImage} /><br/>

                        <input type="checkbox" id="Pen" name="Pen" onChange={this.handleChange}/>
                        <label for="Pen"> Pens</label><br/>

                        <input type="checkbox" id="Notebook" name="Notebook" onChange={this.handleChange}/>
                        <label for="Notebook">Notebooks</label><br/>

                        <input type="checkbox" id="Lunch" name="Lunch" onChange={this.handleChange}/>
                        <label for="Lunch"> Lunch</label><br/><br/>

                        <input type="submit" value="Submit"/>
                     </form>



                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        uploadAction: (productData) => {
            dispatch(uploadAction(productData))
        }
    }
}
export default connect(null,mapDispatchToProps)(CMS);