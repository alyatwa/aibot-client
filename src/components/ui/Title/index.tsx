import { Text } from "@chakra-ui/react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Text as="h1" fontSize="xl" fontWeight="semibold" mb={4}>
      {title}
    </Text>
  );
};
export default Title;
