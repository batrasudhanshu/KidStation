import React from 'react';
import '../styles/home.css';
import {Grid, Link, Divider} from '@material-ui/core';
import SearchFilter from '../CMS/ProductCrud/SearchFilter';
import CategoryButtons from './HomePage/CategoryButtons'
import BrandSlider from './HomePage/Brands'

const Home = (props) => {
    console.log(props);
    return(
        <div>
            <SearchFilter />
            <div className="home-carousel carousel carouselblock fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
                <div className="carousel-inner">
                    <div className="item slides active">
                        <div className="slide-1"></div>
                        <div className="hero">
                            <hgroup>
                                <h1>KIDSTATION</h1>
                                <h3>A Step Beyond Ordinary</h3>
                            </hgroup>
                            <button className="btn btn-hero btn-lg" role="button">Shop Here</button>
                        </div>
                    </div>
                </div> 
            </div>
            <CategoryButtons/>
            <BrandSlider/>
        </div>
    )
}
export default Home