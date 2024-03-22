import {
  VStack,
  Tag,
  TagLabel,
  Divider,
  HStack,
  Text,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import { Eye, Settings2 } from "lucide-react";
import NextLink from "next/link";

interface RoomCardProps {
  room: {
    id: string;
    cover: string;
    name: string;
    type: string;
    status: string;
    description: string;
  };
  onClick: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onClick }) => {
  return (
    <VStack
      gap={4}
      alignItems="flex-start"
      borderRadius={15}
      padding={4}
      display="inline-flex"
      border="1px solid #e4e4e4"
      minW="300px"
      w="100%"
    >
      <Link as={NextLink} href={`/dashboard/rooms/${room.id}`}>
        <Image borderRadius="xl" src={room.cover} />
      </Link>
      <HStack gap={1} alignItems="flex-start">
        <Text fontSize="large" fontWeight="semibold">
          {room.name}
        </Text>
        <Tag size="md" borderRadius="full" variant="solid" bg="green.100">
          <TagLabel color="green.600" fontSize="small">
            {room.status}
          </TagLabel>
        </Tag>
      </HStack>

      <Divider />
      <Text fontSize="small">{room.description}</Text>
      <HStack gap={2}>
        <Link as={NextLink} href={`/dashboard/rooms/${room.id}`}>
          <Button
            leftIcon={<Settings2 size={16} />}
            px={4}
            borderRadius="full"
            cursor="pointer"
            size="sm"
            colorScheme="gray"
            variant="outline"
          >
            Edit
          </Button>
        </Link>
        <Button
          px={4}
          leftIcon={<Eye size={16} />}
          borderRadius="full"
          cursor="pointer"
          size="sm"
          colorScheme="gray"
          variant="outline"
        >
          View
        </Button>
      </HStack>
    </VStack>
  );
};
export default RoomCard;
