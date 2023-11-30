import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-[#f4f4f4] w-100  ">
      <ul className="flex justify-evenly text-black py-3 px-3">
        <li className="flex hover:text-[#C4A062] hover:font-semibold">
          <Link to="/"> Home</Link>
        </li>
        <li className="flex hover:text-[#C4A062] hover:font-semibold">
          <Link to="/electronics"> Jewelery</Link>
        </li>
        <li className="flex hover:text-[#C4A062] hover:font-semibold">
          <Link to="/jewellery"> Electronics</Link>
        </li>
        <li className="flex hover:text-[#C4A062] hover:font-semibold">
          <Link to="/menClothing"> Men's Clothing</Link>
        </li>
        <li className="flex hover:text-[#C4A062] hover:font-semibold">
          <Link to="/womenClothing"> Women Clothing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;