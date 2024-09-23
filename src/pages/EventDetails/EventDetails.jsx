import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();
  console.log(eventId);

  useEffect(() => {
    fetch(`https://eliftech-test-task-nxs9.onrender.com/events/${eventId}`)
      .then((response) => response.json())
      .then((item) => setEvent(item.data));
  }, [eventId]);

console.log(event);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div className="event-details">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>
        <strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Organizer:</strong> {event.organizer}
      </p>
      {event.location && (
        <p>
          <strong>Location:</strong> {event.location}
        </p>
      )}
      <button onClick={() => navigate(`/register/${eventId}`)}>Register</button>
    </div>
  );
};

export default EventDetails;