import { Box } from "@chakra-ui/react";
import { NavigationBarBrand } from "..";

export const NavigationBar = () => {
  return (
    <Box
      alignItems="center"
      backgroundColor="#000000"
      color="#ffffff"
      display="flex"
      height="4rem"
    >
      <NavigationBarBrand />
    </Box>
  );
};
