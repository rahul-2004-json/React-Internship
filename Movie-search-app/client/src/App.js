import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/favourites"} element={<Favourites />} />
        <Route path={"/movie-detail/:id"} element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
