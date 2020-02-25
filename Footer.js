import React from 'react'
import '../styles/Footer.css'
import {NavLink} from 'react-router-dom'
import logo_img from '../images/logo.png'

const Footer = () => {
    return (
        <div>
            <footer  className="footer">
                <div className="footer_content">
                    <div className="section_container">
                        <div className="container">
                            <div className="row">

                                {/* <!-- About --> */}
                                <div className="col-xxl-3 col-md-4 footer_col">
                                    <div className="footer_about">
                                        {/* <!-- Logo --> */}
                                        <div className="row">
                                           <img className= " col-4 logo_name_img"src={logo_img}></img>
                                           <span className="col-8">KidStation</span><br/>
                                           
                                        </div>
                                        <div className="footer_about_text">
                                            <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam fringilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- menus --> */}
                                <div className="col-xxl-3 col-md-4 footer_col">
                                    <div className="footer_questions">
                                        <div className="footer_title">questions</div>
                                        <div className="footer_list">
                                            <ul>
                                                <li>
                                                <NavLink to="">About us</NavLink>
                                                </li>
                                                <li>
                                                <NavLink to="">Track Orders</NavLink>
                                                </li>
                                                <li>
                                                <NavLink to="/return">Return Policy</NavLink>
                                                </li>
                                                <li>
                                                <NavLink to="">Terms of Use</NavLink>
                                                </li>
                                                <li>
                                                <NavLink to="">Contact Us</NavLink>
                                                </li>
                                                {/* <li><a href="#">About us</a></li>
                                                <li><a href="#">Track Orders</a></li>
                                                <li><a href="#">Return Policy</a></li>
                                                <li><a href="#">Terms of Use</a></li>
                                                <li><a href="#">Contact Us</a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Contact --> */}
                                <div className="col-xxl-3 col-md-4 footer_col">
                                    <div className="footer_contact">
                                        <div className="footer_title">Follow us on:</div>
                                        <div className="footer_contact_list row">
                                            <ul>
                                                <li className="d-flex flex-row align-items-start justify-content-start col-6"> <a href="https://www.instagram.com/step_beyond_ordinary/?igshid=1gk7m954ylauf">
                                                        <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                                            <div className="footer_social_icon"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                                                            <div className="footer_social_title">instagram</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="d-flex flex-row align-items-start justify-content-start col-6"> <a href="https://www.facebook.com/Kidstation-Step_beyond_Ordinary-2223183277758185/">
                                                        <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                                            <div className="footer_social_icon"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                                                            <div className="footer_social_title">facebook</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </div>
    )
}
export default Footer