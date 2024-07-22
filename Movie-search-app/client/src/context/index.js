import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [movieDetails, setMovieDetails] = useState();
  const [favouriteList, setFavouriteList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=21d027b5&s=${searchParam}`
      );
      const data = await res.json();
      setMovieList(data?.Search);
      setSearchParam(" ");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setSearchParam(" ");
      setLoading(false);
    }
  }

  async function getMovieDetails(movieId) {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?i=${movieId}&apikey=21d027b5`
      );
      const data = await res.json();
      console.log(data);
      setMovieDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  function addToFavourite(moviedet, id) {
    const cpyfvrlist = [...favouriteList];
    const index = cpyfvrlist.findIndex((item) => item.imdbID === id);

    if (index === -1) {
      cpyfvrlist.push(moviedet);
    } else {
      cpyfvrlist.splice(index);
    }
    setFavouriteList(cpyfvrlist);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        movieList,
        movieDetails,
        getMovieDetails,
        favouriteList,
        setFavouriteList,
        addToFavourite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
