import React, { Component } from 'react';
import {connect} from 'react-redux';
import {uploadAction} from './actions/UploadAction'

class CMS extends Component {
    state={
        productname: '',
        productprice: '',
        productdescription: '',
        productid: '',
        collection: '',
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
        alert('Wait for few seconds to upload. You will automatically be redirected to a new page.');
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

                        <input type="radio" id="Pen" name="collection" value="pens" onChange={this.handleChange}/>
                        <label for="Pen"> Pens</label><br/>

                        <input type="radio" id="water_bottles" name="collection" value="water_bottles" onChange={this.handleChange}/>
                        <label for="water_bottles"> Water Bottle</label><br/>

                        <input type="radio" id="Rulers" name="collection" value="rulers" onChange={this.handleChange}/>
                        <label for="Rulers"> Rulers</label><br/>
                        
                        <input type="radio" id="StationaryKits" name="collection" value="stationary_kits" onChange={this.handleChange}/>
                        <label for="StationaryKits"> Stationary Kits</label><br/>

                        <input type="radio" id="Notebooks" name="collection" value="notebooks" onChange={this.handleChange}/>
                        <label for="Notebooks">Notebooks</label><br/>

                        <input type="radio" id="Lunch" name="collection" value="lunch_boxes" onChange={this.handleChange}/>
                        <label for="Lunch"> Lunch</label><br/>

                        <input type="radio" id="Erasers" name="collection" value="erasers" onChange={this.handleChange}/>
                        <label for="Erasers"> Erasers</label><br/>

                        <input type="radio" id="Markers" name="collection" value="markers" onChange={this.handleChange}/>
                        <label for="Markers"> Markers</label><br/>


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