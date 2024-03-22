"use client";
import { Box, HStack, Link, VStack, Text } from "@chakra-ui/react";
import {
  Home,
  type LucideIcon,
  Settings,
  Bot,
  Boxes,
  DoorOpen,
  MessageCircleMore,
  LineChart,
} from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const links = [
    {
      link: "/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      link: "/dashboard/rooms",
      label: "Rooms",
      icon: DoorOpen,
    },
    {
      link: "/dashboard/products",
      label: "Products",
      icon: Boxes,
    },
    {
      link: "/dashboard/analytics",
      label: "Analytics",
      icon: LineChart,
    },
  ];
  const settingsLinks = [
    {
      link: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
    },
    {
      link: "/dashboard/support",
      label: "Support",
      icon: MessageCircleMore,
    },
  ];
  return (
    <Box w="64" as="aside" bg="#f9fbfc" borderRight="1px solid #e5e5e7">
      <Box padding={4} display="flex" flexDirection="column" h="full">
        <VStack gap={4} flex="1" overflow="auto" paddingTop={8}>
          <Box display="flex" flexDirection="column" w="full" gap={2}>
            {links.map((item) => (
              <NavLink
                label={item.label}
                icon={item.icon}
                key={item.link}
                link={item.link}
              />
            ))}
          </Box>
          <Text
            paddingInlineStart={3}
            paddingInlineEnd={3}
            fontSize="xs"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="widest"
            color="#444648"
            align="left"
            w="full"
          >
            Settings & Help
          </Text>
          <Box display="flex" flexDirection="column" w="full" gap={2}>
            {settingsLinks.map((item) => (
              <NavLink
                label={item.label}
                icon={item.icon}
                key={item.link}
                link={item.link}
              />
            ))}
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};
export default Sidebar;

const NavLink: React.FC<{
  link: string;
  label: string;
  icon: LucideIcon;
}> = ({ link, label, icon }) => {
  const path = usePathname();
  const isActive = path === link;

  return (
    <Link as={NextLink} href={link} _hover={{ textDecoration: "none" }}>
      <HStack
        bg={isActive ? "white" : "transparent"}
        gap={2}
        w="full"
        cursor="pointer"
        paddingY={2}
        borderRadius="lg"
        ps={3}
        pe={3}
        _hover={{ bg: isActive ? "white" : "#f3f3f3" }}
      >
        {React.createElement(icon, {
          size: 18,
          color: isActive ? "#000" : "#444648",
        })}

        <Text color={isActive ? "black" : "#444648"} fontSize="small">
          {label}
        </Text>
      </HStack>
    </Link>
  );
};
