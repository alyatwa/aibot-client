import Sidebar from "@/components/dashboard-page/sidebar";
import { Flex, Box } from "@chakra-ui/react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen overflow-hidden relative">
      <Flex h="full" id="app-container">
        <Sidebar />
        <Box as="main" bg="white" flex="1">
          {children}
        </Box>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
