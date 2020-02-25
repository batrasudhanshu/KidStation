import React from 'react';
import Sidebar from '../src/ui_components/Sidebar'
import Home from '../src/ui_components/Home'
import Contact from '../src/ui_components/Contact'
import Footer from '../src/ui_components/Footer'
import Return from '../src/ui_components/Refund'
import notebook from '../src/ui_components/Notebook'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/main.css'

function App() {
  return (
    <BrowserRouter>
    
    
    <div className="App">
    <Sidebar/>
       
      <Route exact path ='/' component={Home}/>
      <Route exact path ='/Contact' component={Contact}/>
      <Route exact path ='/return' component={Return}/>
      <Route exact path ='/notebook_registers' component={notebook}/>
    <Footer/>
     
    </div>
     </BrowserRouter>
    
    
  );
}

export default App;
