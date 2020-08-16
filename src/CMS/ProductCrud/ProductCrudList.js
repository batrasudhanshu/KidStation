import React from "react";
import ProductCrudSummary from "./ProductCrudSummary";
import { Grid } from "@material-ui/core";

const ProductCrudList = (props) => {
  const { products } = props;
  console.log(products);
  return (
    <div className="">
      <Grid
        style={{ padding: "2rem" }}
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {products &&
          products.map((product, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <ProductCrudSummary product={product} delete />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default ProductCrudList;
