// API.js
const API_URL = "http://localhost:3000";

export const fetchEvents = () =>
  fetch(`${API_URL}/events`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching events:", error);
      throw error;
    });

export const fetchEvent = (id) =>
  fetch(`${API_URL}/events/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching event:", error);
      throw error;
    });

export const createEvent = (data) =>
  fetch(`${API_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error creating event:", error);
      throw error;
    });

export const updateEvent = (id, data) =>
  fetch(`${API_URL}/events/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error updating event:", error);
      throw error;
    });

export const deleteEvent = (id) =>
  fetch(`${API_URL}/events/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error deleting event:", error);
      throw error;
    });
