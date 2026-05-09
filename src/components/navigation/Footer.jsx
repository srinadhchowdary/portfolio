import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Link as ChakraLink,
  Flex
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaUser } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box bg={{ base: "white", _dark: "#0B0D14" }} color={{ base: "gray.800", _dark: "white" }} py={16} mt="auto" borderTopWidth="1px" borderColor={{ base: "gray.300", _dark: "borderSubtle" }} boxShadow={{ base: "0 -4px 20px rgba(0, 0, 0, 0.05)", _dark: "none" }}>
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 12, md: 20 }}>
          {/* Left Column */}
          <VStack align="start" spacing={8}>
            <Heading as="h2" size="2xl" fontWeight="bold">Contact Me</Heading>

            <Box>
              <Heading as="h3" size="md" mb={3} color="gray.300" fontWeight="medium">Contact me directly:</Heading>
              <HStack color="gray.400" _hover={{ color: "brand.400" }} transition="color 0.2s">
                <FaEnvelope />
                <Text fontSize="lg">srinadh.bejawada@gmail.com</Text>
              </HStack>
            </Box>

            <Box>
              <Heading as="h3" size="md" mb={4} color="gray.300" fontWeight="medium">Check my profiles</Heading>
              <HStack spacing={4}>
                <ChakraLink href="https://github.com/SrinadhB" isExternal bg="cardBg" borderWidth="1px" borderColor="borderSubtle" p={3} borderRadius="full" _hover={{ bg: "cardHoverBg", transform: "translateY(-4px)", color: "brand.400" }} transition="all 0.3s" color="gray.400">
                  <FaGithub size={22} />
                </ChakraLink>
                <ChakraLink href="https://linkedin.com/in/srinadh-bejawada" isExternal bg="cardBg" borderWidth="1px" borderColor="borderSubtle" p={3} borderRadius="full" _hover={{ bg: "cardHoverBg", transform: "translateY(-4px)", color: "brand.400" }} transition="all 0.3s" color="gray.400">
                  <FaLinkedin size={22} />
                </ChakraLink>
                <ChakraLink href="#" isExternal bg="cardBg" borderWidth="1px" borderColor="borderSubtle" p={3} borderRadius="full" _hover={{ bg: "cardHoverBg", transform: "translateY(-4px)", color: "brand.400" }} transition="all 0.3s" color="gray.400">
                  <FaInstagram size={22} />
                </ChakraLink>
              </HStack>
            </Box>

            <Button
              onClick={scrollToTop}
              bg="brand.500"
              color="white"
              _hover={{ bg: "brand.400", transform: "translateY(-2px)", shadow: "md" }}
              size="lg"
              borderRadius="xl"
              mt={4}
              px={4}
              transition="all 0.3s"
            >
              <FaArrowUp />
            </Button>
          </VStack>

          {/* Right Column - Form */}
          <Box bg="panelBg" p={8} borderRadius="2xl" borderWidth="1px" borderColor={{ base: "gray.300", _dark: "borderSubtle" }} shadow={{ base: "2xl", _dark: "xl" }}>
            <VStack spacing={5} align="start">

              <Flex w="100%" align="center" bg="pageBg" borderRadius="xl" borderWidth="1px" borderColor="borderSubtle" _focusWithin={{ borderColor: "brand.500", shadow: "0 0 0 1px var(--chakra-colors-brand-500)" }} transition="all 0.2s">
                <Box p={4} color="gray.500" borderRightWidth="1px" borderColor="borderSubtle">
                  <FaUser />
                </Box>
                <Input
                  border="none"
                  _focus={{ outline: "none", boxShadow: "none" }}
                  placeholder="Fullname..."
                  p={4}
                  color="textBody"
                  fontSize="md"
                  _placeholder={{ color: "gray.500" }}
                />
              </Flex>

              <Flex w="100%" align="center" bg="pageBg" borderRadius="xl" borderWidth="1px" borderColor="borderSubtle" _focusWithin={{ borderColor: "brand.500", shadow: "0 0 0 1px var(--chakra-colors-brand-500)" }} transition="all 0.2s">
                <Box p={4} color="gray.500" borderRightWidth="1px" borderColor="borderSubtle">
                  <FaEnvelope />
                </Box>
                <Input
                  border="none"
                  _focus={{ outline: "none", boxShadow: "none" }}
                  placeholder="Email..."
                  p={4}
                  color="textBody"
                  fontSize="md"
                  _placeholder={{ color: "gray.500" }}
                />
              </Flex>

              <Flex w="100%" align="flex-start" bg="pageBg" borderRadius="xl" borderWidth="1px" borderColor="borderSubtle" _focusWithin={{ borderColor: "brand.500", shadow: "0 0 0 1px var(--chakra-colors-brand-500)" }} transition="all 0.2s">
                <Box p={4} color="gray.500" borderRightWidth="1px" borderColor="borderSubtle" mt={1}>
                  <FaEnvelope />
                </Box>
                <Textarea
                  border="none"
                  _focus={{ outline: "none", boxShadow: "none" }}
                  placeholder="Message..."
                  p={4}
                  minH="150px"
                  color="textBody"
                  fontSize="md"
                  _placeholder={{ color: "gray.500" }}
                />
              </Flex>

              <Button bg="brand.500" color="white" _hover={{ bg: "brand.400", transform: "translateY(-2px)", shadow: "lg" }} size="lg" px={10} mt={4} borderRadius="xl" fontWeight="semibold" transition="all 0.3s">
                Submit
              </Button>

            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
