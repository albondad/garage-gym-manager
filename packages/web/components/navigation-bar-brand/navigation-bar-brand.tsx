import { Box } from "@chakra-ui/react";

export const NavigationBarBrand = () => {
  return (
    <Box fontSize="1.5rem" fontWeight="700" lineHeight="1.5em" display="flex">
      <Box as="span" color="#f71735">
        AL{"'"}S &nbsp;
      </Box>
      <Box as="span">GYM</Box>
    </Box>
  );
};
