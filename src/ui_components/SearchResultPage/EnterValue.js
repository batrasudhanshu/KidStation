import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
class EnterValue extends Component {
  render() {
    return (
      <div className="enter-value-page">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sm={12} lg={12}>
            <h1>Ohh No!</h1>
          </Grid>
          <Grid item xs={12} md={5} sm={12} lg={5}>
            <div>
              <img
                src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                alt="Banner Stationary GIF"
                width="100%"
                height="400vh"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={7} sm={12} lg={7}>
            <div className="enter-value-right">
              <span>
                <h2 style={{ color: "#DF013A", fontSize: "5rem" }}>
                  Look like you're lost
                  <SentimentDissatisfiedIcon
                    style={{ color: "#04B404", fontSize: "3rem" }}
                  />
                </h2>
              </span>
              <span>You haven't enter any input in searchbar</span>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default EnterValue;
