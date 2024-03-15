// app/providers.tsx
"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'poppinsBold', sans-serif`,
    body: `'poppinsLight', sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        color: "",
      },
    }),
  },
  components: {
    Box: {
      baseStyle: {
        borderColor: "#e4e4e4",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
