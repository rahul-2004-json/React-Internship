import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random_color/index';
import StarRating from './components/star-rating/index';

function App() {
  return (
    <div className="App">
    {/* Accordian Component */}
    {/* <Accordian/> */}

    {/* Random color component */}
    {/* <RandomColor/> */}

    <StarRating noOfStars={4}/>

    </div>
  );
}

export default App;
