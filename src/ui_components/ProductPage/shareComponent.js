import React from 'react';
import {FacebookShareButton,EmailShareButton,TwitterShareButton,WhatsappShareButton} from 'react-share';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
  

const ShareComponent = (props) => {
    return (
        <div style={{display:'flex', marginTop:'3rem'}}>
            <div>
                <FacebookShareButton
                url={props.url}
                FacebookMessengerShareButton
                quote={props.text}>
                <Button><FacebookIcon fontSize="large" color="primary" /></Button>
                </FacebookShareButton>
            </div>
            <div>
                <TwitterShareButton
                url={props.url}
                title={props.text}>
                <Button><TwitterIcon fontSize="large" color="primary" /></Button>
                </TwitterShareButton>
            </div>
            <div>
                <EmailShareButton
                subject={''}
                body={`${props.text}: ${props.url}`}>
                <Button><EmailIcon fontSize="large" color="primary" /></Button>
                </EmailShareButton>
            </div>
            <div>
                <WhatsappShareButton
                url={props.url}
                title={props.text}>
                    <Button><WhatsAppIcon fontSize="large" color="primary" /></Button>
                </WhatsappShareButton>
            </div>
        </div>
    )
}

export default ShareComponent
