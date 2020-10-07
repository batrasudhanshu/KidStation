import React, { useState } from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ShareIcon from "@material-ui/icons/Share";
import './styleComponents/ShareComponent.css'
const ShareComponent = (props) => {
  const [ShowDiv, setShowDiv] = useState(false);

  const showCSS = {
    zIndex: "999",
    opacity: "1",
    width: "260px",
    transform: "translateX(0.7rem)",
  };
  const hideCSS = {
    zIndex: "1",
    overflow: "hidden",
    opacity: "0",
    width: "0",
    focus: "none",
    transform: "translateX(0rem)",
    pointer: "default !important",
  };

  const showBtn = {
    pointer: "default",
    zIndex: "1",
    opacity: "1",
    width: "auto",
  };

  const changeDivCSS = () => {
    setShowDiv(!ShowDiv);
  };
  return (
    <div className="shareComp">
      <div className="shareText">
        <Button aria-label="Share on" onClick={changeDivCSS}>
          <ShareIcon fontSize="large" />
        </Button>
      </div>
      <div className="shareBtn-outer" style={ShowDiv ? showCSS : hideCSS}>
        <div className="shareAll">
          <div>
            <FacebookShareButton
              style={ShowDiv ? showBtn : hideCSS}
              url={props.url}
              FacebookMessengerShareButton
              quote={props.text}
            >
              <Button className="share-buttons">
                <FacebookIcon fontSize="large" color="primary" />
              </Button>
            </FacebookShareButton>
          </div>
          <div>
            <TwitterShareButton
              style={ShowDiv ? showBtn : hideCSS}
              url={props.url}
              title={props.text}
            >
              <Button className="share-buttons">
                <TwitterIcon fontSize="large" color="primary" />
              </Button>
            </TwitterShareButton>
          </div>

          <div>
            <EmailShareButton
              style={ShowDiv ? showBtn : hideCSS}
              subject={""}
              body={`${props.text}: ${props.url}`}
            >
              <Button className="share-buttons">
                <EmailIcon fontSize="large" color="primary" />
              </Button>
            </EmailShareButton>
          </div>
          <div>
            <WhatsappShareButton
              style={ShowDiv ? showBtn : hideCSS}
              disabled={ShowDiv ? false : true}
              url={props.url}
              title={props.text}
            >
              <Button className="share-buttons">
                <WhatsAppIcon fontSize="large" color="primary" />
              </Button>
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareComponent;
