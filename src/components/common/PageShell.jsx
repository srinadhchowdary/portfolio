import { Container } from "@chakra-ui/react";

export function PageShell({ children }) {
  return (
    <Container as="section" maxW="7xl" px={{ base: 4, md: 6 }} py={{ base: 8, md: 12 }}>
      {children}
    </Container>
  );
}
