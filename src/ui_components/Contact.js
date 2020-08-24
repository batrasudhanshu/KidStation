import React, { useState, useEffect } from "react";
import "../styles/contact_page.css";
import MapComponent from "./Map";
import SearchFilter from "../CMS/ProductCrud/SearchFilter";
import * as emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [details, setdetails] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    userType: "Customer",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(details);
  const handleChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, userType, message, subject } = details;

    let templateParams = {
      from_name: name,
      to_name: "kidstation2020@gmail.com",
      subject_html: userType + " : " + subject,
      message_html: message,
      reply_to: email,
    };
    emailjs.send(
      "gmail",
      "template_clbsb9rW",
      templateParams,
      "user_1sa03CAEgns46qxvtblwr"
    );
    toast("Mail sent successfully.");
    setdetails({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
      userType: "Customer",
    });
  };
  const { name, email, subject, phone, message, userType } = details;
  return (
    <contact_page>
      <ToastContainer />
      <SearchFilter />
      <div className="contact-pageheader">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="contact-caption">
                <h1 className="contact-title">Don’t Be Shy, Talk to Us.</h1>
                <p className="contact-text">
                  Here are a few approaches to get in touch with us. It would be
                  ideal if you send an email, please fill the contact form.{" "}
                  <br />
                  <strong>We're looking forward to speaking with you.</strong>
                </p>
              </div>
            </div>
            <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12">
              <div className="contact-form">
                <h3 className="contact-info-title">Contact Me</h3>
                <div className="row">
                  <form onSubmit={handleSubmit}>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label
                          className="control-label sr-only "
                          for="Name"
                        ></label>
                        <input
                          name="name"
                          value={name}
                          type="text"
                          placeholder="Name"
                          className="form-control"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label
                          className="control-label sr-only "
                          for="email"
                        ></label>
                        <input
                          name="email"
                          value={email}
                          type="text"
                          placeholder="Email"
                          className="form-control"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label
                          className="control-label sr-only "
                          for="Phone"
                        ></label>
                        <input
                          name="phone"
                          value={phone}
                          type="text"
                          placeholder="Phone"
                          className="form-control"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label
                          className="control-label required sr-only"
                          for="select"
                        ></label>
                        <select
                          name="userType"
                          className="form-control"
                          placeholder="Who are you!!"
                          onChange={handleChange}
                        >
                          <option value="Customer">Customer</option>
                          <option value="Reseller">Re-Seller</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label
                          className="control-label sr-only "
                          for="Phone"
                        ></label>
                        <input
                          name="subject"
                          value={subject}
                          type="text"
                          placeholder="Subject"
                          className="form-control"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20">
                      <div className="form-group">
                        <label
                          className="control-label sr-only"
                          for="textarea"
                        ></label>
                        <textarea
                          className="form-control pdt20"
                          name="message"
                          value={message}
                          rows="4"
                          placeholder="Message"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                      <button className="btn btn-primary btn-lg ">
                        Send message
                      </button>
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
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
              <div id="contact-map">
                <MapComponent />
              </div>
            </div>
            <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-6 col-xs-12">
              <div className="">
                <h3 className="title-bold">Contact Info</h3>
                <p>
                  Please help us serve you better by sharing the following
                  information.
                </p>
              </div>
              <div className="contact-section">
                <div className="contact-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact-info">
                  <p>Address XYZ </p>
                  <p>New Delhi, India</p>
                </div>
              </div>
              <div className="contact-section">
                <div className="contact-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact-info">
                  <p>+91 9999089262 | 9540923031</p>
                </div>
              </div>
              <div className="contact-section">
                <div className="contact-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="contact-info">
                  <p>kidstation2020@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </contact_page>
  );
};

export default Contact;
