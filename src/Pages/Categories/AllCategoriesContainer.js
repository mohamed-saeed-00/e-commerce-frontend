import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../../Components/Category/CategoryCard";
import clothe from "../../Assets/clothe.png";
import cat2 from "../../Assets/cat2.png";
import labtop from "../../Assets/labtop.png";
import sale from "../../Assets/sale.png";
import pic from "../../Assets/pic.png";
const AllCategoriesContainer = () => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={labtop} background="#0034FF" />
        <CategoryCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
        <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={labtop} background="#0034FF" />
        <CategoryCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
        <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={labtop} background="#0034FF" />
        <CategoryCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
        <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" />
      </Row>
    </Container>
  );
};

export default AllCategoriesContainer;
