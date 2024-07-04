import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disablebtn, setdisablebtn] = useState(false);

  //Error handling is important in API calls
  async function fetchProducts() {
    try {
      setLoading(true);
      //call to api to get products
      const response = await fetch(
        `https://dummyjson.com/products/?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        //As we know the function used to set state can return previous state value
        setProducts((prevData) => [...prevData, ...data.products]); // we will be taking previous data value and adding new data to it
        setLoading(false);
      }
      console.log(data);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  }

  //This will run as soon as the website loads
  useEffect(() => {
    fetchProducts();
  }, [count]); //so every time the count changes the useEffect will run

  useEffect(() => {
    if (products && products.length === 100) {
      setdisablebtn(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading data please wait!</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disablebtn} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disablebtn ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
