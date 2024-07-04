import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  //This state helps us to show only currentslide and hide the rest
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  //Whenever handling api call we take loading state
  const [loading, setLoading] = useState(false);

  //Since fecthing from an api can take some time we will use async await to fetch the images
  async function fetchimages(getURL) {
    try {
      setLoading(true); //before calling the API
      const response = await fetch(`${getURL}?page=${page}&limit=${limit}`);
      // When you fetch data in JavaScript using the Fetch API, you typically get a Response object,
      // and to parse the JSON body of that response, you use the response.json() method
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false); //after we get the data
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  //When we pass an url as prop we will first handle the error
  //If the url is not passed we will return an error message
  useEffect(() => {
    if (url !== "") fetchimages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data! please wait</div>;
  }
  if (errorMsg) {
    return <div>Error occured! {errorMsg}</div>;
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  return (
    <div className="container">
      {/* Left Button */}
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />

      {/* Rendering Image Tag */}
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              //When the current slide matches with the index we will show the image
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}

      {/* Right Button */}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />

      {/* Rendering Circle Button */}
      <span className="circle-indicators">
        {images && images.length
          ? //When we render we can take two things from map , one is value and other Index
            images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator update-current-indicator"
                }
                //On clicking a circle we will show that current image
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
