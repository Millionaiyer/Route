import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

const Jewelery = () => {
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const apiProductData = await response.json();
      setProducts(apiProductData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  fetchProductData(() => {
    jeweleryData;
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center">
        <div className="w-[80%] mx-auto flex gap-10 flex-col CONTAINER">
          <div>
            <span className="text-[40px] text-center font-thin ">
              Jewellery
            </span>
          </div>
          <div>
            <span className="flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
          </div>

          <div className="flex gap-5">
            {products.map((item) => {
              if (item.category === "jewelery") {
                return (
                  <Link to={`/products/${item.id}`}>
                    <Card key={item.id} productData={item} />
                  </Link>
                );
              } else {
                null;
              }
            })}
          </div>
          <div className="mb-48"></div>
        </div>
      </div>
    </>
  );
};

export default Jewelery;
