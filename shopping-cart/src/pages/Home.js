import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import "./home.css";
import Items from "../components/Items";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getItemsfromAPI() {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      console.log(data);

      if (data) {
        setItems(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getItemsfromAPI();
  }, []);

  return (
    <div className="home-page">
      {loading ? (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <Items item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
