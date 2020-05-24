import React from 'react'
import '../styles/header_banner.css';
// import EraserRoot from '../collections/erasers/data/EraserRoot'
const Eraser = () => {
    return(
    <eraser>
    <header_banner>
    <div className="header">


        <div className="inner-header flex">

        
        <i className="fa fa-eraser" aria-hidden="true"></i>
        <h1>Erasers & Sharpners</h1>
        </div>


        <div>
        <svg className="waves" 
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
        <use href="#gentle-wave" x="40" y="0" fill="rgba(255,255,255,0.7" />
        <use href="#gentle-wave" x="40" y="3" fill="rgba(255,255,255,0.5)" />
        <use href="#gentle-wave" x="40" y="5" fill="rgba(255,255,255,0.3)" />
        <use href="#gentle-wave" x="40" y="7" fill="#fff" />
        </g>
        </svg>
        </div>


        </div>
    </header_banner>

    {/*<EraserRoot />*/}
    </eraser>
    )
}
export default Eraser