import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Pens_thumbnail from "../../images/pens_thumbnail.JP2";
import lunch_thumbnail from "../../images/lunch_thumbnail.JP2";
import water_thumbnail from "../../images/water_thumbnail.JP2";
import marker_thumbnail from "../../images/marker_thumbnail.JP2";
import eraser_thumbnail from "../../images/eraser_thumbnail.JP2";
import bestselling_thumbnail from "../../images/bestselling_thumbnail.JP2";
import kits_thumbnail from "../../images/kits_thumbnail.JP2";
import bags_thumbnail from "../../images/bags_thumbnail.JP2";
import notebooks_thumbnail from "../../images/notebooks_thumbnail.JP2";

import { Link } from "react-router-dom";

const images = [
  {
    url: eraser_thumbnail,
    title: "Erasers & Sharpners",
    width: "33.3%",
    link: "/erasers",
  },
  {
    url: Pens_thumbnail,
    title: "Pens & Pencils",
    width: "33.3%",
    link: "/pens",
  },
  {
    url: notebooks_thumbnail,
    title: "Notebooks",
    width: "33.3%",
    link: "/notebooks",
  },
  {
    url: lunch_thumbnail,
    title: "Lunch Boxes",
    width: "33.3%",
    link: "/lunch_boxes",
  },
  {
    url: marker_thumbnail,
    title: "Folders",
    width: "33.3%",
    link: "/folders",
  },
  {
    url: kits_thumbnail,
    title: "Geometry Boxes",
    width: "33.3%",
    link: "/geometry_boxes",
  },
  {
    url: water_thumbnail,
    title: "Water Bottles",
    width: "33.3%",
    link: "/water_bottles",
  },
  {
    url: bags_thumbnail,
    title: "Bags",
    width: "33.3%",
    link: "/bags",
  },
  {
    url: bestselling_thumbnail,
    title: "Key Chains",
    width: "33.3%",
    link: "/key_chains",
  },
  {
    url: bestselling_thumbnail,
    title: "Collectables",
    width: "33.3%",
    link: "/collectables",
  },
  {
    url: bestselling_thumbnail,
    title: "Sticky Notes, book_marks",
    width: "33.3%",
    link: "/book_marks",
  },
  {
    url: bestselling_thumbnail,
    title: "Gift Items",
    width: "33.3%",
    link: "/giftitems",
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    // flexDirection:'column',
    flex: 1,
    flexBasis: "auto",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    padd: "1rem",
    height: 150,

    [theme.breakpoints.down("xs")]: {
      "&:nth-child(12)": {
        width: "50% !important",
      },
      width: "50% !important",
      //   minWidth: '50% !important', // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    minWidth: "50%",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: 'cornsilk',
  },
  imageSrc: {
    margin: "1rem 0.5rem 0rem 0.5rem",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "black",
    opacity: 0.3,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    fontSize: "1.7rem",
    fontWeight: "600",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6
      }px`,
  },
  imageMarked: {
    height: 3,
    // width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function CategoryButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <Link to={image.link}>
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />

            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </Link>
        </ButtonBase>
      ))}
    </div>
  );
}
