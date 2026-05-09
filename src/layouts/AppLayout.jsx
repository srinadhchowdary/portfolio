import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";

export function AppLayout() {
  return (
    <Flex minH="100dvh" bg="pageBg" direction="column">
      <Navbar />
      <Box as="main" flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
}
