import React from 'react'

const HeaderBanner = (props) => {
    return (
        <>
            <header_banner>
                <div className="header" style={{ backgroundImage:props.bannerImg }}>
                    <div className="inner-header flex">
                        <h1>{props.tag}</h1>
                    </div>
                    <div>
                        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                                <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                                <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                            </g>
                        </svg>
                    </div>
                </div>
            </header_banner>
        </>
    )
}
export default HeaderBanner