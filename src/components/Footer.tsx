import { Box, Container, Stack, Text, IconButton, HStack, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/sasabuz',
      label: 'GitHub Profile'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/md-samiul-alam-sabuz-6b534321a/?skipRedirect=true',
      label: 'LinkedIn Profile'
    }
  ]

  return (
    <Box bg="gray.50" py={8}>
      <Container maxW="1200px">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="space-between"
          align="center"
        >
          <Text color="gray.600">© 2025 Portfolio. All rights reserved.</Text>
          <HStack spacing={4}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                as={Link}
                href={social.href}
                isExternal
                aria-label={social.label}
                icon={<social.icon fontSize="25px" />}
                //boxSize={12} 
                size="md"
                colorScheme="gray"
                variant="ghost"
                _hover={{
                  color: 'blue.500',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer 