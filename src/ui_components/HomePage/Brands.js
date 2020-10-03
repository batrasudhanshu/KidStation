import React, { useRef } from 'react'
import Slider from "react-slick";
import apsara from '../../images/apsara_logo.jpg'
import natraj from '../../images/natraj_logo.jpg'
import doms from '../../images/doms_logo.jpg'
import classmate from '../../images/classmate_logo.jpg'
import cello from '../../images/classmate_logo.jpg'
import reynolds from '../../images/classmate_logo.jpg'
import faber from '../../images/faber_logo.jpg'
import Container from '@material-ui/core/Container';
import './brands.css';
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 2,
};
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
    }
];

function Brands() {
    const customSlider = useRef();
    return (
        <>
            <Container className="slider-partner" >

                <div className="slider-block">
                    <span className="prev">
                        <i
                            onClick={() => customSlider.current.slickPrev()}
                            class="fa fa-chevron-circle-left"
                            aria-hidden="true"
                        ></i>
                    </span>
                    <span className="next">
                        <i
                            onClick={() => customSlider.current.slickNext()}
                            class="fa fa-chevron-circle-right"
                            aria-hidden="true"
                        ></i>
                    </span>
                    <Slider
                        ref={(slider) => (customSlider.current = slider)}
                        className="slider-outer"
                        {...settings}
                    >
                        {images.map((img, i) => (
                            <div key={i} className="slide">
                                <img src={img.src} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>

        </>
    )
}

export default Brands
