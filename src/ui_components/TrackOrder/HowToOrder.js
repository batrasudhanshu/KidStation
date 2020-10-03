import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import fifa from '../../images/fifa15.mp4'

const stepsToFollow = [
    {
        tag: 'Step -1',
        title: 'Select the product',
        content: 'Search product from searchbar as per your choice and availability.After selecting the product click on the button BUY/ CONNECT.'
    },
    {
        tag: 'Step -2',
        title: 'Connect with us ',
        content: 'The button will redirect you to whatsapp application on your device where you can connect with us.'
    },
    {
        tag: 'Step -3',
        title: 'Contact through whatsapp',
        content: "Now you can contact us on whatsapp regarding product's  color options and quantity required.Place your final order and give us the shipping details."
    },
    {
        tag: 'Step -4',
        title: 'Make payment',
        content: 'Make the payment through digital payment options as per your convenience (GPay,PayTM, Bank Transfer)'
    }
]
function HowToOrder() {
    return (
        <>
            <div className="how-to-order">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>

                        {/* <video width="100%" height="90%" controls muted="muted">
                            <source src={fifa} type="video/mp4" />

                        </video> */}
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div className="steps">
                            <ol class="rounded-list">
                                {stepsToFollow.map((element) => (
                                    <li><a target="_blank" href="!#">
                                        <h4>{element.title}</h4>
                                        {element.content}
                                    </a>
                                    </li>
                                ))}

                            </ol>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HowToOrder
