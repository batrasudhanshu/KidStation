import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import PenCrudList from './PenCrudList'

class EraserCrud extends React.Component {
    render(){
        const {pens} = this.props;
        console.log(pens);
        
        return (
            <div>
                <div className="row">
                    <h2 style={{textAlign:'center', margin:'20px'}}>Pens & Pencils</h2>
                    <PenCrudList pens={pens} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        pens: state.firestore.ordered.pens    
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      {collection: 'pens' }
  ])
)(PenCrud)