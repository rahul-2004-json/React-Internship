import React, { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../components/RecipeItem";

function Favourites() {
  const { favouritesList, loading } = useContext(GlobalContext);
  if (loading)
    return (
      <div className="py-8 lg:text-4xl text-xl text-center text-black font-extrabold">
        Loading Please wait...{" "}
      </div>
    );
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="py-8 lg:text-4xl text-xl text-center text-black font-extrabold">
            It's empty out here :(
          </p>
        </div>
      )}
    </div>
  );
}

export default Favourites;
