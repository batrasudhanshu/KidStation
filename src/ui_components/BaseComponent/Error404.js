import React from "react";
import Container from "@material-ui/core/Container";
import Really from "../../images/really.gif";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom'
let url = window.location.pathname.split("/");

let searchProduct = url[2];
const searchCollection = url[1];
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
    <>
      <Container maxWidth="md">
        <div style={{ paddingTop: "3rem", height: "60vh" }}>
          <h4 style={{ textAlign: "center" }}>
            You Searched for{" "}
            <Link
              style={{ color: "saddlebrown" }}
              to={`/${searchCollection}`}

            >
              {searchCollection}
            </Link>{" "}
            / {searchProduct}{" "}
          </h4>
          <div style={{ textAlign: "center" }}>
            <img src={Really} />
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "2rem" }}>
              Sorry, we Couldn't find any matches, checkout some popular searches{" "}
            </span>
          </div>
          <div className="popular-links">

            <Breadcrumbs aria-label="breadcrumb" separator="|" >
              {popularSearch.map((p) => (
                <Link to={p.link} style={{ color: "saddlebrown", fontSize: "1.3rem" }}>
                  {p.label}
                </Link>
              ))}


            </Breadcrumbs>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Error404;
