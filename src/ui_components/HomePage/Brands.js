import React, { Component } from "react";
import apsara from '../../images/apsara_logo.jpg'
import natraj from '../../images/natraj_logo.jpg'
import doms from '../../images/doms_logo.jpg'
import classmate from '../../images/classmate_logo.jpg'
import cello from '../../images/classmate_logo.jpg'
import reynolds from '../../images/classmate_logo.jpg'
import faber from '../../images/faber_logo.jpg'
const images = [
    {
        src: reynolds
    },
    {
        src: apsara,
    },
    {
        src: doms
    },
    {
        src: classmate
    },
    {
        src: natraj
    },
    {
        src: faber
    },
    {
        src: cello
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
