import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Box, Container, Center } from '@chakra-ui/react';

const Root = () => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      <Navigation />
      <Container maxW="container.lg" py={8}>
        <Center>
          <Box w="100%" bg="white" boxShadow="lg" p={4} borderRadius="md">
            <Outlet />
          </Box>
        </Center>
      </Container>
    </Box>
  );
};

export { Root };
