import React, { Component } from 'react'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import EraserList from './EraserList'


class EraserRoot extends Component {
    render() {
    
        // console.log(this.props);
        const { erasers } = this.props;
        // console.log(erasers);
        return (
          <div>
              <EraserList erasers={erasers} />
          </div>
        )
      }
}

const mapStateToProps = (state, ownprops) => {
    // console.log(state);
    // console.log(ownprops);
    // const eraserNatraj = ownpropserasers && erasers.Natraj;
    return {
        erasers: state.firestore.ordered.erasers
    }
  }
  
  export default compose(
      connect(mapStateToProps),
      firestoreConnect([
        {collection: 'erasers' }
    ])
  )(EraserRoot)