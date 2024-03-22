import CreateBot from "@/components/dashboard-page/create-bot";
import { Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box display="flex" h="full" justifyContent="center" alignItems="center">
      <CreateBot />
    </Box>
  );
};
export default Dashboard;
