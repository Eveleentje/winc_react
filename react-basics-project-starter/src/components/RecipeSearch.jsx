import { data } from "./../utils/data.js";
import { SearchField } from "./ui/SearchField.jsx";
import { Box } from "@chakra-ui/react";

export const RecipeSearch = ({ onSearch }) => {
    const handleChange = (event) => {
        const matchedRecipes = data.hits.filter(({ recipe }) => {
            return recipe.label
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
        });
        console.log(matchedRecipes, event.target.value);
        onSearch(matchedRecipes);
    };

    return (
        <>
            <Box w="45vw">
                <SearchField
                    onChange={handleChange}
                    htmlSize={12}
                    placeholder="Search recipes"
                    width="100%"
                />
            </Box>
        </>
    );
};
