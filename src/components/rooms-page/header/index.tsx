import Title from "@/components/ui/Title";
import { Flex, Button } from "@chakra-ui/react";
import { Plus } from "lucide-react";

const RoomsHeader = () => {
  return (
    <Flex justifyContent="space-between" flexDirection="row" w="100%" my={2}>
      <Title title="Rooms" />
      <Button
        leftIcon={<Plus size={16} />}
        px={4}
        borderRadius="full"
        cursor="pointer"
        size="sm"
        colorScheme="gray"
        variant="solid"
      >
        Add Room
      </Button>
    </Flex>
  );
};
export default RoomsHeader;
