import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random_color/index";
import StarRating from "./components/star-rating/index";
import ImageSlider from "./components/image-slider";
import LoadMoreProducts from "./components/load-more-products";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian/> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/*Star Rating Component */}
      {/* <StarRating noOfStars={4}/> */}

      {/* Image Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'4'} page={'1'}/> */}

      {/* Load More Items */}
      <LoadMoreProducts />
    </div>
  );
}

export default App;
