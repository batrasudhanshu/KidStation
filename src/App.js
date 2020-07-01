import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import {connect} from 'react-redux';
import {fetchProduct} from './CMS/actions/UploadAction';

//cms 
import CMS from './CMS/CMS';

//ui components
// import Sidebar from '../src/ui_components/Sidebar'
import Home from '../src/ui_components/Home'
import Contact from '../src/ui_components/Contact'

import Return from '../src/ui_components/Refund'
import Eraser from '../src/ui_components/CategoryComponents/Erasers'
import Notebook from '../src/ui_components/CategoryComponents/Notebooks'
import Bag from './ui_components/CategoryComponents/Bags'
import Pen from '../src/ui_components/CategoryComponents/Pens'
import Water from '../src/ui_components/CategoryComponents/WaterBottles'
import Lunch from '../src/ui_components/CategoryComponents/LunchBoxes'
import Marker from '../src/ui_components/CategoryComponents/Markers'
import Geometry from '../src/ui_components/CategoryComponents/GeometryBoxes'
// import EraserDetails from './collections/erasers/data/EraserDetails';
import uploadSuccess from './CMS/uploadSuccess';
import EraserCrud from './CMS/EraserCrud/EraserCrud';
import EraserCrudDetails from './CMS/EraserCrud/EraserCrudDetails';
import Shop from '../src/ui_components/ShopPage';
import SearchResultPage from '../src/ui_components/SearchResultPage';
import Test from './CMS/Test';
import ProductCrud from './CMS/ProductCrud/ProductCrud';
import TestCrud from './CMS/ProductCrud/TestCrud';
import ProductCrudDetails from './CMS/ProductCrud/ProductCrudDetails';
import MaterialNavbar from './ui_components/MaterialNavbar';
import { Container, } from '@material-ui/core';
// import Footer from './ui_components/FooterLarge';
import Footer from './ui_components/Footer';
import ProductDetailComponent from './ui_components/BaseComponent/ProductDetailComponent';
import SearchFilter from './CMS/ProductCrud/SearchFilter';
import ProductPage from './ui_components/ProductPage/index';
import BestsellingPage from './ui_components/BestsellingPage';

class App extends Component {
  componentWillMount = () => {
    this.props.fetchProduct();
  }
  render(){
    const {products} = this.props;
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
      <BrowserRouter>
      
      
      <div className="App" style={{position:'relative', minHeight:'100vh'}}>
        <Container maxWidth={"lg"}>
        <MaterialNavbar />
        <Switch>
          <Route exact path ='/cms' render={()=><CMS products={products} />}/>
          <Route exact path ='/cms/test' component={Test}/>
          <Route exact path ='/' render={()=><Home products={products} />}/>
          <Route exact path ='/Contact' render={()=><Contact products={products} />}/>
          <Route exact path ='/return' render={()=><Return products={products} />}/>

          <Route exact path ='/bestselling' component={BestsellingPage}/>

          <Route exact path = '/productdetail/:id' render={()=><ProductDetailComponent products={products} />} />
          <Route exact path ='/notebooks' render={()=><Notebook products={products} />}/>
          <Route exact path ='/erasers' render={()=><Eraser products={products} />}/>
          <Route exact path ='/lunch_boxes' render={()=><Lunch products={products} />}/>
          <Route exact path ='/water_bottles' render={()=><Water products={products} />}/>
          {/* <Route path ='/erasers/:id' render={()=><eraser products={products} />}/> */}
          <Route exact path ='/bags' render={()=><Bag products={products} />}/>
          <Route exact path ='/pens' render={()=><Pen products={products} />}/>
          <Route exact path ='/markers' render={()=><Marker products={products} />}/>
          <Route exact path ='/geometry_boxes' render={()=><Geometry products={products} />}/>
          <Route exact path ='/cms/uploadsuccess' render={()=><uploadSuccess products={products} />}/>
          <Route exact path ='/cms/productcrud' component={ProductCrud} />
          <Route exact path ='/cms/productcrud/:id' component={ProductCrudDetails} />


          <Route exact path ='/erasers/:id' component={ProductPage} />
          <Route exact path ='/pens/:id' component={ProductPage} />
          <Route exact path ='/lunch_boxes/:id' component={ProductPage} />
          <Route exact path ='/water_bottles/:id' component={ProductPage} />
          <Route exact path ='/markers/:id' component={ProductPage} />
          <Route exact path ='/notebooks/:id' component={ProductPage} />
          <Route exact path ='/geometry_boxes/:id' component={ProductPage} />
          <Route exact path ='/bags/:id' component={ProductPage} />


          <Route exact path ='/cms/testcrud' render={()=><TestCrud products={products} />}/>
          <Route exact path ='/cms/erasercrud' render={()=><EraserCrud products={products} />}/>
          <Route path ='/cms/eraser/update/:id' render={()=><EraserCrudDetails products={products} />}/>
          <Route exact path ='/shop'  render={()=><Shop products={products} />}/>
          <Route exact path ='/searchresult'  render={()=><SearchResultPage products={products} />}/>
          <Route exact path ='/footer' component={Footer}/>
          {/* <Route path ='/cms/eraser/:id' component={EraserCrudDetails}/> */}
          
        </Switch>
        <Footer/>
        </Container>
      
      
      </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log("APP>JS",state);
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProduct: () => {
      dispatch(fetchProduct())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
