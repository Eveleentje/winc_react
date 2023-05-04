import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Badge,
    VStack,
    HStack,
    Text,
    Box,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
    return (
        <Card
            mb={8}
            className="recipe-item"
            align="center"
            cursor="pointer"
            backgroundColor="gray.100"
            maxW="sm"
            onClick={() => onClick(recipe)}
        >
            <Box
                bgImage={recipe.image}
                bgPosition="center"
                bgSize="cover"
                w="100%"
                h="200"
                borderTopRadius="md"
            ></Box>

            {recipe.mealType.map((mealType) => (
                <Badge key={mealType} mt={3} color="gray.500">
                    {mealType}
                </Badge>
            ))}
            <CardHeader fontSize="xl" align="center" p={1}>
                {recipe.label}
            </CardHeader>

            <CardFooter>
                <VStack>
                    <HStack>
                        {recipe.healthLabels.includes("Vegetarian") ? (
                            <Badge colorScheme="yellow">vegetarian</Badge>
                        ) : (
                            ""
                        )}
                        {recipe.healthLabels.includes("Vegan") ? (
                            <Badge colorScheme="yellow">vegan</Badge>
                        ) : (
                            ""
                        )}
                    </HStack>
                    <Box align="center">
                        {recipe.dietLabels.map((dietLabel) => (
                            <Badge key={dietLabel} colorScheme="green" mr={2}>
                                {dietLabel}
                            </Badge>
                        ))}
                    </Box>
                    <HStack>
                        <Text fontSize="xs">Dish:</Text>
                        <Text fontSize="xs" as="b">
                            {recipe.dishType}
                        </Text>
                    </HStack>
                    <Box align="center">
                        {recipe["cautions"] !== null &&
                        recipe["cautions"] != "" ? (
                            <Text fontSize="xs">Cautions:</Text>
                        ) : (
                            ""
                        )}
                        {recipe.cautions.map((cautions) => (
                            <Badge key={cautions} colorScheme="red" mr={2}>
                                {cautions}
                            </Badge>
                        ))}
                    </Box>
                </VStack>
            </CardFooter>
        </Card>
    );
};
