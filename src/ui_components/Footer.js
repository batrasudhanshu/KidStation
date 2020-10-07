import React from "react";
import fulllogo from "../../src/images/Fulllogo.svg";
import insta from "../../src/images/insta.png"
import fb from "../../src/images/fb.png";
import maruti from "../images/maruti.jpg";
import dtdc from "../images/dtdc.jpeg"
import trackon from '../images/trackon.png';
import proffessional from '../images/proffessional.jpg'
import { NavLink, Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta ">
          <div class="row">
            <div class="col-xl-4 col-sm-4 col-xs-4 col-md-4 mb-30">
              <div class="single-cta">
                <Link to="/contact">
                  <i class="fa fa-map-marker"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                  </div>
                </Link>
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
                <a href="mailto:kidstation2020@gmail.com">
                  <i class="fa fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content ">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <Link to="/">
                    <img src={fulllogo} className="img-fluid" alt="logo" />
                  </Link>
                </div>
                <div class="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div class="footer-social-icon">
                  <span>Follow us on</span>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/sudhanshu-batra09/"
                  >
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={fb}
                      alt="@Step_Beyond_Ordinary"
                    />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/rakshit-maini-769883124/"
                  >
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={insta}
                      alt="@Step_Beyond_Ordinary"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/bestselling">Best-Selling</NavLink>
                  </li>
                  <li>
                    <NavLink to="/erasers">Erasers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/lunch_boxes">Lunch Boxes</NavLink>
                  </li>
                  <li>
                    <NavLink to="/water_bottles">Water Bottles</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pens">Pens & Pencils</NavLink>
                  </li>
                  <li>
                    <NavLink to="/markers">Sketch Pens</NavLink>
                  </li>
                  <li>
                    <NavLink to="/notebooks">Notebooks</NavLink>
                  </li>
                  <li>
                    <NavLink to="/geometry_boxes">Geometry Box</NavLink>
                  </li>
                  <li>
                    <NavLink to="/bags">Bags</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  {/* <h3>Subscribe</h3> */}
                  <h3>Our Courier Partners</h3>
                </div>

                <div className="footer-courier-partners">
                  <Grid container spacing={1}>
                    <Grid item md={6}>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/sudhanshu-batra09/"
                      >
                        <img

                          src={maruti}
                          alt="Maruti Courier Services"
                        />
                      </a>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/rakshit-maini-769883124/"
                      >
                        <img

                          src={dtdc}
                          alt="@Step_Beyond_Ordinary"
                        />
                      </a>
                    </Grid>
                    {/* <br /> */}
                    <Grid item md={6}>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/rakshit-maini-769883124/"
                      >
                        <img

                          src={trackon}
                          alt="@Step_Beyond_Ordinary"
                        />
                      </a>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/rakshit-maini-769883124/"
                      >
                        <img

                          src={proffessional}
                          alt="@Step_Beyond_Ordinary"
                        />
                      </a>
                    </Grid>
                  </Grid>
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
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/track_order">Track Order</Link>
                  </li>
                  <li>
                    <Link to="/refund_policy">Refund</Link>
                  </li>
                  <li>
                    <Link to="/shipping_policy">Shipping</Link>
                  </li>
                  <li>
                    <Link to="/terms_of_use">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-6 text-center text-lg-center">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2020 All Rights Reserved by {" "}
                  <a href="/">KidStation</a>.
                  {/* <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/batrasudhanshu/KidStation"
                  >
                    KidStation
                  </a>{" "} */}

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
