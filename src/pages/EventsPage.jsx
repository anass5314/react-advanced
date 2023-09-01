import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  VStack,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  Text,
} from "@chakra-ui/react";
import { fetchEvents, createEvent } from "../components/api";

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    image: "",
    startTime: "",
    endTime: "",
    categories: [],
  });

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  const handleInputChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setNewEvent({ ...newEvent, categories: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdEvent = await createEvent(newEvent);
      setEvents([...events, createdEvent]);
      alert("Event created successfully!");
      setNewEvent({
        title: "",
        description: "",
        image: "",
        startTime: "",
        endTime: "",
        categories: [],
      });
    } catch (error) {
      alert("An error occurred while creating the event.");
    }
  };

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
        <Heading>List of events</Heading>
        {events.map((event) => (
          <Box
            key={event.id}
            p={5}
            mt={5}
            shadow="sm"
            borderWidth="1px"
            borderRadius="md"
          >
            <Link to={`/event/${event.id}`}>
              <Text fontSize="xl">{event.title}</Text>
            </Link>
            <Text>{event.description}</Text>
            <Text>
              {event.startTime} - {event.endTime}
            </Text>
            <Text>
              Categories:{" "}
              {event.categories ? event.categories.join(", ") : "None"}
            </Text>
          </Box>
        ))}

        <Heading mt={10}>Add new event</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="title" isRequired>
            <FormLabel>Event title</FormLabel>
            <Input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              placeholder="Event title"
            />
          </FormControl>
          <FormControl id="description" isRequired>
            <FormLabel>Event description</FormLabel>
            <Input
              type="text"
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              placeholder="Event description"
            />
          </FormControl>
          <FormControl id="startTime" isRequired>
            <FormLabel>Start Time</FormLabel>
            <Input
              type="datetime-local"
              name="startTime"
              value={newEvent.startTime}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="endTime" isRequired>
            <FormLabel>End Time</FormLabel>
            <Input
              type="datetime-local"
              name="endTime"
              value={newEvent.endTime}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="categories">
            <FormLabel>Categories</FormLabel>
            <Select
              multiple={true}
              value={newEvent.categories}
              onChange={handleCategoryChange}
            >
              {/* Add your category options here */}
            </Select>
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Add event
          </Button>
        </form>
      </Box>
    </VStack>
  );
};
