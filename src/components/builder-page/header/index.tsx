import Logo from "@/components/ui/logo";
import { Avatar, Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      h="60px"
      bg="#fff"
      px={6}
      w="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #e5e5e7"
    >
      <Logo />
      <Box flexDirection="row" display="flex" gap={1}>
        <Text color="#d3d3d3">/</Text>
        <Text>kitchen</Text>
      </Box>

      <Avatar
        size="sm"
        name="Ryan Florence"
        src="https://bit.ly/ryan-florence"
      />
    </Box>
  );
};
export default Header;
