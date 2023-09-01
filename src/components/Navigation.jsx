import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Flex align="center" mb={4} p={4} bg="teal.500" color="white">
      <Box>
        <Heading size="lg">My Events App</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button as={Link} to="/" colorScheme="teal" mr={4}>
          Events
        </Button>
        <Button as={Link} to="/event/1" colorScheme="teal">
          Event
        </Button>
      </Box>
    </Flex>
  );
};

export { Navigation };
