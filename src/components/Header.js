import React from "react";
import Searchbar from "../subComponents/Searchbar";
import Cart from "../subComponents/Cart";

const Header = () => {
  return (
    <div className="header container">
      <img src="images/ciceksepeti_icon.png" alt="" />
      <Searchbar />
      <Cart />
    </div>
  );
};

export default Header;
