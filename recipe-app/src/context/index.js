import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  async function handlesubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setSearchParam("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleAddToFavourites(getCurrentItem) {
    const cpyfvrlist = [...favouritesList];
    const index = cpyfvrlist.findIndex((item) => item.id === getCurrentItem.id);

    if (index === -1) {
      cpyfvrlist.push(getCurrentItem);
    } else {
      cpyfvrlist.splice(index);
    }
    setFavouritesList(cpyfvrlist);
  }
  console.log(favouritesList);
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handlesubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        favouritesList,
        setFavouritesList,
        handleAddToFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
