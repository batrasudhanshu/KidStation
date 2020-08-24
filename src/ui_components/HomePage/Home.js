import React, { useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import SearchFilter from "../../CMS/ProductCrud/SearchFilter";
import CategoryButtons from "./CategoryButtons";
import BrandSlider from "./Brands";
import BestSellingPhone from "./BestSellingPhone";
import BestSelling from "./BestSelling";
import { SizeMe } from "react-sizeme";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SearchFilter />
      <div
        className="home-carousel carousel carouselblock fade-carousel slide"
        data-ride="carousel"
        data-interval="4000"
        id="bs-carousel"
      >
        <div className="carousel-inner">
          <div className="item slides active">
            <div className="slide-1"></div>
            <div className="hero">
              <hgroup>
                <h1>KIDSTATION</h1>
                <h3>A Step Beyond Ordinary</h3>
              </hgroup>
              <button className="btn btn-hero btn-lg">
                <Link style={{ color: "#f5f5f5" }} to="/shop">
                  Shop Here
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <CategoryButtons />
      <SizeMe
        refreshRate={32}
        render={({ size }) => (
          <div>
            {size.width < 600 ? (
              <BestSellingPhone products={props.products} />
            ) : (
              <BestSelling products={props.products} />
            )}
          </div>
        )}
      />

      <BrandSlider />
    </div>
  );
};
export default Home;
