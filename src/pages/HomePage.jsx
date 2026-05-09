import { Box, Container, Flex, Heading, Text, VStack, HStack, Badge, SimpleGrid, Button, Link as ChakraLink, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PageShell } from "../components/common/PageShell";
import { FaBriefcase, FaCode, FaGraduationCap, FaServer, FaTools, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/B SRINADH.JPG";
import resumePdf from "../assets/Srinadh Bejawada.pdf";

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const doorVariant = {
  hidden: { y: "0%" },
  visible: { y: "-100%", transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.3 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function HomePage() {
  return (
    <PageShell>
      <Container maxW="container.xl" py={12}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>

          {/* Hero Section */}
          <motion.div variants={fadeInUp}>
            <Flex direction={{ base: "column", lg: "row" }} align="center" justify="space-between" mb={32} gap={12}>

              <Box flex="1" textAlign={{ base: "center", lg: "left" }} order={{ base: 2, lg: 1 }}>
                <Box p={1} mb={6} borderRadius="full" display="inline-block" bgGradient="to-r" gradientFrom="brand.400" gradientTo="purple.500">
                  <Box bg="cardBg" borderRadius="full" px={6} py={2}>
                    <Text color={{ base: "gray.800", _dark: "white" }} fontWeight="bold" fontSize="sm" letterSpacing="widest">
                      AI/ML & FULL STACK DEVELOPER
                    </Text>
                  </Box>
                </Box>

                <Heading as="h1" fontSize={{ base: "5xl", md: "7xl" }} fontWeight="extrabold" mb={6} lineHeight="shorter" letterSpacing="tight">
                  Hi, I'm <Text as="span" bgGradient="to-r" gradientFrom="brand.400" gradientTo="purple.500" bgClip="text">Srinadh Bejawada</Text>
                </Heading>

                <Text fontSize={{ base: "xl", md: "2xl" }} color="textMuted" maxW="3xl" mb={10} mx={{ base: "auto", lg: "0" }}>
                  A passionate Software Engineer specializing in building scalable RESTful APIs, robust microservices, and dynamic React frontends.
                </Text>

                <Flex direction={{ base: "column", sm: "row" }} align="center" justify={{ base: "center", lg: "flex-start" }} gap={8}>
                  <Button
                    as="a"
                    href={resumePdf}
                    download="Srinadh_Bejawada_Resume.pdf"
                    size="lg"
                    bg="brand.500"
                    color="white"
                    _hover={{ bg: "brand.400", transform: "translateY(-2px)", shadow: "lg" }}
                    transition="all 0.3s"
                    borderRadius="xl"
                    px={8}
                    py={7}
                    fontSize="lg"
                    fontWeight="semibold"
                  >
                    <HStack spacing={3}>
                      <Text>Download Resume</Text>
                      <FaDownload />
                    </HStack>
                  </Button>

                  <VStack align={{ base: "center", sm: "flex-start" }} spacing={3}>
                    <Text color="textMuted" fontWeight="medium" fontSize="sm" textTransform="uppercase" letterSpacing="wider">Check My Profiles</Text>
                    <HStack spacing={4}>
                      <ChakraLink href="https://github.com/srinadhchowdary" isExternal bg="cardBg" p={3} borderRadius="full" borderWidth="1px" borderColor="borderSubtle" shadow="sm" _hover={{ bg: "cardHoverBg", transform: "translateY(-4px)", color: "brand.400", shadow: "md" }} transition="all 0.3s" color="textBody">
                        <FaGithub size={24} />
                      </ChakraLink>
                      <ChakraLink href="https://www.linkedin.com/in/srinadh-bejawada/" isExternal bg="cardBg" p={3} borderRadius="full" borderWidth="1px" borderColor="borderSubtle" shadow="sm" _hover={{ bg: "cardHoverBg", transform: "translateY(-4px)", color: "brand.400", shadow: "md" }} transition="all 0.3s" color="textBody">
                        <FaLinkedin size={24} />
                      </ChakraLink>
                    </HStack>
                  </VStack>
                </Flex>
              </Box>

              <Box flex={{ base: "none", lg: "0 0 400px" }} w={{ base: "280px", md: "400px" }} order={{ base: 1, lg: 2 }} position="relative">

                <Box position="relative" borderRadius="full" padding="2" bgGradient="to-bl" gradientFrom="brand.400" gradientTo="purple.500" shadow="2xl">
                  <Box overflow="hidden" borderRadius="full" bg="cardBg" aspectRatio="1/1" position="relative">
                    <motion.div
                      variants={doorVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#8B5CF6",
                        zIndex: 10
                      }}
                    />
                    <Image src={profileImage} alt="Srinadh Bejawada" objectFit="cover" w="100%" h="100%" />
                  </Box>
                </Box>
              </Box>

            </Flex>
          </motion.div>

          {/* Education Parent Container */}
          <motion.div variants={slideInLeft}>
            <Box mb={24} bg="panelBg" p={{ base: 6, md: 10, lg: 12 }} borderRadius="3xl" shadow="xl" borderWidth="1px" borderColor="borderSubtle">
              <HStack mb={10}>
                <Box p={3} borderRadius="xl" bg="purple.500" color="white" shadow="md">
                  <FaGraduationCap size={24} />
                </Box>
                <Heading size="xl" fontWeight="bold">Education</Heading>
              </HStack>

              {/* Child Card */}
              <Box p={{ base: 6, md: 8 }} borderRadius="2xl" bg="cardBg" borderWidth="1px" borderColor="borderSubtle" shadow="sm" _hover={{ shadow: "md", borderColor: "purple.400", transform: "translateY(-2px)" }} transition="all 0.3s">
                <Flex justify="space-between" align={{ base: "flex-start", md: "center" }} direction={{ base: "column", md: "row" }}>
                  <Box>
                    <Heading size="lg" mb={2}>KL University</Heading>
                    <Text color="textBody" fontSize="lg">Bachelor of Technology in Computer Science & Engineering (AI/ML)</Text>
                  </Box>
                  <VStack align={{ base: "flex-start", md: "flex-end" }} mt={{ base: 5, md: 0 }} spacing={2}>
                    <Badge colorScheme="purple" fontSize="md" px={4} py={1.5} borderRadius="full" fontWeight="bold">CGPA: 9.55</Badge>
                    <Text color="textMuted" fontWeight="medium">August 2021 – May 2025</Text>
                    <Text color="textMuted" fontSize="sm">Vijayawada, Andhra Pradesh</Text>
                  </VStack>
                </Flex>
              </Box>
            </Box>
          </motion.div>

          {/* Experience Parent Container */}
          <motion.div variants={slideInRight}>
            <Box mb={24} bg="panelBg" p={{ base: 6, md: 10, lg: 12 }} borderRadius="3xl" shadow="xl" borderWidth="1px" borderColor="borderSubtle">
              <HStack mb={10}>
                <Box p={3} borderRadius="xl" bg="brand.500" color="white" shadow="md">
                  <FaBriefcase size={24} />
                </Box>
                <Heading size="xl" fontWeight="bold">Experience</Heading>
              </HStack>
              <VStack spacing={6} align="stretch">

                {/* Child Card 1 */}
                <Box p={{ base: 6, md: 8 }} borderRadius="2xl" bg="cardBg" borderWidth="1px" borderColor="borderSubtle" shadow="sm" _hover={{ shadow: "md", borderColor: "brand.400", transform: "translateY(-2px)" }} transition="all 0.3s">
                  <Flex justify="space-between" align={{ base: "flex-start", md: "center" }} direction={{ base: "column", md: "row" }} mb={6} pb={6} borderBottomWidth="1px" borderColor="borderSubtle">
                    <Box>
                      <Heading size="lg" mb={2}>Software Trainee Engineer</Heading>
                      <Text color="brand.400" fontWeight="bold" fontSize="lg">AZENTIO SOFTWARE PVT LTD</Text>
                    </Box>
                    <VStack align={{ base: "flex-start", md: "flex-end" }} mt={{ base: 4, md: 0 }} spacing={1}>
                      <Text color="textBody" fontWeight="medium">August 2025 – Present</Text>
                      <Text color="textMuted" fontSize="sm">Bengaluru, India</Text>
                    </VStack>
                  </Flex>
                  <VStack align="flex-start" spacing={4} color="textBody" fontSize="md">
                    <Text>• Engineered scalable RESTful APIs for digital banking systems using Spring Boot, enabling seamless integration with web and mobile client applications.</Text>
                    <Text>• Developed a full-stack performance testing platform using React and Spring Boot to execute automated and on-demand load tests, identify bottlenecks, and generate actionable insights.</Text>
                    <Text>• Analyzed and resolved performance bottlenecks in core and digital banking applications, improving system throughput and ensuring adherence to client SLAs.</Text>
                    <Text>• Implemented code coverage and quality analysis using JaCoCo, improving test coverage and maintaining high code reliability standards.</Text>
                  </VStack>
                </Box>

                {/* Child Card 2 */}
                <Box p={{ base: 6, md: 8 }} borderRadius="2xl" bg="cardBg" borderWidth="1px" borderColor="borderSubtle" shadow="sm" _hover={{ shadow: "md", borderColor: "brand.400", transform: "translateY(-2px)" }} transition="all 0.3s">
                  <Flex justify="space-between" align={{ base: "flex-start", md: "center" }} direction={{ base: "column", md: "row" }} mb={6} pb={6} borderBottomWidth="1px" borderColor="borderSubtle">
                    <Box>
                      <Heading size="lg" mb={2}>Software Engineer Intern</Heading>
                      <Text color="brand.400" fontWeight="bold" fontSize="lg">AZENTIO SOFTWARE PVT LTD</Text>
                    </Box>
                    <VStack align={{ base: "flex-start", md: "flex-end" }} mt={{ base: 4, md: 0 }} spacing={1}>
                      <Text color="textBody" fontWeight="medium">November 2024 – August 2025</Text>
                      <Text color="textMuted" fontSize="sm">Bengaluru, India</Text>
                    </VStack>
                  </Flex>
                  <VStack align="flex-start" spacing={4} color="textBody" fontSize="md">
                    <Text>• Designed and developed a cross-product automation dashboard using Spring Boot, React, AWS, and MongoDB, enabling real-time test monitoring and instant failure alerts.</Text>
                    <Text>• Built and maintained a UI automation framework using Playwright, TestNG, and Maven, integrating Allure Reports for detailed test reporting and analysis.</Text>
                    <Text>• Performed performance analysis of core banking systems, identifying UI and database inefficiencies and implementing optimizations to reduce latency.</Text>
                    <Text>• Automated Docker-based deployments using shell scripting and Bitbucket Pipelines, enabling efficient CI/CD workflows and minimizing downtime.</Text>
                  </VStack>
                </Box>

              </VStack>
            </Box>
          </motion.div>

          {/* Skills Parent Container */}
          <motion.div variants={slideInLeft}>
            <Box mb={16} bg="panelBg" p={{ base: 6, md: 10, lg: 12 }} borderRadius="3xl" shadow="xl" borderWidth="1px" borderColor="borderSubtle">
              <HStack mb={10}>
                <Box p={3} borderRadius="xl" bg="teal.500" color="white" shadow="md">
                  <FaCode size={24} />
                </Box>
                <Heading size="xl" fontWeight="bold">Technical Skills</Heading>
              </HStack>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>

                {/* Child Card 1 */}
                <Box p={8} borderRadius="2xl" bg="cardBg" borderWidth="1px" borderColor="borderSubtle" shadow="sm" _hover={{ shadow: "md", borderColor: "teal.400", transform: "translateY(-2px)" }} transition="all 0.3s">
                  <HStack mb={6} color="teal.400" pb={4} borderBottomWidth="1px" borderColor="borderSubtle">
                    <FaCode size={20} />
                    <Heading size="md">Programming & Frontend</Heading>
                  </HStack>
                  <Flex wrap="wrap" gap={3}>
                    {["Java", "Python", "SQL", "React.js"].map(skill => (
                      <Badge key={skill} colorScheme="teal" variant="subtle" px={4} py={1.5} borderRadius="md" fontSize="sm">{skill}</Badge>
                    ))}
                  </Flex>
                </Box>

                {/* Child Card 2 */}
                <Box p={8} borderRadius="2xl" bg="cardBg" borderWidth="1px" borderColor="borderSubtle" shadow="sm" _hover={{ shadow: "md", borderColor: "orange.400", transform: "translateY(-2px)" }} transition="all 0.3s">
                  <HStack mb={6} color="orange.400" pb={4} borderBottomWidth="1px" borderColor="borderSubtle">
                    <FaServer size={20} />
                    <Heading size="md">Backend & Databases</Heading>
                  </HStack>
                  <Flex wrap="wrap" gap={3}>
                    {["Spring Boot", "Microservices", "MySQL", "PostgreSQL", "MongoDB"].map(skill => (
                      <Badge key={skill} colorScheme="orange" variant="subtle" px={4} py={1.5} borderRadius="md" fontSize="sm">{skill}</Badge>
                    ))}
                  </Flex>
                </Box>

                {/* Child Card 3 */}
                <Box p={8} borderRadius="2xl" bg="cardBg" borderWidth="1px" borderColor="borderSubtle" shadow="sm" _hover={{ shadow: "md", borderColor: "brand.400", transform: "translateY(-2px)" }} transition="all 0.3s">
                  <HStack mb={6} color="brand.400" pb={4} borderBottomWidth="1px" borderColor="borderSubtle">
                    <FaTools size={20} />
                    <Heading size="md">Tools & Automation</Heading>
                  </HStack>
                  <Flex wrap="wrap" gap={3}>
                    {["AWS", "Docker", "Git", "Postman", "Linux", "Playwright", "TestNG", "GEN-AI"].map(skill => (
                      <Badge key={skill} colorScheme="blue" variant="subtle" px={4} py={1.5} borderRadius="md" fontSize="sm">{skill}</Badge>
                    ))}
                  </Flex>
                </Box>

              </SimpleGrid>
            </Box>
          </motion.div>

        </motion.div>
      </Container>
    </PageShell>
  );
}
