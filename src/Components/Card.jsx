import React from 'react';

const Card = ({ productData }) => {
  // const { title, price, image } = productData;

  return (
    <div>
      {/* <img src="{image}" alt="" className="w-[100px] h-[100px]" /> */}
      <span>{productData.title}</span>
      <span>{productData.price}</span>
    </div>
  );
};

export default Card;
