import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export function SectionPlaceholder({ title, description }) {
  return (
    <Box
      w="full"
      borderWidth="1px"
      borderColor="borderSubtle"
      bg="panelBg"
      borderRadius="lg"
      p={{ base: 6, md: 8 }}
    >
      <VStack align="start" gap={3}>
        <Heading as="h1" size="lg">
          {title}
        </Heading>
        <Text color="fg.muted" maxW="2xl">
          {description}
        </Text>
      </VStack>
    </Box>
  );
}
