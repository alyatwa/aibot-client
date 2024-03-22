import { Avatar, Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      h="60px"
      bg="#fff"
      px={6}
      w="full"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      borderBottom="1px solid #e5e5e7"
    >
      <Avatar
        size="sm"
        name="Ryan Florence"
        src="https://bit.ly/ryan-florence"
      />
    </Box>
  );
};
export default Header;
