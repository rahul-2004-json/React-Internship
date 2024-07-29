import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Items from "../components/Items";
import { Link } from "react-router-dom";

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    //cart.reduce is a JavaScript array method.
    //Reducer function takes two arguments accumulator and current value
    //Accumulator is to accumulate the result of the reducer and below its default value is set to 0
    //curr is the current element being processed in the array.
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div>
      {cart && cart.length ? (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <Items item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Your Cart is empty</p>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}

      <div>
        <h1>Your Cart Summary is:</h1>
        <p>Total Items: {cart.length}</p>
        <p>Total Price: {totalCart}</p>
      </div>
    </div>
  );
}

export default Cart;
