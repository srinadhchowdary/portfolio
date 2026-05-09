import { Box, Container, Heading, Text, SimpleGrid, Flex, HStack, Badge, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PageShell } from "../components/common/PageShell";
import { FaGithub, FaFolderOpen } from "react-icons/fa";

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

const projects = [
  {
    title: "Social Media Application",
    tech: ["Spring Boot", "React", "PostgreSQL", "WebSockets"],
    description: [
      "Engineered a full-stack social media platform supporting real-time communication using WebSockets.",
      "Developed scalable backend services with Spring Boot and PostgreSQL to manage users, posts, and interactions.",
      "Designed responsive user interfaces using React to enable seamless user engagement and real-time updates."
    ],
    github: "https://github.com/srinadhchowdary/Full-Stack-Social-Media-Application"
  },
  {
    title: "Food Delivery Application",
    tech: ["Spring Boot", "React", "MongoDB", "AWS S3", "Spring Security", "JWT"],
    description: [
      "Developed a full-stack food delivery platform with secure authentication and role-based access using Spring Security and JWT.",
      "Built RESTful APIs using Spring Boot and integrated them with a React frontend for seamless user experience.",
      "Utilized MongoDB for data storage and AWS S3 for handling media uploads such as product images."
    ],
    github: "https://github.com/srinadhchowdary/FoodDeliveryApplication"
  },
  {
    title: "Academic Project Management System",
    tech: ["Spring Boot", "Microservices"],
    description: [
      "Developed a microservices-based academic project management system to streamline task tracking and collaboration.",
      "Implemented RESTful APIs for inter-service communication, ensuring scalability and maintainability."
    ],
    github: "https://github.com/srinadhchowdary/AcademicProjectMangementSytem"
  }
];

export function ProjectsPage() {
  return (
    <PageShell>
      <Container maxW="container.xl" py={10}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>

          <motion.div variants={fadeInUp}>
            <Box mb={16} textAlign="center">
              <Heading as="h1" size="2xl" mb={4} bgGradient="to-r" gradientFrom="brand.400" gradientTo="purple.500" bgClip="text" letterSpacing="tight">
                Featured Projects
              </Heading>
              <Text color="textMuted" fontSize="xl" maxW="2xl" mx="auto">
                A selection of my recent work focusing on scalable backends and dynamic frontends.
              </Text>
            </Box>
          </motion.div>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacingX={12}
            spacingY={12}
            px={{ base: 2, md: 4, lg: 6 }}
            py={4}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                style={{
                  width: "100%",
                  padding: "8px"
                }}
              >
                <Box
                  h="100%"
                  p={10}
                  borderRadius="2xl"
                  bg="cardBg"
                  borderWidth="1px"
                  borderColor="borderSubtle"
                  shadow="lg"
                  _hover={{
                    borderColor: "brand.400",
                    transform: "translateY(-6px)",
                    shadow: "2xl"
                  }}
                  transition="all 0.3s ease"
                  display="flex"
                  flexDirection="column"
                >
                  <Flex justify="space-between" align="center" mb={6}>
                    <Box
                      p={3}
                      borderRadius="lg"
                      bg="pageBg"
                      color="brand.400"
                      shadow="sm"
                    >
                      <FaFolderOpen size={24} />
                    </Box>

                    <HStack spacing={4}>
                      <Link
                        href={project.github}
                        isExternal
                        color="textMuted"
                        _hover={{ color: "brand.400" }}
                        transition="color 0.2s"
                      >
                        <FaGithub size={24} />
                      </Link>
                    </HStack>
                  </Flex>

                  <Heading size="lg" mb={4}>
                    {project.title}
                  </Heading>

                  <VStack
                    align="start"
                    spacing={3}
                    color="textBody"
                    mb={8}
                    flex="1"
                  >
                    {project.description.map((desc, i) => (
                      <Text key={i} fontSize="md">
                        • {desc}
                      </Text>
                    ))}
                  </VStack>

                  <Flex wrap="wrap" gap={2} mt="auto">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        colorScheme="brand"
                        variant="subtle"
                        px={3}
                        py={1.5}
                        borderRadius="md"
                        fontSize="sm"
                      >
                        {tech}
                      </Badge>
                    ))}
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
