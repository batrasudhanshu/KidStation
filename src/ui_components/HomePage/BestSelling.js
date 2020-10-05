import React, { Component } from "react";
import Slider from "react-slick";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./styleComponents/BestSelling.css";
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
        return product && product.bestselling.booleanValue;
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
        <div className="best-selling">
          <div>
            <hr />
            <div className="best-title">BEST SELLING</div>
            <hr />
            <ChevronLeftIcon
              onClick={prevFun}
              className="best-left"
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
                        <div className="best-img">
                          <img
                            className="home-bestselling-img"
                            src={
                              best.image_url.arrayValue.values[
                                best.coverIndex.integerValue
                              ].stringValue
                            }
                            alt="Best-selling"
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
                          height="15rem"
                        />
                      </div>
                    </Grid>
                  ))}
            </Slider>
            <ChevronRightIcon
              onClick={nextFun}
              className="best-right"
              fontSize="large"
            />
          </div>
          <div className="best-view-more">
            <Link className="view-more-link" to="/bestselling">
              View more
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default BestSelling;
