import React, { Component } from "react";
import Slider from "react-slick";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
class BestSelling extends Component {
  render() {
    const { products } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
    };
    let bestselling =
      products &&
      products.filter((product) => {
        return product.bestselling.booleanValue;
      });
    bestselling = bestselling.slice(0, 8);
    const nextFun = () => {
      this.slider.slickNext();
    };
    const prevFun = () => {
      this.slider.slickPrev();
    };

    return (
      <>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ padding: "0.7rem 0.2rem" }}>Best Selling</div>
            <ChevronLeftIcon
              onClick={prevFun}
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                position: "absolute",
                top: "50%",
                zIndex: "999",
                fontSize: "4rem",
                cursor: "pointer",
              }}
              fontSize="large"
            />
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {bestselling.length !== 0
                ? bestselling.map((best) => (
                    <Grid item>
                      <Link
                        to={
                          "/" +
                          best.collection.stringValue +
                          "/" +
                          best.productid.stringValue
                        }
                      >
                        <div style={{ height: "15rem", padding: "0 0.8rem" }}>
                          <img
                            src={
                              best.image_url.arrayValue.values[0].stringValue
                            }
                            alt="Best-selling"
                            width="100%"
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
                          height="15rem"
                        />
                      </div>
                    </Grid>
                  ))}
            </Slider>
            <ChevronRightIcon
              onClick={nextFun}
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                position: "absolute",
                top: "50%",
                right: 0,
                zIndex: "999",
                fontSize: "4rem",
                cursor: "pointer",
              }}
              fontSize="large"
            />
          </div>
          <div
            style={{ float: "right", display: "inline-block", width: "100%" }}
          >
            <Link
              style={{
                float: "right",
                textDecoration: "none",
                color: "#782844",
              }}
              to="/bestselling"
            >
              View more
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default BestSelling;
