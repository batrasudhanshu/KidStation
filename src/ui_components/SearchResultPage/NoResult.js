import React, { Component } from "react";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import Link from '@material-ui/core/Link';
import { Button } from "@material-ui/core";

class NoResult extends Component {
  render() {
    return (
      <div className="no-result-page">
        <div class="no-result">
          <h2>OOPS!!</h2>
          <div class="trey">
            <div class="top">
              <div class="paper1"></div>
            </div>
            <div class="bottom">
              <div class="inner"></div>
            </div>
            <div class="grey-border"></div>
            <div class="pointer"></div>
            <div class="paper2">
              <div class="e1"></div>
              <div class="e2"></div>
              <div class="e4">
                <div class="e41"></div>
                <div class="text">ERROR</div>
                <div class="e42"></div>
              </div>
              <div class="e5">
                <div class="e51"></div>
                <div class="text">404</div>
                <div class="e52"></div>
              </div>
              <div class="e3"></div>
              <div class="e6"></div>
            </div>
          </div>
          <div class="button-layer">
            <div class="top-perspective">
              <div class="top"></div>
            </div>
            <div class="bottom"></div>
            <div class="buttons-container">
              <div class="button1"></div>
              <div class="button2"></div>
            </div>
            <div class="button3"></div>
          </div>
         
        </div>
        <div className="no-result-lower">
        <span>
            <span className="no-result-sorry">Sorry</span>, We couldn't find the product you are looking for. GO to Our other pages..
          </span>
        </div>
            <div className="no-result-buttons">
                {/* <Button variant="contained" color="secondary">
                    Go Back to HomePage
                </Button> */}
            
            <Breadcrumbs maxItems={3} aria-label="breadcrumb">
                <Link color="inherit" href="#" >
                    Home
                </Link>
                <Link color="inherit" href="#" >
                    Catalog
                </Link>
                <Link color="inherit" href="#" >
                    Accessories
                </Link>
                <Link color="inherit" href="#">
                    New Collection
                </Link>
                
                </Breadcrumbs>
                
            </div>  
        
      
        </div>
        
      
    );
  }
}
export default NoResult;
