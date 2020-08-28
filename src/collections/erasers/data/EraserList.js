import React from "react";
import EraserSummary from "./EraserSummary";
import { Link } from "react-router-dom";

const EraserList = (props) => {
  const { erasers } = props;
  return (
    <div className="row product-list section" style={{ textAlign: "center" }}>
      {erasers &&
        erasers.map((eraser) => {
          return (
            <Link to={"/erasers/" + eraser.id}>
              <EraserSummary eraser={eraser} />
            </Link>
          );
        })}
    </div>
  );
};

export default EraserList;
