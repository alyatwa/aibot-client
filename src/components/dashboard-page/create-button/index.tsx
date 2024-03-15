"use client";
import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { Pen, Plus } from "lucide-react";
import React from "react";

interface CreateButtonProps {
  label: string;
  onClick: () => void;
  bg: string;
  icon: React.ReactNode;
}

const CreateButton: React.FC<CreateButtonProps> = ({
  label,
  onClick,
  bg,
  icon,
}) => {
  return (
    <HStack
      borderRadius={15}
      padding={3}
      display="inline-flex"
      border="1px solid #e4e4e4"
    >
      <Box className={bg} padding={4} borderRadius={12}>
        {icon}
      </Box>
      <Text fontSize="small" fontWeight="bold" color="#0a0822" mr={6} flex={1}>
        {label}
      </Text>
      <IconButton
        onClick={onClick}
        colorScheme="#e4e4e4"
        variant="outline"
        borderColor="#e4e4e4"
        size="sm"
        aria-label="Add"
        isRound={true}
        className="cursor-pointer"
        icon={<Plus color="#0a0822" size={13} />}
      />
    </HStack>
  );
};
export default CreateButton;
