import React, { useState } from "react";
import { Grid, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@material-ui/core/Snackbar";
import Tooltip from "@material-ui/core/Tooltip";

const OurTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const ProductCardSub = ({ product }) => {
  let [copy, setCopy] = useState(false);
  const handleClose = () => {
    setCopy(false);
  };
  const copiedFunc = () => {
    setCopy(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };
  const vertical = "top";
  const horizontal = "right";
  return (
    <>
      <Grid item xs={12} sm={4} md={4} lg={3}>
        <div className="card-layout">
          <div className="card-image">
            {/* <LazyLoad once={true} key={product.id}  height={100} offset={[-100, 100]} placeholder={<Loading />} > */}
            <img
              alt="Product"
              src={product.image_url.arrayValue.values[0].stringValue}
            />
            {/* </LazyLoad> */}
          </div>
          <div className="card-overlay"></div>
          <div className="card-bottom">
            <div className="card-icons">
              <Link
                to={
                  "/" +
                  product.collection.stringValue +
                  "/" +
                  product.productid.stringValue
                }
              >
                <span className="card-search-icon">
                  <SearchIcon style={{ fontsize: "2rem" }} />
                </span>
              </Link>
              <CopyToClipboard
                text={`https://kidstation-version1.firebaseapp.com/${product.collection.stringValue}/${product.productid.stringValue}`}
                onCopy={copiedFunc}
              >
                <Link>
                  <span className="card-share-icon">
                    <FileCopyOutlinedIcon style={{ fontsize: "2rem" }} />
                  </span>
                </Link>
              </CopyToClipboard>
            </div>
            <div className="card-desc">
              <OurTooltip
                placement="top-end"
                title={
                  product.productname.stringValue[0].toUpperCase() +
                  product.productname.stringValue.slice(1)
                }
              >
                <div className="card-desc-name">
                  {product.productname.stringValue[0].toUpperCase() +
                    product.productname.stringValue.slice(1)}
                </div>
              </OurTooltip>
              <div
                className={
                  product.soldout.booleanValue === true
                    ? "price-linethrough card-price"
                    : "card-price"
                }
              >
                &#8377; {product.productprice.stringValue}
              </div>
              <div className="soldout-outer">
                {product.soldout.booleanValue === true && (
                  <span className="card-soldout">Soldout</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={copy}
          message="Link Copied to Clipboard"
          key={vertical + horizontal}
        />
      </div>
    </>
  );
};

export default ProductCardSub;
