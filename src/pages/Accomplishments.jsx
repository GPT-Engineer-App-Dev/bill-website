import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";

const Accomplishments = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={4}>
        Accomplishments
      </Heading>
      <Text fontSize="xl" mb={8}>
        Highlights of Bill Clinton's major achievements during his presidency.
      </Text>

      <VStack spacing={8} align="start">
        <Box>
          <Heading as="h2" size="xl" mb={2}>
            Balanced the Federal Budget
          </Heading>
          <Text fontSize="lg">Clinton worked with Congress to balance the federal budget for the first time in decades, leading to budget surpluses.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2}>
            Crime and Gun Control Legislation
          </Heading>
          <Text fontSize="lg">Signed major crime bill and gun control measures, including the Brady Bill and assault weapons ban.</Text>
          <Image src="brady-bill-signing.jpg" alt="Clinton signs the Brady Bill" mt={4} />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2}>
            International Peacemaking
          </Heading>
          <Text fontSize="lg">Brokered peace agreements in Northern Ireland and the Middle East, including the Oslo Accords between Israel and Palestine.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2}>
            Expanded International Trade
          </Heading>
          <Text fontSize="lg">Signed NAFTA and other free trade agreements to expand international commerce and grow the U.S. economy.</Text>
          <Image src="nafta-signing.jpg" alt="Clinton signs NAFTA" mt={4} />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={2}>
            Economic Expansion
          </Heading>
          <Text fontSize="lg">Oversaw the longest peacetime economic expansion in American history, with over 22 million new jobs created.</Text>
          <Image src="90s-economy-chart.jpg" alt="Chart of 1990s economic growth" mt={4} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Accomplishments;
