import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EditForm from "../../../component/EditForm";
import BeatLoader from "react-spinners/BeatLoader";
import Navbar from "../../../component/navbar/Navbar";
const EditProduct = () => {
  const [datas, setDatas] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const productid = router.query.eproductid;
  useEffect(() => {
    const getProductById = async () => {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productid}`
      );
      const data = await response.json();
      setDatas(data);
      setLoading(false);
    };
    getProductById();
  }, [productid]);

  return (
    <div>
      <Navbar />
      <div className="text-center">
        {" "}
        {loading ? (
          <BeatLoader
            sizeUnit={"px"}
            size={20}
            color={"#000"}
            loading={loading}
          />
        ) : (
          <EditForm
            id={datas.id}
            title={datas.title}
            descript={datas.description}
            price={datas.price}
            category={datas.category}
          />
        )}
      </div>
    </div>
  );
};

export default EditProduct;
