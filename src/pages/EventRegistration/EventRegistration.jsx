import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./EventRegistration.module.css";

const EventRegistration = () => {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   dateOfBirth: "",
  //   source: "",
  // });
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Відправка даних на сервер
  //   axios
  //     .post("https://your-api-endpoint.com/register", formData)
  //     .then((response) => {
  //       console.log("Registration successful:", response.data);
  //       navigate("/thank-you"); // Перенаправлення на сторінку подяки
  //     })
  //     .catch((error) => {
  //       console.error("Error during registration:", error);
  //     });
  // };

  return (
    <div className={styles.registrationContainer}>
      <h1>Event Registration</h1>
      <form
        // onSubmit={handleSubmit}
        className={styles.registrationForm}>
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          // value={formData.fullName}
          // onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          // value={formData.email}
          // onChange={handleChange}
          required
        />

        <label htmlFor="dateOfBirth">Date of birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          // value={formData.dateOfBirth}
          // onChange={handleChange}
          required
        />

        <label>Where did you hear about this event?</label>
        <div className={styles.radioGroup}>
          <input
            type="radio"
            id="socialMedia"
            name="source"
            value="Social media"
            // checked={formData.source === "Social media"}
            // onChange={handleChange}
            required
          />
          <label htmlFor="socialMedia">Social media</label>

          <input
            type="radio"
            id="friends"
            name="source"
            value="Friends"
            // checked={formData.source === "Friends"}
            // onChange={handleChange}
          />
          <label htmlFor="friends">Friends</label>

          <input
            type="radio"
            id="foundMyself"
            name="source"
            value="Found myself"
            // checked={formData.source === "Found myself"}
            // onChange={handleChange}
          />
          <label htmlFor="foundMyself">Found myself</label>
        </div>

        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default EventRegistration;
