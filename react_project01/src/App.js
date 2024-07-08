import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random_color/index";
import StarRating from "./components/star-rating/index";
import ImageSlider from "./components/image-slider";
import LoadMoreProducts from "./components/load-more-products";
import TreeView from "./components/tree-view-recursive-menu";
import menus from "./components/tree-view-recursive-menu/data";
import QrCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/Light-to-Dark";
import ScrollIndicator from "./components/scroll_indicator";

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
      {/* <LoadMoreProducts /> */}

      {/* TreeView Menu */}
      {/* <TreeView menus={menus} /> */}

      {/* Qr code generator */}
      {/* <QrCodeGenerator /> */}

      {/* Light to Dark Mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
