import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-[#f4f4f4] w-100  ">
      <ul
        className="flex  text-[#000] font-Inter bg-[#f4f4f4]  justify-center gap-24  uppercase font-normal px-[10px]
       py-[15px]"
      >
        <li className="flex hover:text-[red] hover:font-normal py-4 uppercase">
          <Link to="/"> Home</Link>
        </li>
        <li className="flex hover:text-[red] hover:font-normal py-4 uppercase">
          <Link to="/jewelery"> Jewellery</Link>
        </li>
        <li className="flex hover:text-[red] hover:font-normal py-4 uppercase">
          <Link to="/electronics"> Electronics</Link>
        </li>
        <li className="flex hover:text-[red] hover:font-normal py-4 uppercase">
          <Link to="/menClothing"> Men Clothing</Link>
        </li>
        <li className="flex hover:text-[red] hover:font-normal py-4 uppercase">
          <Link to="/womenClothing"> Women Clothing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
