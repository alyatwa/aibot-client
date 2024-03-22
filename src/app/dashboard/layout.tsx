import Header from "@/components/dashboard-page/header";
import Sidebar from "@/components/dashboard-page/sidebar";
import { Flex, Box } from "@chakra-ui/react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden relative">
      <Flex h="full" id="app-container">
        <Sidebar />
        <Box as="main" bg="white" flex="1">
          <Header />
          <Box h="calc(100% - 60px)" p={4} overflowY="auto">
            {children}
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
