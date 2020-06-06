import React, { Component } from "react";

const images = [
    {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
    },
    {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
    },
    {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
    },
    {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
    },
    {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
    },
    {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
    },
    {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
    },
    {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
    },
]

class Brands extends Component {
  render() {
    return (
        <div className="slider-main">  
            <div className="slider">
                <div className="slide-track">
                    {images.map((img,i)=>(
                        <div className="slide">
                        <img
                        src={img.src} height="100" width="250" alt=""
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
  }
}

export default Brands;
