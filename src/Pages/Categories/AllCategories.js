import React from "react";
import AllCategoriesContainer from "./AllCategoriesContainer";
import Pagination from "../../Components/Utilies/Pagination";

const AllCategoryPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
        
      <AllCategoriesContainer />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
