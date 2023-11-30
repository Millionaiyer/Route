import React from "react";
import Header from "./Header";
const NoMatch = () => {
  return (
    <>
      <div className="flex flex-cl justify-center  text-[80px] font-Inter font-bold ">
        <div>ERROR 404: </div>
      </div>
      <div className="flex  justify-center items-center text-[20px] font-Inter font-bold">
        The Page you're trying to request does not exist
      </div>
    </>
  );
};

export default NoMatch;
