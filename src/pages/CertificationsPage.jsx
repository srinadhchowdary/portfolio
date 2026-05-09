import { Box, Container, Heading, Text, SimpleGrid, Flex, VStack, Icon, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PageShell } from "../components/common/PageShell";
import { FaAws, FaJava, FaRedhat, FaExternalLinkAlt } from "react-icons/fa";

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const certifications = [
  {
    name: "AWS Cloud Practitioner",
    icon: FaAws,
    color: "orange.400",
    link: "https://www.credly.com/badges/fc7ba566-7a13-4eea-a8a8-d0a5d84f19a9/public_url"
  },
  {
    name: "AWS Developer Associate",
    icon: FaAws,
    color: "orange.400",
    link: "https://www.credly.com/badges/7c910591-c0aa-40aa-bf63-3c5e4c42ab15/public_url"
  },
  {
    name: "Java Certification",
    icon: FaJava,
    color: "blue.400",
    link: "https://www.hackerrank.com/certificates/0213530921e3"
  },
  {
    name: "Red Hat Enterprise Developer",
    icon: FaRedhat,
    color: "red.500",
    link: "https://www.credly.com/badges/e19d9117-0e69-4eca-9574-971ceee4ad45/public_url"
  }
];

export function CertificationsPage() {
  return (
    <PageShell>
      <Container maxW="container.xl" py={10}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>

          <motion.div variants={fadeInUp}>
            <Box mb={16} textAlign="center">
              <Heading as="h1" size="2xl" mb={4} bgGradient="to-r" gradientFrom="brand.400" gradientTo="purple.500" bgClip="text" letterSpacing="tight">
                Certifications
              </Heading>
              <Text color="textMuted" fontSize="xl" maxW="2xl" mx="auto">
                Professional certifications demonstrating my expertise in cloud technologies and software development.
              </Text>
            </Box>
          </motion.div>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="4xl" mx="auto">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={index % 2 === 0 ? slideInLeft : slideInRight}>
                <Box
                  p={6}
                  borderRadius="2xl"
                  bg="cardBg"
                  borderWidth="1px"
                  borderColor="borderSubtle"
                  shadow="md"
                  _hover={{ borderColor: "brand.400", transform: "translateY(-4px)", shadow: "xl" }}
                  transition="all 0.3s"
                  margin={3}
                >
                  <Flex align="center" justify="space-between">
                    <Flex align="center">
                      <Box p={4} borderRadius="xl" bg="pageBg" color={cert.color} mr={6} shadow="sm">
                        <Icon as={cert.icon} boxSize={8} />
                      </Box>
                      <VStack align="start" spacing={1}>
                        <Heading size="md">{cert.name}</Heading>
                        <Text color="textMuted" fontSize="sm" fontWeight="medium">Verified Achievement</Text>
                      </VStack>
                    </Flex>
                    <Link href={cert.link} isExternal color="textMuted" _hover={{ color: "brand.400", transform: "scale(1.1)" }} transition="all 0.2s" p={2}>
                      <FaExternalLinkAlt size={20} />
                    </Link>
                  </Flex>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </PageShell>
  );
}
