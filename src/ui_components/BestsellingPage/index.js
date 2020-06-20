import React, { Component } from 'react'
import SearchFilter from '../../CMS/ProductCrud/SearchFilter'
import ProductCard from '../BaseComponent/ProcuctCard'
import {connect} from 'react-redux';

import {SizeMe} from 'react-sizeme';
import FilterSort from '../ShopPage/FilterSort';
import FilterSortMain from '../ShopPage/FilterSortMain';

class BestsellingPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const {bestselling} = this.props;
        return (
            <div>
                <SearchFilter />
                <SizeMe 
                    refreshRate={32}
                    render = {({size})=>(
                        <div>
                             {(size.width<552) ?<FilterSort/>:  <FilterSortMain/> }
                        </div>
                    )}
                />
                <ProductCard data = {bestselling} />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let bestselling = state.filtersort ? state.filtersort.filter((product)=>{
        return product.bestselling.booleanValue
    }):[];
    return {
        bestselling: bestselling
    }
}

export default connect(mapStateToProps)(BestsellingPage)