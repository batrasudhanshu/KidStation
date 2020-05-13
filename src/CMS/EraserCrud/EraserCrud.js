import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import {fetchProduct} from '../actions/UploadAction';
import EraserCrudList from './EraserCrudList'
import firebase from 'firebase/app'

class EraserCrud extends React.Component {
    componentWillMount = () =>{
        this.props.fetchProduct()
    }
    render(){
            
        // const {erasers} = this.props;
        // console.log(erasers);
        
        return (
            <div>
                {/* <div className="row">
                    <h2 style={{textAlign:'center', margin:'20px'}}>ERASERS</h2>
                    <EraserCrudList erasers={erasers} />
                </div> */}
                <h1>Working</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    
    return { 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct())
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      {collection: 'Product' }
  ])
)(EraserCrud);