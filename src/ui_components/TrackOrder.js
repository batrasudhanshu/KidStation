import React,{useEffect} from "react";
import SearchFilter from "../CMS/ProductCrud/SearchFilter";

const TrackOrder = () => {
  useEffect(() => {
    window.scroll(0,0);
  }, []);
  return (
      <track_order_page>
          <SearchFilter />
		      {/* <h2 style={{textAlign:'center'}}>Track Your Order</h2> */}
          <div style={{textAlign:'center'}}><span style={{color:'orangeRed',fontSize:'4.5rem',textAlign:'center',}}>Coming Soon...</span></div>

      </track_order_page>
    
    )
};

export default TrackOrder;