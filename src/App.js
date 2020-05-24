import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

//cms 
import CMS from './CMS/CMS';

//ui components
// import Sidebar from '../src/ui_components/Sidebar'
import Home from '../src/ui_components/Home'
import Contact from '../src/ui_components/Contact'

import Return from '../src/ui_components/Refund'
import notebook from '../src/ui_components/CategoryComponents/Notebook'
import eraser from '../src/ui_components/CategoryComponents/Erasers'
import ruler from '../src/ui_components/CategoryComponents/Rulers'
import pen from '../src/ui_components/CategoryComponents/Pens'
import EraserDetails from './collections/erasers/data/EraserDetails';
import uploadSuccess from './CMS/uploadSuccess';
import EraserCrud from './CMS/EraserCrud/EraserCrud';
import EraserCrudDetails from './CMS/EraserCrud/EraserCrudDetails';
import Shop from '../src/ui_components/Shop';
import Test from './CMS/Test';
import ProductCrud from './CMS/ProductCrud/ProductCrud';
import TestCrud from './CMS/ProductCrud/TestCrud';
import ProductCrudDetails from './CMS/ProductCrud/ProductCrudDetails';
import MaterialNavbar from './ui_components/MaterialNavbar';
import { Container, } from '@material-ui/core';
// import Footer from './ui_components/Footer';
import Footer from './ui_components/FooterNew';

function App() {
  return (
    <BrowserRouter>
    
    
    <div className="App" style={{position:'relative', minHeight:'100vh'}}>
      <Container maxWidth={"lg"}>
      <MaterialNavbar />
    {/* <Sidebar/> */}
      <Switch>
        <Route exact path ='/cms' component={CMS}/>
        <Route exact path ='/cms/test' component={Test}/>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/Contact' component={Contact}/>
        <Route exact path ='/return' component={Return}/>
        <Route exact path ='/notebook_registers' component={notebook}/>
        <Route exact path ='/erasers' component={eraser}/>
        <Route path ='/erasers/:id' component={EraserDetails}/>
        <Route exact path ='/rulers' component={ruler}/>
        <Route exact path ='/pens_pencils' component={pen}/>
        <Route exact path ='/cms/uploadsuccess' component={uploadSuccess}/>
        <Route exact path ='/cms/productcrud' component={ProductCrud}/>
        <Route exact path ='/cms/productcrud/:id' component={ProductCrudDetails}/>
        <Route exact path ='/cms/testcrud' component={TestCrud}/>
        <Route exact path ='/cms/erasercrud' component={EraserCrud}/>
        <Route path ='/cms/eraser/update/:id' component={EraserCrudDetails}/>
        <Route exact path ='/shop' component={Shop}/>
        <Route exact path ='/footer' component={Footer}/>
        {/* <Route path ='/cms/eraser/:id' component={EraserCrudDetails}/> */}
        
      </Switch>
      </Container>
    
     
    </div>
     </BrowserRouter>
    
    
  );
}

export default App;
