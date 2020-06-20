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
import NoResult from './NoResult';
import EnterValue from './EnterValue'



class ShopPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        const {globalSearch, searchedProducts,emptySearch, searchInput} = this.props;
        console.log(emptySearch);
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
            {emptySearch ? (<EnterValue/>):searchedProducts.length==0? (<NoResult/>) : <ProductCard data={searchedProducts}/>  }
            
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        products: state.products,
        globalSearch: state.globalSearch,
        searchedProducts: state.searchedProducts,
        emptySearch: state.emptySearch,
        searchInput: state.searchInput
    }
}
export default connect(mapStateToProps)(ShopPage);