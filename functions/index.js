"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

//to make it work you need gmail account
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

admin.initializeApp();

//creating function for sending emails
var goMail = function (message) {
  //transporter is a way to send your emails
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });

  // setup email data with unicode symbols
  //this is how your email are going to look like
  const mailOptions = {
    from: gmailEmail, // sender address
    to: "kidstation2020@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "!" + message, // plain text body
    html: "!" + message, // html body
  };

  //this is callback function to return status to firebase console
  const getDeliveryStatus = function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  };

  //call of this function send an email, and return status
  transporter.sendMail(mailOptions, getDeliveryStatus);
};

//.onDataAdded is watches for changes in database
exports.onDataAdded = functions.database
  .ref("/emails/{sessionId}")
  .onCreate(function (snap, context) {
    //here we catch a new data, added to firebase database, it stored in a snap variable
    const createdData = snap.val();
    var text = createdData.mail;

    //here we send new data using function for sending emails
    goMail(text);
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
