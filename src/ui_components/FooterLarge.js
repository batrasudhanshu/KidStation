import React, { Component } from "react";
import fulllogo from "../../src/images/Fulllogo_animated.svg";
import { Grid, Divider } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

// import LoopIcon from '@material-ui/icons/Loop';

// import TrackChangesIcon from '@material-ui/icons/TrackChanges';
// import InfoIcon from '@material-ui/icons/Info';

class FooterLarge extends Component {
  render() {
    return (
      <div className="footer-large">
        <Grid container>
          <Grid style={{ backgroundColor: "cyan" }} item md={3} lg={4}>
            <div className="logo-image">
              <img alt="" src={fulllogo} />
            </div>
          </Grid>
          <Grid style={{ backgroundColor: "pink" }} item md={9} lg={8}>
            <div className="nav-list">
            <h2>Ouick - Links</h2>
              <List component="nav" aria-label="main mailbox folders">
                <Breadcrumbs separator="|" aria-label="breadcrumb">
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="About Us" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Track your orders" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Return Policy" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact Us" />
                  </ListItem>
                </Breadcrumbs>
              </List>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid style={{ backgroundColor: "yellow" }} item md={3} lg={4}>
            
          </Grid>
          <Grid style={{ backgroundColor: "gray" }} item md={9} lg={8}>
            <div className="contact-detail">
                <h2>Contact - Info</h2>
                    <Breadcrumbs aria-label="breadcrumb" separator="|">           
                         <Link color="textPrimary" href="/" underline ='none' >
                         +91 9999089262
                         </Link>
                        <Link color="textPrimary" href="/">
                       {/* <TrackChangesIcon/> */}
                       kidstation2020@gmail.com
                        </Link>                        
                        </Breadcrumbs>
            </div>
          </Grid>
        </Grid>
        <Grid style={{backgroundColor:'#000000'}} container>
                        <Grid style={{color:'#BCC6CC'}} container justify="center" align="center" item md={12} lg={12} >
                        
                            <span style={{fontSize:'1rem'}}>Copyright &copy; 2020 KidStation - All Rights Reserved</span>
                       
                        
                        </Grid>
                        </Grid>
      </div>
    );
  }
}
export default FooterLarge;
