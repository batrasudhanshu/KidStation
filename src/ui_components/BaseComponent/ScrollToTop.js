import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const ScrollToTop = ({ onChange }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  }, []);
  const checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      setScroll(true);
    } else if (window.pageYOffset <= 400) {
      setScroll(false);
    }
  };
  return (
    <>
      <div
        onScroll={checkScrollTop}
        style={scroll ? { display: "block" } : { display: "none" }}
        className="scroll-to-top"
      >
        <KeyboardArrowUpIcon
          onClick={() => onChange(true)}
          style={{ width: "5rem !important", height: "5rem !important" }}
        />
      </div>
    </>
  );
};

export default ScrollToTop;
