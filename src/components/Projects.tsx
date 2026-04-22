import React from 'react'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack, 
  HStack, 
  Link, 
  Icon,
  Badge
} from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa';



interface Project {
  title: string;
  description: string;
  tags: string[];
  icons: React.ElementType[];
  githubLink: string;
  liveLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Wanderlust (airbnb clone)',
      description: 'Full-stack Airbnb-style platform with secure authentication, REST APIs, and complete CRUD functionality. Built using Node.js, Express, and MongoDB with a responsive and user-friendly interface.',
      tags: ['Node.js', 'Express','MongoDB'],
      icons: [SiExpress,SiMongodb,FaNodeJs ], 
      githubLink: 'https://github.com/sasabuz/MAJORPROJECT',
      liveLink: 'https://majorproject-6o5x.onrender.com/listings'
    },
    
  ]

  return (
    <Container maxW="1200px" py={16}>
      <VStack gap={12}>
        <Heading size="xl" data-aos="fade-up">
          My Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
          {projects.map((project, index) => (
            <Box
              key={project.title}
              p={6}
              shadow="lg"
              borderRadius="xl"
              borderWidth="1px"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              _hover={{
                transform: 'translateY(-5px)',
                transition: 'transform 0.2s',
                shadow: 'xl',
              }}
            >
              <VStack align="flex-start" gap={4}>
                <Heading size="lg" color="blue.500">
                  {project.title}
                </Heading>
                <Text color="gray.600">{project.description}</Text>
                <HStack gap={2} flexWrap="wrap">
                  {project.tags.map((tag) => (
                    <Badge key={tag} colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
                      {tag}
                    </Badge>
                  ))}
                </HStack>
                <HStack gap={4}>
                  {project.icons.map((IconComponent, i) => (
                    <Link key={i} href="#" color="gray.600" _hover={{ color: 'blue.500' }}>
                      <HStack>
                        <Icon as={IconComponent} boxSize={6} color="blue.500" />
                      </HStack>
                    </Link>
                  ))}
                </HStack>
                <HStack gap={4}>
                  <Link href={project.githubLink} color="gray.600" _hover={{ color: 'blue.500' }}>
                    <HStack>
                      <Icon as={FaGithub} />
                      <Text>Source Code</Text>
                    </HStack>
                  </Link>
                  {project.liveLink && (
                    <Link href={project.liveLink} color="gray.600" _hover={{ color: 'blue.500' }}>
                      <HStack>
                        <Icon as={FaExternalLinkAlt} />
                        <Text>Live Demo</Text>
                      </HStack>
                    </Link>
                  )}
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Projects 