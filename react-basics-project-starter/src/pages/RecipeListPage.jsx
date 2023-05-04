import { useState } from "react";
import { data } from "./../utils/data.js";
import { Center, Grid, VStack } from "@chakra-ui/react";
import { RecipeItem } from "../components/Recipe";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipeListPage = ({ onClick }) => {
    const [recipesArray, setRecipesArray] = useState(data.hits);
    return (
        <>
            <Center>
                <VStack>
                    <RecipeSearch onSearch={setRecipesArray}></RecipeSearch>
                </VStack>
            </Center>
            <Center>
                <Grid
                    templateColumns={[
                        "1fr",
                        "repeat(2, 1fr)",
                        "repeat(3, 1fr)",
                        "repeat(4, 1fr)",
                    ]}
                    mt={8}
                    ml={12}
                    mr={12}
                    gap={8}
                >
                    {recipesArray.map(({ recipe }) => (
                        <RecipeItem
                            key={recipe.label}
                            recipe={recipe}
                            onClick={onClick}
                        />
                    ))}
                </Grid>
            </Center>
        </>
    );
};
