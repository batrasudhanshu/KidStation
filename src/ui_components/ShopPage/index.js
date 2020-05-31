import React from 'react'
import '../../styles/header_banner.css';
import HeaderBanner from '../BaseComponent/HeaderBanner';
import {fetchProduct} from '../../CMS/actions/UploadAction';
import {connect} from 'react-redux';
import eraser_banner from '../../images/eraser_banner.jpg';
import ProductCard from '../BaseComponent/ProcuctCard';
import FilterSort from './FilterSort';
import FilterSortMain from './FilterSortMain';
import {SizeMe} from 'react-sizeme';
import SearchFilter from '../../CMS/ProductCrud/SearchFilter';



class ShopPage extends React.Component {
    componentWillReceiveProps = (prevProps,state) =>{
        if(prevProps!=this.props){
            console.log("change in props");
        }
    }
    render(){
        const {filtersort} = this.props;
        console.log(filtersort);
        return(
        <>  
            <SearchFilter />
            <HeaderBanner tag="Shop our Latest Collection" bannerImg={`url(${eraser_banner})`} />
            <SizeMe 
                    refreshRate={32}
                    render = {({size})=>(
                        <div>
                             {(size.width<552) ? <FilterSort />:  <FilterSortMain /> }
                        </div>
                    )}
            />
            <ProductCard data={filtersort}/>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        products: state.products,
        filtersort: state.filtersort
    }
}
export default connect(mapStateToProps)(ShopPage);