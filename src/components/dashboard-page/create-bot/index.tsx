"use client";
import { SimpleGrid } from "@chakra-ui/react";
import { Pen, LineChart } from "lucide-react";
import CreateButton from "../create-button";

const CreateBot = () => {
  const buttons = [
    {
      label: "Create Marketing bot",
      icon: LineChart,
      color: "#2697ff",
      bg: "bg-blue-300/30",
      value: "marketing_2bot",
    },
    {
      label: "Create Marketing bot",
      icon: LineChart,
      color: "#2697ff",
      bg: "bg-blue-300/30",
      value: "marketing_b5ot",
    },
    {
      label: "Create Marketing bot",
      icon: LineChart,
      color: "#2697ff",
      bg: "bg-blue-300/30",
      value: "marketing_bot",
    },
    {
      label: "Create A bot",
      icon: Pen,
      color: "#1de419",
      bg: "bg-green-300/30",
      value: "marketing_bot_",
    },
  ];
  return (
    <SimpleGrid columns={2} spacing={10} display="inline-grid">
      {buttons.map((button, index) => (
        <CreateButton
          icon={<button.icon color={button.color} size={18} />}
          bg={button.bg}
          key={button.value}
          label={button.label}
          onClick={() => {}}
        />
      ))}
    </SimpleGrid>
  );
};
export default CreateBot;
