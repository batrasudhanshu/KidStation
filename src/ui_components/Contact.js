
import React from "react";
import '../styles/contact_page.css'
// import './js/contact_page';
// import './js/contact_map';


const Contact = () => {
  return (
      <contact_page>
		<div className="contact-pageheader">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="contact-caption">
                        <h1 className="contact-title">Don’t Be Shy, Talk to Us.</h1>
                        <p className="contact-text">Here is a few approaches to get in touch with me. It would be ideal if you send an email, fill the contact form <strong>I'm looking forward to speaking with you.</strong>
                        </p>
                    </div>
                </div>
                <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12">
                    <div className="contact-form">
                        <h3 className="contact-info-title">Contact Me</h3>
                        <div className="row">
                            <form>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="control-label sr-only " for="Name"></label>
                                        <input id="name" type="text" placeholder="Name" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="control-label sr-only " for="email"></label>
                                        <input id="email" type="text" placeholder="Email" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="control-label sr-only " for="Phone"></label>
                                        <input id="phone" type="text" placeholder="Phone" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="control-label required sr-only" for="select"></label>
                                        <select className="form-control">
                                            <option value="">What Are You Getting In Touch?</option>
                                            <option value="">Relationship</option>
            
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20">
                                    <div className="form-group">
                                        <label className="control-label sr-only" for="textarea"></label>
                                        <textarea className="form-control pdt20" id="textarea" name="textarea" rows="4" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                    <button className="btn btn-primary btn-lg ">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="space-medium">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb60">
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                    <div id="contact-map">
                        {/* <MapContainer/> */}
                    </div>
                </div>
                <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-6 col-xs-12">
                    <div className="">
                        <h3 className="title-bold">Contact Info</h3>
                        <p>Please help us serve you better by sharing the following information.
                        </p>
                    </div>
                    <div className="contact-section">
                        <div className="contact-icon"><i className="fa fa-map-marker"></i></div>
                        <div className="contact-info">
                            <p>24/101 West Patel Nagar</p>
                            <p>New Delhi-8, India</p>
                        </div>
                    </div>
                     <div className="contact-section">
                        <div className="contact-icon"><i className="fa fa-phone"></i></div>
                        <div className="contact-info">
                            <p>+91 99998 13790</p>
                        </div>
                    </div>
                     <div className="contact-section">
                        <div className="contact-icon"><i className="fa fa-envelope"></i></div>
                        <div className="contact-info">
                            <p>john@lifecoach.com</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

      </contact_page>
    
    )
};

export default Contact;