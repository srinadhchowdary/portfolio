import {
  Box,
  Container,
  Flex,
  HStack,
  ChakraProvider,
  IconButton,
  Link as ChakraLink,
  Stack,
  Text
} from "@chakra-ui/react";

import { useState } from "react";

import {
  Link as RouterLink,
  NavLink
} from "react-router-dom";

import {
  FiMenu,
  FiX
} from "react-icons/fi";

import {
  FaCode,
  FaToggleOff,
  FaToggleOn
} from "react-icons/fa";

import { NAV_ITEMS } from "../../constants/navigation";

import { useColorMode } from "../common/ColorModeProvider";

function DesktopNav() {
  return (
    <HStack
      as="nav"
      gap={6}
      display={{ base: "none", md: "flex" }}
    >
      {NAV_ITEMS.map((item) => (
        <ChakraLink
          key={item.to}
          as={NavLink}
          to={item.to}
          px={2}
          py={2}
          fontWeight="medium"
          color={{
            base: "gray.600",
            _dark: "gray.400"
          }}
          position="relative"
          _activeLink={{
            color: {
              base: "gray.900",
              _dark: "white"
            },
            _after: {
              transform: "scaleX(1)",
              transformOrigin: "bottom left"
            }
          }}
          _hover={{
            color: {
              base: "gray.900",
              _dark: "white"
            },
            textDecoration: "none",
            _after: {
              transform: "scaleX(1)",
              transformOrigin: "bottom left"
            }
          }}
          _after={{
            content: '""',
            position: "absolute",
            width: "100%",
            transform: "scaleX(0)",
            height: "2px",
            bottom: "0",
            left: "0",
            bg: "brand.400",
            transformOrigin: "bottom right",
            transition:
              "transform 0.3s ease-out"
          }}
          transition="color 0.2s"
        >
          {item.label}
        </ChakraLink>
      ))}
    </HStack>
  );
}

function MobileNav({ onNavigate }) {
  return (
    <Stack
      as="nav"
      gap={1}
      display={{ base: "flex", md: "none" }}
      pb={4}
      pt={2}
    >
      {NAV_ITEMS.map((item) => (
        <ChakraLink
          key={item.to}
          as={NavLink}
          to={item.to}
          onClick={onNavigate}
          px={4}
          py={3}
          borderRadius="lg"
          fontWeight="medium"
          color={{
            base: "gray.600",
            _dark: "gray.400"
          }}
          _activeLink={{
            color: {
              base: "gray.900",
              _dark: "white"
            },
            bg: {
              base: "gray.200",
              _dark: "whiteAlpha.100"
            }
          }}
          _hover={{
            color: {
              base: "gray.900",
              _dark: "white"
            },
            textDecoration: "none",
            bg: {
              base: "gray.100",
              _dark: "whiteAlpha.50"
            }
          }}
          transition="all 0.2s"
        >
          {item.label}
        </ChakraLink>
      ))}
    </Stack>
  );
}

export function Navbar() {
  const [isMenuOpen, setMenuOpen] =
    useState(false);

  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg={{
        base:
          "rgba(255, 255, 255, 0.85)",
        _dark:
          "rgba(11, 13, 20, 0.85)"
      }}
      borderBottomWidth="1px"
      borderColor="borderSubtle"
      backdropFilter="saturate(180%) blur(12px)"
      transition="all 0.3s ease"
    >
      <Container
        maxW="container.xl"
        px={{ base: 4, md: 8 }}
      >
        <Flex
          minH={20}
          align="center"
          justify="space-between"
        >
          {/* Logo */}
          <ChakraLink
            as={RouterLink}
            to="/"
            fontWeight="extrabold"
            fontSize="2xl"
            letterSpacing="tight"
            _hover={{
              textDecoration: "none"
            }}
          >
            <HStack
              spacing={2}
              align="center"
            >
              <FaCode
                size={28}
                color="#A78BFA"
              />

              <Text
                as="span"
                bgGradient="to-r"
                gradientFrom="brand.400"
                gradientTo="purple.500"
                bgClip="text"
              >
                Srinadh
              </Text>
            </HStack>
          </ChakraLink>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Side */}
          <HStack spacing={3}>
            {/* Theme Toggle */}
            <Box
              onClick={toggleColorMode}
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
              borderRadius="full"
              bg={{
                base: "gray.200",
                _dark:
                  "whiteAlpha.200"
              }}
              _hover={{
                transform:
                  "scale(1.08)",
                bg: {
                  base: "gray.300",
                  _dark:
                    "whiteAlpha.300"
                }
              }}
              transition="all 0.2s ease"
            >
              {colorMode ===
                "light" ? (
                <FaToggleOff
                  size={34}
                  color="#4A5568"
                />
              ) : (
                <FaToggleOn
                  size={34}
                  color="#F6E05E"
                />
              )}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              display={{
                base:
                  "inline-flex",
                md: "none"
              }}
              onClick={() =>
                setMenuOpen(
                  (prev) => !prev
                )
              }
              aria-label={
                isMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              variant="ghost"
              color={{
                base: "gray.800",
                _dark: "white"
              }}
              _hover={{
                bg: {
                  base: "gray.100",
                  _dark:
                    "whiteAlpha.100"
                }
              }}
            >
              {isMenuOpen ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </IconButton>
          </HStack>
        </Flex>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <MobileNav
            onNavigate={() =>
              setMenuOpen(false)
            }
          />
        )}
      </Container>
    </Box>
  );
}