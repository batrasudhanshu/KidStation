import React from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

class Shop extends React.Component {
    render(){
        const {erasers} = this.props;
        console.log(erasers);
        return (
            
            <div className="container section project-details">
                <div className="">
                    <h1>Eraser</h1>
                </div>
            </div>
          )
    }
}
const mapStateToProps = (state,ownProps) => {
    console.log(state);
    // const id = ownProps.match.params.id;
    // // console.log(id);
    // const erasers = state.firestore.data.erasers;
    // const eraser = erasers ? erasers[id]:null;
    return {
        erasers: state.firestore.ordered.erasers
    }
}
  


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'erasers'}
    ])
)(Shop);