import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
const ProductForm = () => {
  const title = useRef();
  const category = useRef();
  const price = useRef();
  const description = useRef();
  const image = useRef();
  toast.configure();
  const addProductHandler = (event) => {
    event.preventDefault();

    const titles = title.current.value;
    const categorys = category.current.value;
    const prices = price.current.value;
    const descriptions = description.current.value;
    const images = image.current.value;

    const addProductDetails = {
      title: titles,
      price: prices,
      description: descriptions,
      image: images,
      category: categorys,
    };
    if (titles && categorys && descriptions && images && prices) {
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(addProductDetails),
      })
        .then((res) => {
          if (res) {
            toast.success("Product is Added");
            title.current.value = "";
            category.current.value = "";
            price.current.value = "";
            description.current.value = "";
            image.current.value = "";
          }
        })
        .catch((err) => {
          toast.error("Failed To Fetch", { autoClose: false });
        });
    }
  };

  return (
    <div>
      <div className="container-fluid px-1 py-5 mx-auto overflow-hidden">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="card">
              <h5 className="text-center mb-4">Add Product Details</h5>
              <form className="form-card" onSubmit={addProductHandler}>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Product Title
                    </label>

                    <input
                      type="text"
                      id="title"
                      name="title"
                      ref={title}
                      placeholder="Enter Product Title"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Category</label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      ref={category}
                      placeholder="Enter  Product Category"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Product Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      ref={price}
                      placeholder="Enter Price"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Product Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      placeholder=""
                      ref={image}
                      accept="image/*"
                      required
                    />
                  </div>
                </div>

                <div className="row justify-content-between text-left">
                  <div className="form-group col-12 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Product Description
                    </label>
                    <textarea
                      placeholder="Enter Product Description"
                      ref={description}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group col-sm-6 mt-4">
                    <button type="submit" className="btn-block btn-primary">
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
