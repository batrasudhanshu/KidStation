import React from 'react'

import fulllogo from "../../src/images/Fulllogo_animated.svg";
import sud from "../../src/images/sud.jpg";
import rak from "../../src/images/rak.jpg";
import {NavLink} from 'react-router-dom'




const Footer = () => {
    return (
        
        <footer class="footer-section">
        <div class="container">
            <div class="footer-cta ">
                <div class="row">
                    <div class="col-xl-4 col-sm-4 col-xs-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fa fa-map-marker"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-4 col-xs-4  col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fa fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-4 col-xs-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fa fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content ">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src={fulllogo} class="img-fluid" alt="logo"/></a>
                            </div>
                            <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span >Follow us</span>
                                <a target="_blank" href="https://www.linkedin.com/in/sudhanshu-batra09/" ><img style ={{width:'50px',height:'50px'}} src={sud} alt="Avatar" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/rakshit-maini-769883124/" ><img style ={{width:'50px',height:'50px'}} src={rak} alt="Avatar" /></a>
                                
                                {/* <a href="!#"><i class="fa fa-linkedin-square fa-x linkedin-bg"></i></a> */}
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/bestselling">Best-Selling</NavLink></li>
                            <li><NavLink to="/erasers">Erasers</NavLink></li>
                            <li><NavLink to="/lunch_boxes">Lunch Boxes</NavLink></li>
                            <li><NavLink to="/water_bottles">Water Bottles</NavLink></li>
                            <li><NavLink to="/pens">Pens & Pencils</NavLink></li>
                            <li><NavLink to="/markers">Sketch Pens</NavLink></li>
                            <li><NavLink to="/notebooks">Notebooks</NavLink></li>
                            <li><NavLink to="/geometry_boxes">Geometry Box</NavLink></li>
                            <li><NavLink to="/bags">Bags</NavLink></li>

                            

                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                
                     <div class="col-md-6 col-sm-12 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/track_order">Track Order</a></li>
                                <li><a href="/return_policy">Return </a></li>
                                <li><a href="/shipping_policy">Shipping</a></li>
                                <li><a href="/terms_of_use">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div> 
                    <div class="col-md-6 col-sm-12 col-lg-6 text-center text-lg-center">
                        <div class="copyright-text">
                            <p>Visit Github link  <a target="_blank" href="https://github.com/batrasudhanshu/KidStation">KidStation</a>  for futher Updates..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
   
        
    )
}
export default Footer