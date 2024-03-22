import Header from "@/components/builder-page/header";
import SidebarBuilder from "@/components/builder-page/sidebar";
import { Box, Flex } from "@chakra-ui/react";

const BuilderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden relative">
      <Flex h="full" flexDir="column" id="app-container">
        <Header />
        <Box bg="white" display="flex" flexDir="row" h="calc(100% - 60px)">
          <Box as="main" flex="1" width="100%">
            {children}
          </Box>
          <SidebarBuilder />
        </Box>
      </Flex>
    </div>
  );
};

export default BuilderLayout;
