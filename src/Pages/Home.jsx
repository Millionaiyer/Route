import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const apiProductData = await response.json();
      setProducts(apiProductData);
      console.log(apiProductData, "Dataaaaaaa");
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div className="mb-[20px]">
        <Header />
      </div>

      <img
        src="https://rajarathinam.netlify.app/image-banner.png"
        className="w-[100%] mb-[50px]"
        alt="Banner image for home page"
      />
      <div className="flex flex-col gap-10">
        <div className="w-[80%] mx-auto flex gap-10 flex-col CONTAINER">
          <div>
            <span className="text-[40px] text-center font-thin font-Inter">
              Jewellery
            </span>
          </div>
          <div>
            <span className="flex font-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
          </div>

          <div className="max-sm:!block flex gap-5">
            {products.map((item) => {
              if (item.category === "jewelery") {
                return (
                  <Link to={`products/${item.id}`}>
                    <Card key={item.id} productData={item} />
                  </Link>
                );
              } else {
                null;
              }
            })}
          </div>
        </div>
        <div className="w-[80%] mx-auto flex gap-10 flex-col CONTAINER">
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-[40px] text-center font-thin font-Inter">
                Electronics
              </span>
            </div>
            <div>
              <span className="flex font-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div>
            <div className="flex">
              <div className="">
                <img
                  src="https://surendran.netlify.app/assets/main-product_2-CM0Pbzwo.png"
                  alt=""
                  className="w-[95%] h-[100%]"
                />
              </div>
              <div className="flex gap-5 flex-wrap">
                {products.map((item) => {
                  if (item.category === "electronics") {
                    return (
                      <Link to={`products/${item.id}`}>
                        <Card key={item.id} productData={item} />
                      </Link>
                    );
                  } else {
                    null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-[80%] mx-auto flex gap-6 flex-col CONTAINER mt-16">
          <div>
            <span className="text-[40px] text-center font-thin font-Inter">
              Men Clothing
            </span>
          </div>
          <div>
            <span className="flex font-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
          </div>

          <div className="flex gap-5">
            {products.map((item) => {
              if (item.category === "men's clothing") {
                return (
                  <Link to={`products/${item.id}`}>
                    <Card key={item.id} productData={item} />
                  </Link>
                );
              } else {
                null;
              }
            })}
          </div>
        </div>
        <div className="w-[80%] mx-auto flex gap-10 flex-col CONTAINER mt-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[40px] text-center font-thin font-Inter">
                Women Clothing
              </span>
            </div>
            <div>
              <span className="flex font-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div>
            <div className="flex">
              <div className="">
                <img
                  src="https://surendran.netlify.app/assets/main-product_2-CM0Pbzwo.png"
                  alt=""
                  className="w-[95%] h-[100%]"
                />
              </div>
              <div className="flex gap-5 flex-wrap">
                {products.map((item) => {
                  if (item.category === "women's clothing") {
                    return (
                      <Link to={`products/${item.id}`}>
                        <Card key={item.id} productData={item} />
                      </Link>
                    );
                  } else {
                    null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
