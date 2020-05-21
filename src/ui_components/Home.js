import React from 'react';
import '../styles/home.css';
import fulllogo from '../../src/images/Fulllogo_animated.svg';
import {Grid, Link, Divider} from '@material-ui/core';

const Home = () => {

    return(
        <div>
            {/* <Grid container xs={12} className="navigation">
                <Grid item xs={3} className="fulllogo">
                    <img src={fulllogo} width="100%" />
                </Grid>
                <Grid xs={4} md={5} ></Grid>
                <Grid item xs={5} md={4} className="RightNavItems">
                    <div >
                        <span>
                            <Link style={{textDecoration:'none'}} to="">
                                Support 
                            </Link>
                        </span>
                        <span>
                            <Link style={{textDecoration:'none'}} to="">
                                Help
                            </Link>
                        </span>
                    </div>
                </Grid>
            </Grid> */}
            <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
                
                <div className="overlay"></div>

                
                {/* <ol className="carousel-indicators">
                    <li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#bs-carousel" data-slide-to="1"></li>
                    <li data-target="#bs-carousel" data-slide-to="2"></li>
                </ol> */}
                
                
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
        </div>
    )
}
export default Home