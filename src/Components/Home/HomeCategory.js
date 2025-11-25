import React from "react";
import { Row } from "react-bootstrap";
import SubTitles from "../Utilies/SubTitles";
import CategoryCard from "../Category/CategoryCard";
import clothe from "../../Assets/clothe.png";
import cat2 from "../../Assets/cat2.png";
import labtop from "../../Assets/labtop.png";
import sale from "../../Assets/sale.png";
import pic from "../../Assets/pic.png";

const HomeCategory = () => {
  return (
    <div className="container">
      <SubTitles title=" التصنيفات" btntitle="المزيد" pathText="/allCategories" />;
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard  img={clothe} title="ملابس" background="#F4DBA4" />
        <CategoryCard title="حيوانات" img={cat2} background="#0034FF" />
        <CategoryCard title="اجهزة كمبيوتر" img={labtop} background="#F4DBA4" />
        <CategoryCard title="تخفيضات" img={sale} background="#F4DBA4" />
        <CategoryCard title="صور" img={pic} background="#FF6262" />
        <CategoryCard title="ملابس" img={clothe} background="#F4DBA4" />
      </Row>
    </div>
  );
};

export default HomeCategory;
