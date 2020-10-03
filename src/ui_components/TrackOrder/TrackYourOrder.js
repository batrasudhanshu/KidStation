import React, { useEffect } from "react";
import SearchFilter from "../CMS/ProductCrud/SearchFilter";
import Step1 from '../../src/images/step1.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const stepsData = [
    {
        tag: 'Step -1',
        imageUrl: Step1,
        content: ''
    },
    {
        tag: 'Step -2',
        imageUrl: Step1,
        content: ''
    },
    {
        tag: 'Step -3',
        imageUrl: Step1,
        content: ''
    },
    {
        tag: 'Step -4',
        imageUrl: Step1,
        content: ''
    },
    {
        tag: 'Step -5',
        imageUrl: Step1,
        content: ''
    },
    {
        tag: 'Step -6',
        imageUrl: Step1,
        content: ''
    },
    {
        tag: 'Step -7',
        imageUrl: Step1,
        content: ''
    },
    {
        tag: 'Step -8',
        imageUrl: Step1,
        content: ''
    },
    {
        tag: 'Step -9',
        imageUrl: Step1,
        content: ''
    }
]

const TrackYourOrder = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div className="steps-to-follow" >
            <SearchFilter />
            <div className="container">
                <Grid container elevation={4} spacing={4}>
                    {stepsData.map((element) => (
                        <Grid item md={4}>
                            <Paper >
                                <div className="card">

                                    <div className="imageBox">
                                        <div className="card-tag"><span>{element.tag}</span></div>
                                        <img src={element.imageUrl} alt="Step-1" />
                                    </div>
                                    <div className="datalist">
                                        <h2>hello</h2>
                                        <p>
                                        </p>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                {/* {stepsData.map((element) => (
          <div className="card">

            <div className="imageBox">
              <div className="card-tag"><span>{element.tag}</span></div>
              <img src={element.imageUrl} alt="Step-1" />
            </div>
            <div className="datalist">
              <h2>hello</h2>
              <p>
              </p>
            </div>
          </div>
        ))} */}



            </div>

        </div>
    );
};

export default TrackYourOrder;
