import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import  imagebanner from '../../images/lunch_banner.jpg';
import {Link} from 'react-router-dom';



const images = [
  {
    url: imagebanner,
    title: 'Erasers & Sharpners',
    width: '33.3%',
    link: '/erasers'
  },
  {
    url: imagebanner,
    title: 'Pens & Pencils',
    width: '33.3%',
    link: '/pens'
  },
  {
    url: imagebanner,
    title: 'Notebooks & Registers',
    width: '33.3%',
    link:'/notebooks'
  },
  {
    url: imagebanner,
    title: 'Lunch Boxes',
    width: '33.3%',
    link:'/lunch_boxes'
  },
  {
    url: imagebanner,
    title: 'Markers',
    width: '33.3%',
    link: '/sketch_pens'
  },
  {
    url: imagebanner,
    title: 'Stationery Kits',
    width: '33.3%',
    link:'/stationery_kits'
  },
  {
    url: imagebanner,
    title: 'Water Bottles',
    width: '33.3%',
    link: '/water_bottles'
  },
  {
    url: imagebanner,
    title: 'Rulers',
    width: '33.3%',
    link: '/rulers'
  },
  {
    url: imagebanner,
    title: 'Best Selling',
    width: '33.3%',
    link:'/bestselling'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // flexDirection:'column',
    flex:1,
    flexBasis:'auto',
    minWidth: 300,
    width: '100%'
  },
  image: {
    position: 'relative',
    padd:'1rem',
    height: 150,
    [theme.breakpoints.down('xs')]: {
      '&:nth-child(9)':{
        width:'100% !important'
    },
        width:'50% !important',
    //   minWidth: '50% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    minWidth:'50%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.black,
  },
  imageSrc: {
    margin:'1rem 0.5rem 0 0.5rem',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'white',
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    fontSize:'1.7rem',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    // width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
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
        ><Link to={image.link}>
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
