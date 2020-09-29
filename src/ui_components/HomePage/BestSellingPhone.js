import React from "react";
import { Paper, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";
import './styleComponents/BestSellingPhone.css'

const BestSellingPhone = ({ products }) => {
  let bestselling = products.filter((product) => {
    return product.bestselling.booleanValue;
  });
  bestselling = bestselling.slice(0, 4);
  return (
    <div className="bestselling-component">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <hr />
          <div
            className="best-selling-phone"

          >
            BEST SELLING
          </div>
          <hr />
          <Paper xs={12}>
            <Grid style={{ margin: 0 }} container xs={12} spacing={2}>
              {bestselling.length !== 0
                ? bestselling.map((best) => (
                  <Grid item xs={6}>
                    <Link
                      to={
                        best.collection.stringValue +
                        "/" +
                        best.productid.stringValue
                      }
                    >
                      <div
                        className="home-bestselling"

                      >
                        <img

                          src={
                            best.image_url.arrayValue.values[best.coverIndex.integerValue].stringValue
                          }
                          alt="BestSelling"
                          // width="100%"
                          height="100%"
                        />
                      </div>
                    </Link>
                  </Grid>
                ))
                : [0, 1, 2, 3].map((skeleton) => (
                  <Grid item xs={6}>
                    <div>
                      <Skeleton
                        variant={"rect"}
                        width="100%"
                        height="9.375rem"
                      />
                    </div>
                  </Grid>
                ))}
              <div
                className="best-phone-view-more"

              >
                <Link
                  className="best-phone-view-link"

                  to="/bestselling"
                >
                  View more
                </Link>
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default BestSellingPhone;
