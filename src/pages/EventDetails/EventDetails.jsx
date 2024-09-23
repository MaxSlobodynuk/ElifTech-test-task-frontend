import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./EventDetails.module.css";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://eliftech-test-task-ltfm.onrender.com/events/${eventId}`)
      .then((response) => response.json())
      .then((item) => setEvent(item.data));
  }, [eventId]);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.eventDetails}>
      <h1 className={styles.title}>{event.title}</h1>
      <p className={styles.description}>{event.description}</p>
      <p className={styles.info}>
        <strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}
      </p>
      <p className={styles.info}>
        <strong>Organizer:</strong> {event.organizer}
      </p>
      {event.location && (
        <p className={styles.info}>
          <strong>Location:</strong> {event.location}
        </p>
      )}
      <button
        className={styles.registerButton}
        onClick={() => navigate(`/register/${eventId}`)}
      >
        Register
      </button>
    </div>
  );
};

export default EventDetails;
