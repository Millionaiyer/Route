import React from "react";

const Card = ({ productData }) => {
  const { title, price, image } = productData;

  return (
    <div className="w-[200px] h-max flex flex-col items-center rounded shadow-[0_1px_3px_rgba(0,0,0,.3),_0_1px_2px_rgba(0,0,0,.24)] ">
      <div className="flex justify-center p-4">
        <img src={image} alt="" className="w-[115px] h-[115px]" />
      </div>
      <div className=" bg-[#fefaef]">
        <p className=" p-[8px] uppercase overflow-hidden text-ellipsis truncate w-[200px]">
          {title}
        </p>
      </div>
      <div className="bg-[#f6f1ea]">
        <p className="p-[5px] font-normal text-[#999] hover:text-[#000] hover:bg[#999] w-[200px]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
