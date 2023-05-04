import { useState } from "react";
import { RecipeChoice } from "../../src/components/RecipeChoice";
import { RecipeListPage } from "../../src/pages/RecipeListPage";

export const Home = () => {
    const [userRecipe, setUserRecipe] = useState(false);

    return (
        <>
            {userRecipe ? (
                <RecipeChoice recipe={userRecipe} />
            ) : (
                <RecipeListPage onClick={setUserRecipe} />
            )}
        </>
    );
};
