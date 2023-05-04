import {
    Heading,
    Text,
    Grid,
    GridItem,
    Flex,
    Badge,
    Box,
    List,
    ListItem,
    IconButton,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const GoBack = () => {
    return (
        <>
            <Flex>
                <IconButton
                    aria-label="Back to homepage"
                    icon={<ArrowBackIcon />}
                    colorScheme="teal"
                    variant="link"
                    onClick={() => window.location.reload(false)}
                />
                <Text
                    color="teal.500"
                    onClick={() => window.location.reload(false)}
                    cursor="pointer"
                >
                    Go back to homepage
                </Text>
            </Flex>
        </>
    );
};

export const RecipeChoice = ({ recipe }) => {
    return (
        <>
            <Grid w="100vw" templateColumns="repeat(2, 1fr)" gap={12} mb={12}>
                <GridItem colSpan={2} w="100%" h="5">
                    <GoBack />
                </GridItem>
                <GridItem
                    w="100%"
                    h={{ base: "200", md: "300", lg: "400" }}
                    rowSpan={1}
                    colSpan={2}
                    bgImage={recipe.image}
                    bgSize="cover"
                    bgPosition="center"
                    bgRepeat="none"
                />
                <GridItem
                    colSpan={{ base: 2, lg: 1 }}
                    ml={{ base: "5%", md: "10%", lg: "20%" }}
                >
                    <Badge colorScheme="white" color="gray">
                        {recipe.mealType}
                    </Badge>
                    <Heading
                        size="lg"
                        fontWeight="normal"
                        className="recipeChoice"
                        mt={1}
                        mb={3}
                    >
                        {recipe.label}
                    </Heading>
                    <Text>
                        Total cooking time: <b>{recipe.totalTime} Minutes</b>
                    </Text>
                    <Text>
                        Servings: <b>{recipe.yield}</b>
                    </Text>
                    <List mt={3}>
                        {recipe.ingredientLines.map((ingredient) => (
                            <ListItem mb={1} key={ingredient}>
                                {ingredient}
                            </ListItem>
                        ))}
                    </List>
                </GridItem>
                <GridItem
                    colSpan={{ base: 2, lg: 1 }}
                    ml={{ base: "5%", md: "10%", lg: 0 }}
                    mr={{ base: "5%", md: "10%", lg: "20%" }}
                >
                    <Text>Health labels:</Text>

                    {recipe.healthLabels.map((healthLabel) => (
                        <Badge mr="2" colorScheme="purple" key={healthLabel}>
                            {healthLabel}
                        </Badge>
                    ))}

                    <Text mt={3}>Diet:</Text>

                    {recipe.dietLabels.map((dietLabel) => (
                        <Badge mr="2" colorScheme="yellow" key={dietLabel}>
                            {dietLabel}
                        </Badge>
                    ))}

                    <Text mt={3}>Cautions:</Text>

                    {recipe.cautions.map((caution) => (
                        <Badge mr="2" colorScheme="red" key={caution}>
                            {caution}
                        </Badge>
                    ))}

                    <Text mt={3} mb={1}>
                        <b>Total nutrients:</b>
                    </Text>
                    <Wrap spacing="30px">
                        <WrapItem>
                            <Box>
                                <Text>{Math.floor(recipe.calories)}</Text>
                                <Badge colorScheme="white">Calories</Badge>
                            </Box>
                        </WrapItem>
                        <WrapItem>
                            <Box>
                                <Text>
                                    {Math.floor(
                                        recipe.totalNutrients.CHOCDF.quantity
                                    )}{" "}
                                    g
                                </Text>
                                <Badge colorScheme="white">Carbs</Badge>
                            </Box>
                        </WrapItem>
                        <WrapItem>
                            <Box>
                                <Text>
                                    {Math.floor(
                                        recipe.totalNutrients.PROCNT.quantity
                                    )}{" "}
                                    g
                                </Text>
                                <Badge colorScheme="white">Protein</Badge>
                            </Box>
                        </WrapItem>
                        <WrapItem>
                            <Box>
                                <Text>
                                    {Math.floor(
                                        recipe.totalNutrients.FAT.quantity
                                    )}{" "}
                                    g
                                </Text>
                                <Badge colorScheme="white">Fat</Badge>
                            </Box>
                        </WrapItem>
                        <WrapItem>
                            <Box>
                                <Text>
                                    {Math.floor(
                                        recipe.totalNutrients.CHOLE.quantity
                                    )}{" "}
                                    g
                                </Text>
                                <Badge colorScheme="white">Cholesterol</Badge>
                            </Box>
                        </WrapItem>
                        <WrapItem>
                            <Box>
                                <Text>
                                    {Math.floor(
                                        recipe.totalNutrients.NA.quantity
                                    )}{" "}
                                    g
                                </Text>
                                <Badge colorScheme="white">Sodium</Badge>
                            </Box>
                        </WrapItem>
                    </Wrap>
                </GridItem>
            </Grid>
        </>
    );
};
