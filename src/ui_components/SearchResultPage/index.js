import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import eraser_banner from '../../images/eraser_banner.jpg';
import ProductCard from '../BaseComponent/ProcuctCard';
import FilterSort from '../ShopPage/FilterSort';
import FilterSortMain from '../ShopPage/FilterSortMain';
import {SizeMe} from 'react-sizeme';
import SearchFilter from '../../CMS/ProductCrud/SearchFilter';



class ShopPage extends React.Component {
    render(){
        const {globalSearch, searchedProducts} = this.props;
        return(
        <>  
            <SearchFilter />
            <SizeMe 
                    refreshRate={32}
                    render = {({size})=>(
                        <div>
                             {(size.width<552) ? <FilterSort />:  <FilterSortMain /> }
                        </div>
                    )}
            />
            <ProductCard data={searchedProducts}/>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        products: state.products,
        globalSearch: state.globalSearch,
        searchedProducts: state.searchedProducts
    }
}
export default connect(mapStateToProps)(ShopPage);