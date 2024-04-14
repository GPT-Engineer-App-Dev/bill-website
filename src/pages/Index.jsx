import { Box, VStack, HStack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="white">
      <Box bg="navy" py={4}>
        <HStack justify="space-between" maxW="6xl" mx="auto" px={6}>
          <Heading as="h1" color="white" size="lg">
            Bill Clinton
          </Heading>
          <HStack spacing={8}>
            <Button variant="ghost" color="white" _hover={{ bg: "whiteAlpha.200" }}>
              Accomplishments
            </Button>
            <Button variant="ghost" color="white" _hover={{ bg: "whiteAlpha.200" }}>
              Philanthropy
            </Button>
            <Button variant="ghost" color="white" _hover={{ bg: "whiteAlpha.200" }}>
              Speaking
            </Button>
            <Button variant="ghost" color="white" _hover={{ bg: "whiteAlpha.200" }}>
              Contact
            </Button>
          </HStack>
        </HStack>
      </Box>

      <VStack maxW="4xl" mx="auto" py={20} px={6} spacing={8}>
        <Image borderRadius="full" boxSize="200px" objectFit="cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaWxsJTIwY2xpbnRvbiUyMGhlYWRzaG90fGVufDB8fHx8MTcxMzA3MDc3MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Bill Clinton headshot" />
        <VStack spacing={3} textAlign="center">
          <Heading as="h2" size="xl">
            William Jefferson Clinton
          </Heading>
          <Text fontSize="xl">42nd President of the United States from 1993 to 2001. Founder of the Clinton Foundation. Dedicated to building a more peaceful, equitable world through public service.</Text>
        </VStack>
      </VStack>

      <Box as="footer" bg="navy" py={10} color="white">
        <VStack maxW="6xl" mx="auto" spacing={3}>
          <HStack spacing={6}>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </HStack>
          <Text>&copy; 2023 Bill Clinton. All rights reserved.</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
