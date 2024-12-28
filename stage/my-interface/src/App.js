// App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1>The Bridge</h1>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Improve your skills on your own</h1>
          <p>To prepare for a better future</p>
          <button className="register-btn">Register Now</button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2>Discover Our Courses</h2>
        <div className="course-list">
          <Course
            title="Spring Boot / Angular"
            price="350 DT/Month"
            image="spring-angular.jpg"
          />
          <Course
            title="Node JS / React"
            price="350 DT/Month"
            image="node-react.jpg"
          />
          <Course
            title="Flutter / Firebase"
            price="350 DT/Month"
            image="flutter-firebase.jpg"
          />
          <Course
            title="Business Intelligence"
            price="350 DT/Month"
            image="business-intelligence.jpg"
          />
          <Course
            title="Artificial Intelligence"
            price="350 DT/Month"
            image="artificial-intelligence.jpg"
          />
          <Course
            title="DevOps"
            price="350 DT/Month"
            image="devops.jpg"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <footer className="contact-us">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send the message</button>
        </form>
      </footer>
    </div>
  );
}

// Course Component
function Course({ title, price, image }) {
  return (
    <div className="course">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default App;
