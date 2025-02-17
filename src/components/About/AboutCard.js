import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prashant Sharma(National Institute of Technology (NIT), Jamshedpur) </span>
            from <span className="purple"> Gurugram, Haryana , India.</span>
            <br />
            I am currently pursuing my MCA at Indira Gandhi Delhi Technical University For Women (IGDTUW) and am a Web Development Intern at Unified Mentor.
            <br />
            I have completed my Bachelor of Science from  M.A.S P.G. College, Pratapgarh, Uttar Pradesh, and I am passionate about programming, problem-solving, and Backend development.
            <br />
            <br />
            Sales and Distribution (SnD)
 Link
 • Designed and developed a full-stack web application to manage inventory movement and dealer management.
 • Performed end-to-end analysis, design, and implementation, ensuring seamless functionality.
 • Led a team of 3 developers, conducting code reviews and debugging sessions to maintain code quality.
 • Delivered the project 2 weeks ahead of schedule, exceeding client expectations
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing  Chess
            </li>
            
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prashant Kumar Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
