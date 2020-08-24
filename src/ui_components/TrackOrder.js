import React, { useEffect } from "react";
import SearchFilter from "../CMS/ProductCrud/SearchFilter";

const TrackOrder = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div style={{ height: "50vh" }}>
      <SearchFilter />
      {/* <h2 style={{textAlign:'center'}}>Track Your Order</h2> */}
      <div style={{ textAlign: "center", paddingTop: "4rem" }}>
        <span
          style={{
            color: "orangeRed",
            fontSize: "4.5rem",
            textAlign: "center",
          }}
        >
          Coming Soon...
        </span>
      </div>
    </div>
  );
};

export default TrackOrder;
