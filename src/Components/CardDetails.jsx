import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <div>{products.title}</div>
    </div>
  );
};

export default CardDetails;
