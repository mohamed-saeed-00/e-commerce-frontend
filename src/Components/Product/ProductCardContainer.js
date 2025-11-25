import { Container, Row } from "react-bootstrap";
import SubTitles from "../Utilies/SubTitles";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, btntitle }) => {
  return (
    <Container>
      <SubTitles title={title} btntitle={btntitle}/>

      <Row className="my-2 d-flex justify-content-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
