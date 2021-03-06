import React from "react";
import HomePage from "../component/index";
import { fetchApi } from "../component/helper/fetchApi";

const Product = ({ products }) => {
  return (
    <div>
      <HomePage productsData={products} />
    </div>
  );
};

export const getStaticProps = async () => {
  const allProducts = await fetchApi();
  console.log(allProducts);
  return {
    props: {
      products: allProducts,
    },
  };
};
export default Product;
