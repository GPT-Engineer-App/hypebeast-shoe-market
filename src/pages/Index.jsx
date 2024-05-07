import { Box, Container, Flex, IconButton, Input, InputGroup, InputRightElement, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Featured+Shoe+1" alt="Featured Shoe 1" />
          <p className="legend">Featured Shoe 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Featured+Shoe+2" alt="Featured Shoe 2" />
          <p className="legend">Featured Shoe 2</p>
        </div>
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