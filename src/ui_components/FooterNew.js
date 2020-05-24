import React, { Component } from 'react'
import {Grid,Breadcrumbs } from '@material-ui/core'
import fulllogo from '../../src/images/Fulllogo_animated.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

class FooterNew extends Component {
    render() {
        return (
            <div className="footer" >
                {/* <Container > */}
                    <Grid style={{backgroundColor:'#dbcda8'}} container>
                        <Grid item xs={4}>
                            <div>
                            <img alt="" src={fulllogo} width="150px" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="footer-social-icons-outer" >
                                {/* <Grid container spacing={1}> */}
                                    {/* <Grid item xs={6}> */}
                                    <span>
                                        <Link style={{textDecoration:'none'}} to="">
                                        <FacebookIcon color={'#000033'} className="footer-social-icons"/>
                                        </Link>
                                        
                                    </span>
                                    {/* </Grid> */}
                                    {/* <Grid item xs={6}> */}
                                        <span>
                                            <Link style={{textDecoration:'none'}} to="">
                                                <InstagramIcon style={{color:'#ff4081'}}  className="footer-social-icons"/>
                                            </Link>
                                        </span>
                                    {/* </Grid> */}
                                {/* </Grid> */}
                            </div>
                        </Grid>
                        <Grid justify="center" align="center" item xs={12}>
                            <div className="footer-nav">
                                <Breadcrumbs separator="|" aria-label="breadcrumb">
                                    <Link   color="inherit" href="/" >
                                    About us
                                    </Link>
                                    <Link  color="inherit" href="/getting-started/installation/" >
                                    Track your Order
                                    </Link>
                                    <Link  color="inherit" href="/getting-started/installation/" >
                                    Return Policy
                                    </Link>
                                    <Link  color="inherit" href="/getting-started/installation/" >
                                    Terms of Use
                                    </Link>
                                    <Link  color="inherit" href="/getting-started/installation/" >
                                    Contact Us
                                    </Link>
                                </Breadcrumbs>
                            </div>
                        </Grid>
                        <Grid container justify="center" align="center" item xs={12}>
                        
                            <div className="footer-contact">
                                <ul>
                                    <li><a href="tel:9999089262">9999089262</a></li>
                                    <li><a href="mailto:kidstation2020@gmail.com">kidstation2020@gmail.com</a></li>
                                </ul>
                            </div>
                        
                        </Grid>
                        
                
                    </Grid>
                    <Grid style={{backgroundColor:'#000000'}} container>
                        <Grid style={{color:'#BCC6CC'}} container justify="center" align="center" item xs={12}>
                        
                            <span style={{fontSize:'0.7rem'}}>Copyright &copy; 2020 KidStation - All Rights Reserved</span>
                       
                        
                        </Grid>
                        </Grid>
                {/* </Container> */}
            </div> 
        );
    }
}
export default FooterNew;
