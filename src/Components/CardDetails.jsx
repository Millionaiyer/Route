import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Pages/Header";

const CardDetails = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const fetchProductData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const apiData = await response.json();
      setProducts(apiData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <>
      <Header />
      <div className="w-[100%] mt-10">
        <div className="w-[80%] mx-auto  flex items-center">
          <div className="flex w-[50%] justify-center">
            <img src={products.image} alt="" className="w-[45%]" />
          </div>
          <div className="w-[50%] flex flex-col gap-6">
            <span className="font-inter leading-[35px] text-[27px] font-bold">
              {products.title}
            </span>
            <span className="font-inter border-2 border-[#a98b71] max-w-max rounded-[10px] px-2 py-1">
              {products.category}
            </span>

            <span className="text-[18px] text-[#a98b71]  leading-[25px] font-bold">
              Rs. {products.price}
            </span>

            <div className="flex gap-10">
              <div className="flex gap-3">
                <span className="text-[#a98b71]  font-bold text-[16px] leading-[25px]">
                  Rating:
                </span>
                <span className="text-black">{products.rating?.rate}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#a98b71]  font-bold text-[16px] leading-[25px]">
                  Count:
                </span>
                <span className="text-black">{products.rating?.count}</span>
              </div>
            </div>
            <span className="text-[#a98b71] font-['inter'] font-bold text-[16px] leading-[25px]">
              Product Description
            </span>
            <span>{products.description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
