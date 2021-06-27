import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartOrderCount = useSelector((state) => state.reducer.cartOrderCount);
  return (
    <button className="header_cart">
      <img src="images/shopping_cart.png" alt="" />
      <p className="header_cart_text">Sepetim</p>
      <div className="header_cart_count">{cartOrderCount}</div>
    </button>
  );
};

export default Cart;
