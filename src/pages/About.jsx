import React from "react";
import "./About.css";
import profilePic from "../Components/logo192.png"; // Replace with your actual image path

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="Yakupha Ntonintshi" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Yakupha Ntonintshi, a passionate and curious software developer with a
            keen eye for detail and a love for solving complex problems through clean and
            efficient code.
          </p>
          <p>
            I specialize in frontend and backend web development using technologies like
            JavaScript, Vue.js, React, Node.js, and MySQL. I’ve also worked with Python and have a
            solid understanding of databases and APIs.
          </p>
          <p>
            With a year of hands-on experience, I’ve collaborated on exciting projects such as a
            weather app and an interactive memory game, and earned certifications including AWS.
          </p>
          <p>
            I'm constantly seeking opportunities to grow, collaborate, and contribute to impactful
            products. Let's build something great together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
