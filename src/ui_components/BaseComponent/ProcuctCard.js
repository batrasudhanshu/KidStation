import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import LazyLoad from "react-lazyload";
import ProductCardSub from "./ProductCardSub";
import './styleComponents/ProductCard.css'
const Loading = () => {
  return (
    <Grid item xs={12} sm={4} lg={3}>
      <div className="loaderlayout">
        <Skeleton variant="rect" height={290} animation="pulse">
          <div className="loader-img">
            <Skeleton variant="rect" height={200} animation="pulse" />
          </div>
          <div className="loader-desc">
            <div>
              <Skeleton variant="rect" height={25} animation="pulse" />
            </div>
            <div>
              <Skeleton variant="rect" height={25} animation="pulse" />
            </div>
          </div>
        </Skeleton>
      </div>
    </Grid>
  );
};

const ProcuctCard = (props) => {
  const { data } = props;
  let arrayValue = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid className="product-card-outer" container spacing={4}>
      {data.length !== 0
        ? data.map((product, i) => {
          return (
            <LazyLoad
              once={true}
              key={product.id}
              height={100}
              offset={[900, 900]}
              placeholder={<Loading />}
            >
              <ProductCardSub key={i} product={product} />
            </LazyLoad>
          );
        })
        : arrayValue.map((value, index) => <Loading />)}
    </Grid>
  );
};

export default ProcuctCard;
