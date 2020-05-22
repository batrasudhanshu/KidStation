import React, { Component } from 'react'
import { Container,Grid,Breadcrumbs } from '@material-ui/core'
import fulllogo from '../../src/images/Fulllogo_animated.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

class FooterNew extends Component {
    render() {
        return (
           <div style={{backgroundColor:'grey'}}>
            <Container >
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <div>
                    <img src={fulllogo} width="150px" />
                    </div>
                </Grid>
                <Grid item xs={5}>
                
                </Grid>
                <Grid item xs={3}>
                <div >
                            {/* <span>
                                <Link style={{textDecoration:'none'}} to="">
                                <FacebookIcon className="footer-social-icons"/>
                                </Link>
                                
                            </span>
                            <span>
                                <Link style={{textDecoration:'none'}} to="">
                                    <InstagramIcon className="footer-social-icons"/>
                                </Link>
                            </span> */}
                            <Grid container spacing={2}>
                                
                            </Grid>
                    </div>
                </Grid>
                <Grid justify='center' align={'center'} item xs={12}>
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
        
            </Grid>
            </Container>
            </div> 
        );
    }
}
export default FooterNew;
