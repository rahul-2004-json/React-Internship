import React, { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../components/RecipeItem";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  if (loading)
    return (
      <div className="py-8 lg:text-4xl text-xl text-center text-black font-extrabold">
        Loading Please wait...{" "}
      </div>
    );
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="py-8 lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show search something else :)
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
