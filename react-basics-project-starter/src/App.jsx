import { Heading } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { RecipeChoice } from "./components/RecipeChoice";
import { Home } from "./pages/Home";

const Welcome = () => {
    return (
        <Heading
            mb={8}
            fontSize={["4xl", "7xl"]}
            color="blue.700"
            className="Welcome"
        >
            Winc Recipe Finder
        </Heading>
    );
};

export const App = () => {
    return (
        <div className="app">
            <>
                <Welcome />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/recipe" element={<RecipeChoice />}></Route>
                </Routes>
            </>
        </div>
    );
};
