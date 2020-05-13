import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//cms 
import CMS from './CMS/CMS';

//ui components
import Sidebar from '../src/ui_components/Sidebar'
import Home from '../src/ui_components/Home'
import Contact from '../src/ui_components/Contact'

import Return from '../src/ui_components/Refund'
import notebook from '../src/ui_components/Notebook'
import eraser from '../src/ui_components/Erasers'
import ruler from '../src/ui_components/Rulers'
import pen from '../src/ui_components/Pens'
import EraserDetails from './collections/erasers/data/EraserDetails';
import uploadSuccess from './CMS/uploadSuccess';
import EraserCrud from './CMS/EraserCrud/EraserCrud';
import EraserCrudDetails from './CMS/EraserCrud/EraserCrudDetails';
import Shop from '../src/ui_components/Shop';
import Test from './CMS/Test';
//styles
import './styles/main.css'
import ProductCrud from './CMS/ProductCrud/ProductCrud';
import TestCrud from './CMS/ProductCrud/TestCrud';

function App() {
  return (
    <BrowserRouter>
    
    
    <div className="App" style={{position:'relative', minHeight:'100vh'}}>
    <Sidebar/>
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
        <Route exact path ='/cms/testcrud' component={TestCrud}/>
        <Route exact path ='/cms/erasercrud' component={EraserCrud}/>
        <Route path ='/cms/eraser/update/:id' component={EraserCrudDetails}/>
        <Route exact path ='/shop' component={Shop}/>
        {/* <Route path ='/cms/eraser/:id' component={EraserCrudDetails}/> */}
        
      </Switch>
    
     
    </div>
     </BrowserRouter>
    
    
  );
}

export default App;
