import React from 'react'

const EraserCrudSummary =(props) => {
    const {eraser} = props;
        return (
            <div class="card">
                <img style={{margin:'auto', textAlign:'center',display:'block'}} class="card-img-top" src={eraser.image_url} width="80%"/>
                <div class="card-block">
                    <h4 style={{textAlign:'center', margin:'10px'}} className="text-bold">{eraser.productname}</h4>
                </div>
            </div>
        )
}

export default EraserCrudSummary
