import { Box, Container, Flex, IconButton, Input, InputGroup, InputRightElement, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Carousel } from "@chakra-ui/react";

const Index = () => {
  const products = [
    { id: 1, name: "Sneaker X1", description: "Latest in our line", price: "$199" },
    { id: 2, name: "Sneaker X2", description: "Comfort and style", price: "$149" },
    { id: 3, name: "Sneaker X3", description: "For the professional runner", price: "$249" },
    // Add more products as needed
  ];

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="header" align="center" justify="space-between" p={4} borderBottom="1px" borderColor="gray.200">
        <Text fontSize="2xl" fontWeight="bold">naha</Text>
        <InputGroup>
          <Input placeholder="Search for products" />
          <InputRightElement children={<IconButton aria-label="Search" icon={<FaSearch />} />} />
        </InputGroup>
        <Flex>
          <IconButton aria-label="User Account" icon={<FaUser />} m={2} />
          <IconButton aria-label="Wishlist" icon={<FaHeart />} m={2} />
          <IconButton aria-label="Shopping Cart" icon={<FaShoppingCart />} m={2} />
        </Flex>
      </Flex>
      <Carousel>
        <Flex bg="gray.200" align="center" justify="center" h="300px">
          <Text fontSize="2xl">Featured Shoe 1</Text>
        </Flex>
        <Flex bg="gray.300" align="center" justify="center" h="300px">
          <Text fontSize="2xl">Featured Shoe 2</Text>
        </Flex>
      </Carousel>
      <Box p={4}>
        <Text fontSize="xl" mb={2}>Recommended Products</Text>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {products.map(product => (
            <Box key={product.id} p={4} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.description}</Text>
              <Text>{product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;