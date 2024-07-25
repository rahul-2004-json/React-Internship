import React from "react";
import { useSelector } from "react-redux";
import Items from "../components/Items";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item, index) => (
        <div key={index}>
          <Items item={item} />
        </div>
      ))}
    </div>
  );
}

export default Cart;
