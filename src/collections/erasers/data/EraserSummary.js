import React from 'react'

const EraserSummary = ({eraser}) => {
    return (
        <div>
                <div className="image">
                    <img src={eraser.image_url} width="300px" height="300px" />
                </div>
                <div>
                    Name: {eraser.productname} <br/>
                    Price: Rs{eraser.productprice}
                </div>
        </div>
    )
}

export default EraserSummary
