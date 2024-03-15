"use client";
import { Box, HStack, Link, VStack } from "@chakra-ui/react";
import { Home, type LucideIcon, Settings } from "lucide-react";
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
      link: "/settings",
      label: "Settings",
      icon: Settings,
    },
  ];
  return (
    <Box w="64" as="aside" bg="#f9fbfc" borderRight="1px solid #e5e5e7">
      <Box padding={4} display="flex" flexDirection="column" h="full">
        <VStack gap={8} flex="1" overflow="auto" paddingTop={8}>
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
    <HStack
      color={isActive ? "black" : "#444648"}
      bg={isActive ? "white" : "transparent"}
      gap={2}
      w="full"
      cursor="pointer"
      paddingY={2}
      borderRadius="lg"
      ps={3}
      pe={3}
    >
      {React.createElement(icon, {
        size: 18,
        color: isActive ? "#000" : "#444648",
      })}
      <Link _hover={{ textDecoration: "none" }} as={NextLink} href={link}>
        {label}
      </Link>
    </HStack>
  );
};
