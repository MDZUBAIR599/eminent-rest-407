import { Text, Image, Box, Stack, Heading } from "@chakra-ui/react";

const Product = ({ imageSrc }) => (
  <Stack p={{ base: "0 2rem" }} color="white">
    <Image objectFit="cover" src={imageSrc} alt="title" />
  </Stack>
);

export default Product;
