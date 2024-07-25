import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features/cartSlice";

export default function Items({ item }) {
  const dispatch = useDispatch();

  function handleCart() {
    dispatch(addToCart(item));
  }
  return (
    <div className="home-item-container">
      <img src={item.image} alt={item.title} />
      <div className="item-description">
        <p>{item.title}</p>
        <p>Ratings : {item.rating.rate}</p>
        <p>Reviews : {item.rating.count}</p>
      </div>
      <button onClick={handleCart}>Add to Cart</button>
    </div>
  );
}
