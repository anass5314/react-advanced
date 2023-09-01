import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Image, Text, Box, Button, useToast, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { fetchEvent } from '../components/api';

export const EventPage = () => {
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { eventId } = useParams();
  const toast = useToast();

  useEffect(() => {
    setIsLoading(true);
    fetchEvent(eventId)
      .then((data) => {
        setEvent(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [eventId]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!event) {
    return <Text>No event found!</Text>;
  }

  return (
    <VStack spacing={8}>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        width="100%"
        maxW="500px"
      >
        <Image boxSize="500px" src={event.image} alt={event.title} />
        <Heading mt={4}>{event.title}</Heading>
        <Text>{event.description}</Text>
        <Text mt={2}>Start: {event.startTime}</Text>
        <Text>End: {event.endTime}</Text>
        <Button
          colorScheme="teal"
          mt={4}
          onClick={() => {
            toast({
              title: "Feature in development.",
              description: "Editing feature coming soon.",
              status: "info",
              duration: 5000,
              isClosable: true,
            });
          }}
        >
          Edit
        </Button>
        <Button
          colorScheme="red"
          mt={4}
          onClick={() => {
            toast({
              title: "Feature in development.",
              description: "Delete feature coming soon.",
              status: "info",
              duration: 5000,
              isClosable: true,
            });
          }}
        >
          Delete
        </Button>
      </Box>
    </VStack>
  );
};

EventPage.propTypes = {
  eventId: PropTypes.string.isRequired,
};
