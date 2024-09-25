import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./EventsBoard.module.css";

const EventsBoard = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 5;

  useEffect(() => {
    axios
      .get(
        `https://eliftech-test-task-ltfm.onrender.com/events?page=${page}&perPage=${perPage}`
      )
      .then((response) => {
        const data = response.data.data;
        setEvents(data.data);
        setTotalPages(data.totalPages);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

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
        <button onClick={handlePreviousPage} className={styles.btn} disabled={page === 1}>
          ←
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPage} className={styles.btn} disabled={page === totalPages}>
          →
        </button>
      </div>
    </div>
  );
};

export default EventsBoard;
