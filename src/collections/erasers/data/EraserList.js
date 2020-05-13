import React from 'react';
import EraserSummary from './EraserSummary';
import { Link } from 'react-router-dom';

const EraserList = (props) => {
    const {erasers} = props;
    console.log(erasers);
    return (
        <div className="row product-list section" style={{textAlign:'center'}}>

            { erasers && erasers.map((eraser) => {
                // console.log(eraser.id);
                return(
                    <Link to={'/erasers/'+eraser.id}>
                        <EraserSummary eraser={eraser} />
                    </Link>
                )
            })}
        </div>
    )
}

export default EraserList
