import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/sidebar.css'
import $ from "jquery"
import logo_img from '../images/logo.png'

// let logo_style = {
//     backgroundImage: 'url(' + logo_img + ')',
//     size:'100px'
// };

class Sidebar extends Component{
  
    componentDidMount(){
        $("#menu-close").click(function(e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
          });
          $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
          });
          $('li.dropdown').click(function() {
            $('li.dropdown').not(this).find('ul').hide();
            $(this).find('ul').toggle();
});
    }

    render(){
    return(
        <sidebar>
            <a id="menu-toggle" href="#" className="btn btn-primary btn-lg toggle left"><i className="fa fa-arrow-left left_icon"></i></a>
                <div class="col-md-12 social_icons">
                    <ul class="social-network social-circle">
                        <li><a href="https://www.facebook.com/Kidstation-Step_beyond_Ordinary-2223183277758185/" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/step_beyond_ordinary/?igshid=1gk7m954ylauf" class="icoTwitter" title="Instagram"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#" class="icoGoogle" title="WhatsApp"><i class="fa fa-whatsapp"></i></a></li>
                        
                    </ul>				
				</div>
            <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                
                <a id="menu-close" href="#" className="btn btn-default btn-lg pull-right toggle left"><i className="glyphicon glyphicon-remove left"></i></a>
                <li className="sidebar-brand">
                
                    <img src={logo_img} className="logo_img"/>
                </li>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li className="has_sub">
                <NavLink to="">Shop</NavLink>
                </li>
                <li className="dropdown">
                <NavLink to="">Categories</NavLink>
                {/* <a className="has_sub dropdown-toggle" data-toggle="dropdown">Categories</a> */}
                    <ul className="categories_show">
                    <li>
                    <NavLink to="/erasers">Erasers, Sharpners</NavLink></li>

                    <li><NavLink to="/rulers">Rulers</NavLink></li>
                    <li><a href="#">Lunch Boxes</a></li>
                    <li><a href="#">Water Bottles</a></li>
                    
                    <li>
                    <NavLink to="/notebook_registers">Notebooks & Registers</NavLink>
                    </li>
                    <li><NavLink to="/pens_pencils">Pens & Pencils</NavLink></li>
                    <li><a href="#">Sketch Pens and Markers</a></li>
                    <li><a href="#">Stationery kits</a></li>
                    
                    </ul>
                </li>
                <li className="has_sub">
                <NavLink to="">Best Selling</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                <NavLink to="">Track your Order</NavLink>
                </li>
            </ul>
            </div>
        </sidebar>
    );
} 
}
export default Sidebar;