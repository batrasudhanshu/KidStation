import React from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import SearchFilter from '../CMS/ProductCrud/SearchFilter';

class Shop extends React.Component {
    render(){
        return(
            <div>
                <SearchFilter/>
                Shop here
            </div>
        )
    }
}
export default Shop;