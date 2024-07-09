//Always ask the interviewer whether the url will be same or recieved from parent component
import { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  //This function calculates the percentage scrolled
  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    //This value represents how far down the page has been scrolled from the top
    const howMuchScrolled =
      document.documentElement.scrollTop || document.body.scrollTop;

    /*his gives the total height of the page that can be scrolled, 
    which is the full height of the document minus the height of the viewport.*/
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    // On unmount we will remove the event listener
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercentage);
  return (
    <div>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="current-progress-container">
          <div
            className="progress-bar"
            // setting the width of progress bar according to scrollpercentage
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
