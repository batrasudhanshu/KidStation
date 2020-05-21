import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink} from 'react-router-dom'
import { ListItemText, ListItem, Drawer, Collapse, Grid,Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import logo from '../../src/images/logo.png';
import fulllogo from '../../src/images/Fulllogo_animated.svg';

class MaterialNavbar extends Component {
    state={
        sidebar:false,
        categorytoggle: false,
        activeNavIndex:-1,
        activeCategoriesIndex:-1
    }
    toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        this.setState({ sidebar: open });
    }
    handletoggle = () =>{
        this.setState((prevState)=>({categorytoggle: !prevState.categorytoggle}))
    }
    handleSideNavClick = (item,index) =>{
        if(item.name=='Categories'){
            this.handletoggle()
        }
        this.setState({activeNavIndex:index});
        // (item.name=='Categories')? this.handletoggle: null;
    }
    handleSideCategoryClick = (itemname,i) =>{
        this.setState({activeCategoriesIndex:i});
    }

    render() {
        const list= [
            {name:"Home",link:'/'},
            {name:"Shop",link:'/shop'},
            {name:"Categories",link:""},
            {name:"Best Selling",link:'/bestselling'},
            {name:"Track your Order",link:'/trackyourorder'},
            {name:"Contact Us",link:'/contact'}
        ];
        const CategoriesList = [
            {name:"Eraser & Sharpner",link:'/erasers'},
            {name:"Lunch Box",link:'/'},
            {name:"Water Bottle",link:'/'},
            {name:"Pen & Pencil",link:'/'},
            {name:"Sketch - Pen & Marker",link:'/'},
            {name:"Notebook & Register",link:'/'},
            {name:"Stationery Kit",link:'/'},
            {name:"Ruler",link:'/'},
        ];
        const categoriesNav = CategoriesList.map((itemname,i)=>{
            return(
                <>
                    <Collapse in={this.state.categorytoggle} timeout="auto">
                        <div className={i==this.state.activeCategoriesIndex ? 'category-list-outer':''} onClick={()=>{this.handleSideCategoryClick(itemname,i)}}>
                        <ListItem button>
                            <NavLink style={{textDecoration:'none'}} to={itemname.link}>
                                <ListItemText className={i==this.state.activeCategoriesIndex ? 'category-list-outer':'category-list'} primary={itemname.name} />
                            </NavLink>
                        </ListItem>
                        </div>
                    </Collapse>
                </>
            )
        });
        return (
            <div>
                {/* <MenuIcon onClick={this.toggleDrawer(true)} style={{fontSize:'3.5rem', backgroundColor:'#aaa', float:'left'}} /> */}
                <Grid container xs={12} className="navigation">
                    <Grid item xs={1}>
                        <MenuIcon onClick={this.toggleDrawer(true)} style={{fontSize:'3.5rem', backgroundColor:'#aaa', float:'left'}} />
                    </Grid>
                    <Grid item xs={4} className="fulllogo">
                        <img src={fulllogo} width="225px" />
                    </Grid>
                    <Grid xs={2}></Grid>
                    <Grid item xs={5} md={5} className="RightNavItems">
                        <div >
                            <span>
                                <Link style={{textDecoration:'none'}} to="">
                                    Support 
                                </Link>
                            </span>
                            <span>
                                <Link style={{textDecoration:'none'}} to="">
                                    Help
                                </Link>
                            </span>
                        </div>
                    </Grid>
                </Grid>
                <Drawer className="sidenavbar" anchor="left" open={this.state.sidebar} onClose={this.toggleDrawer(false)}>
                    <div style={{padding:'2rem 2rem 2rem 0', float:'left'}}>
                        <img src={fulllogo} width="100%" />
                    </div>
                    {list.map((item,index)=>{
                        return (
                            <div>
                                <div className={index==this.state.activeNavIndex ? 'side-drawer-outer':''} onClick={()=>{this.handleSideNavClick(item,index)}}>
                                    <ListItem button >
                                        <NavLink style={{textDecoration:'none'}} to={item.link}>
                                            <ListItemText className={index==this.state.activeNavIndex ? 'side-drawer-outer':'sidedrawer'} primary={item.name}/>                           
                                        </NavLink>
                                        {item.name=='Categories' ? (this.state.categorytoggle ?<ExpandLessIcon />: <ExpandMoreIcon />) : null}
                                    </ListItem>
                                </div>
                                {item.name=='Categories' && categoriesNav}
                            </div>
                        )
                    })}
                </Drawer>
            </div>
        )
    }
}

export default MaterialNavbar;