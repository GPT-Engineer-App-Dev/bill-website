import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";

const Philanthropy = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Philanthropy
      </Heading>

      <Box mb={12}>
        <Heading as="h2" size="xl" mb={4}>
          Clinton Foundation
        </Heading>
        <Text fontSize="lg" mb={6}>
          The Clinton Foundation builds partnerships between businesses, NGOs, governments, and individuals to transform lives and communities. Its mission is to create economic opportunity, improve public health, and inspire civic engagement and service.
        </Text>
        <Image src="clinton-foundation1.jpg" alt="Clinton Foundation work" mb={4} />
        <Image src="clinton-foundation2.jpg" alt="Clinton Foundation work" />
      </Box>

      <VStack spacing={12} align="start">
        <Box>
          <Heading as="h3" size="lg" mb={2}>
            Clinton Health Access Initiative
          </Heading>
          <Text fontSize="lg" mb={4}>
            CHAI works to strengthen health systems and expand access to lifesaving treatment for HIV/AIDS, malaria, and other illnesses.
          </Text>
          <Image src="chai.jpg" alt="Clinton Health Access Initiative" />
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={2}>
            Clinton Climate Initiative
          </Heading>
          <Text fontSize="lg" mb={4}>
            CCI collaborates with governments and partners to increase the resiliency of communities facing climate change.
          </Text>
          <Image src="cci.jpg" alt="Clinton Climate Initiative" />
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={2}>
            Clinton Development Initiative
          </Heading>
          <Text fontSize="lg" mb={4}>
            CDI creates and implements programs that help farming communities in Africa increase their economic potential.
          </Text>
          <Image src="cdi.jpg" alt="Clinton Development Initiative" />
        </Box>
      </VStack>

      <Box mt={16}>
        <Heading as="h2" size="xl" mb={4}>
          Other Philanthropic Work
        </Heading>
        <Text fontSize="lg">In addition to his work with the Clinton Foundation, President Clinton has supported numerous other charitable causes over the years. He has raised funds for victims of natural disasters, advocated for human rights, and received the Presidential Medal of Freedom for his philanthropic leadership.</Text>
      </Box>
    </Box>
  );
};

export default Philanthropy;
