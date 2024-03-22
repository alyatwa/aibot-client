import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const SidebarBuilder = () => {
  const tabs = [
    {
      value: "model",
      label: "Model",
    },
    {
      value: "Light",
      label: "light",
    },
  ];
  return (
    <Box w="64" as="aside" bg="#f9fbfc" borderLeft="1px solid #e5e5e7">
      <Tabs position="relative" variant="unstyled">
        <TabList>
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              cursor="pointer"
              fontSize="sm"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="gray.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SidebarBuilder;
