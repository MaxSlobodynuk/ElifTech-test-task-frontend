import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./EventsBoard.module.css";

const EventsBoard = () => {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://eliftech-test-task-ltfm.onrender.com/events")
      .then((response) => {
        setEvents(response.data.data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className={styles.eventsContainer}>
      <h1>Events</h1>
      <div className={styles.eventsGrid}>
        {events.map((event) => (
          <div key={event._id} className={styles.eventCard}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <div className={styles.eventActions}>
              <Link to={`/register/${event._id}`} className={styles.btn}>
                Register
              </Link>
              <Link to={`/view/${event._id}`} className={styles.btn}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button>←</button>
        <span>1 2 3 ... 9 10</span>
        <button>→</button>
      </div>
    </div>
  );
};

export default EventsBoard;
