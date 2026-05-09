import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { PageShell } from "../components/common/PageShell";

export function NotFoundPage() {
  return (
    <PageShell>
      <VStack
        align="start"
        gap={4}
        borderWidth="1px"
        borderColor="borderSubtle"
        bg="panelBg"
        borderRadius="lg"
        p={{ base: 6, md: 8 }}
      >
        <Heading size="lg">Page not found</Heading>
        <Text color="fg.muted">The route you requested does not exist.</Text>
        <Button as={RouterLink} to="/" colorPalette="blue">
          Go to Home
        </Button>
      </VStack>
    </PageShell>
  );
}
