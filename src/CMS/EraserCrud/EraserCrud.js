import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import EraserCrudList from './EraserCrudList'

class EraserCrud extends React.Component {
    render(){
        const {erasers} = this.props;
        console.log(erasers);
        
        return (
            <div>
                <div className="row">
                    <h2 style={{textAlign:'center', margin:'20px'}}>ERASERS</h2>
                    <EraserCrudList erasers={erasers} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        erasers: state.firestore.ordered.erasers    
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      {collection: 'erasers' }
  ])
)(EraserCrud)