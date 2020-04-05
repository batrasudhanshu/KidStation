import React from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {updateEraser} from '../actions/updateAction';
class EraserCrudDetails extends React.Component {
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
        const {eraser} = this.props;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div style={{margin:'50px'}} className="col-md-5">
                            <img src={this.state.image!=null?URL.createObjectURL(this.state.image):eraser.image_url} width="500px" height="500px" />
                            <input className="" type="file" onChange={this.handleChangeImage} />
                        </div>
                        <div style={{margin:'50px'}} className="col-md-3">
                            <div style={{margin:'20px'}}>
                                Name: <br/>
                                <input type="text" name="productname" placeholder={eraser.productname} onChange={this.handleChange} />
                            </div>
                            <div style={{margin:'20px'}}>
                                Price:<br/>
                                <input type="text" name="productprice" placeholder={eraser.productprice} onChange={this.handleChange} />
                            </div>
                            <div style={{margin:'20px'}}>
                                Description:<br/>
                                <textarea name="productdescription" placeholder={eraser.productdescription} onChange={this.handleChange} ></textarea>
                            </div>
                            <div style={{margin:'20px'}}>
                                <input className="btn-primary" value="Update Product" type="submit" />
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    // console.log(id);
    const erasers = state.firestore.data.erasers;
    const eraser = erasers ? erasers[id]:null;
    return {
        eraser: eraser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateEraser: (eraserData) => {
            dispatch(updateEraser(eraserData))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'erasers'}
    ])
)(EraserCrudDetails)