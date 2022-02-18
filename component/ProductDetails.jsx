import React, { useState } from "react";
import Image from "next/image";
import EditDeleteButton from "./EditDeleteButton";
import BeatLoader from "react-spinners/BeatLoader";

import Router from "next/router";
const ProductDetails = ({ productDetails }) => {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  return (
    <div>
      {loading ? (
        <BeatLoader
          sizeUnit={"px"}
          size={20}
          color={"#000"}
          loading={loading}
        />
      ) : (
        <div className="wrapper">
          <EditDeleteButton productId={productDetails.id} />
          <div className="product-img">
            <Image
              src={productDetails.image}
              alt="no image"
              height="420"
              width="327"
            />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1>{productDetails.title}</h1>
              <h2>Category: {productDetails.category}</h2>
              <p>{productDetails.description}</p>
            </div>
            <div className="product-price-btn">
              <p>
                <span>{productDetails.price}</span>$
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
