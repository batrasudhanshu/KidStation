import React from 'react';
import EraserCrudSummary from './EraserCrudSummary';
import { Link } from 'react-router-dom';
import { getFirestore } from 'redux-firestore';

class EraserCrudList extends React.Component {
    delete(id){
        const firestore = getFirestore();
        firestore.collection('erasers').doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
    render(){
        const {erasers} = this.props;
        console.log(erasers);
        return (
            <div className="product-list section">
                    { erasers && erasers.map((eraser) => {
                        // console.log(eraser.id);
                        return(
                            <div style={{padding:'0'}} class="col-sm-6 col-md-4 col-lg-3 mt-4" key={eraser.id}>
                                <div style={{width:'80%', margin:'auto'}} className="row">
                                    <Link to={'/cms/eraser/update/'+eraser.id}><span className="col-3 text-left"><button className=" btn"><i className="fa fa-edit fa-lg"></i> </button></span></Link>
                                    <span style={{float:'right'}} className="col-3 text-right"><button onClick={()=>{this.delete(eraser.id)}}  className="col-4 btn"><i className="fa fa-trash fa-lg"></i> </button></span>
                                </div>
                                <Link to={'/cms/eraser/update/'+eraser.id}>
                                    <EraserCrudSummary eraser={eraser} />
                                </Link>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default EraserCrudList
