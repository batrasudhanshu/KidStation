import React, { Component } from 'react';
import {connect, useSelector} from 'react-redux';
import {uploadAction} from './actions/UploadAction';
import Test from './Test';
import LinearProgress from '@material-ui/core/LinearProgress';

class CMS extends Component {
    constructor(props){
        super(props);
        this.state={
            productname: '',
            productprice: '',
            productdescription: '',
            productid: '',
            collection: '',
            bestselling:'off',
        }
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
        // console.log(this.state);
        // console.log(this.props.files);
        // alert('Wait for few seconds to upload. You will automatically be redirected to a new page.');
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
                        <input type="text" value={this.state.productid} required name="productid" onChange={this.handleChange} /><br/><br/>
                        <label for="productname">Product-Name</label>
                        <input type="text" value={this.state.productname} required name="productname" onChange={this.handleChange} /><br/>
                        <label for="productprice">Product-Price</label>
                        <input type="text" value={this.state.productprice} name="productprice" onChange={this.handleChange} /><br/>
                        <label for="productdescription">Product-Description</label>
                        <textarea value={this.state.productdescription} name="productdescription" onChange={this.handleChange} ></textarea><br/>
                        {/* <input type="file" onChange={this.handleChangeImage} /><br/> */}
                        <Test />

                        <div className="progress">
                            <LinearProgress variant="determinate" value={this.props.progress || 0} />
                            {/* <ProgressBar id="cms_progressbar" now={this.props.progress} /> */}
                        </div>
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

                        <input type="checkbox" id="bestselling" name="bestselling" onChange={this.handleChange}/>
                        <label for="bestselling"> Best Selling</label><br/>


                        <input type="submit" value="Submit"/>
                     </form>



                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    // debugger
    // console.log(ownProps);
    return {
        progress: state.progress.value.progress
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        uploadAction: (productData) => {
            dispatch(uploadAction(productData))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CMS);