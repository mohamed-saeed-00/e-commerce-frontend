import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Product/ProductCardContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandCardContainer from "../../Components/Brand/BrandContainer";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="احدث الازياء" btntitle="المزيد" />
      <DiscountSection />
      <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" />
      <BrandCardContainer title="اشهر المركات" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
