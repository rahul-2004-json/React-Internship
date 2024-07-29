import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/features/cartSlice";

export default function Items({ item }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart() {
    console.log("removed");
    dispatch(removeFromCart(item.id));
  }
  return (
    <div className="home-item-container">
      <img src={item.image} alt={item.title} />
      <div className="item-description">
        <p>{item.title}</p>
        <p>Ratings : {item.rating.rate}</p>
        <p>Reviews : {item.rating.count}</p>
        <p>Price : {item.price}</p>
      </div>
      <button
        onClick={
          cart.some((cartItem) => cartItem.id === item.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }
      >
        {cart.some((cartItem) => cartItem.id === item.id)
          ? "Remove from Cart"
          : "Add to cart"}
      </button>
    </div>
  );
}
