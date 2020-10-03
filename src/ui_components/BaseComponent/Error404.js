import React from "react";
import Container from "@material-ui/core/Container";
import Really from "../../images/really.gif";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from 'react-router-dom'
import './styleComponents/Error404.css'
let url = window.location.pathname.split("/");

let searchCollection, searchProduct;
let adminpage = url[1];
if (adminpage == "admin") {
  searchCollection = url[3];
  searchProduct = url[4];
} else {
  searchCollection = url[1];
  searchProduct = url[2];
}

// let searchProduct = url[2];
// const searchCollection = url[1];
console.log(searchCollection, searchProduct);
const Error404 = () => {

  const popularSearch = [
    {
      label: "Erasers",
      link: "/erasers",
    },
    {
      label: "Lunch Boxes",
      link: "/lunch_boxes",
    },
    {
      label: "Water Bottles",
      link: "/water_bottles",
    },
    {
      label: "Pens",
      link: "/pens",
    },
    {
      label: "Geometry Box",
      link: "/geometry_boxes",
    },
    {
      label: "Bags",
      link: "/bags",
    },
    {
      label: "Best Selling",
      link: "/bestselling",
    },
  ];
  return (
    <error_404>
      <Container maxWidth="md">
        <div className="error404">
          <h4>
            You Searched for{" "}
            <Link
              to={`/${searchCollection}`}

            >
              {searchCollection}
            </Link>{" "}
            / {searchProduct}{" "}
          </h4>
          <div className="error404-img" >
            <img src={Really} />
          </div>
          <div className="error404-text">
            <span>
              Sorry, we Couldn't find any matches, checkout some popular searches{" "}
            </span>
          </div>
          <div className="popular-links">

            <Breadcrumbs aria-label="breadcrumb" separator="|" >
              {popularSearch.map((p) => (
                <Link to={p.link}>
                  {p.label}
                </Link>
              ))}


            </Breadcrumbs>
          </div>
        </div>
      </Container>
    </error_404>
  );
};

export default Error404;