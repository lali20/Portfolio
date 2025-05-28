import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">LALITHAMBIGAI B </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
             I am an Information Technology Graduate Student at Prince Shri Venkateshwara Padmavathy Engineering College. I enjoy problem-solving and coding. Always strive to bring 100% to the work I do.
            <br />
            
             I have worked on technologies like Java, Python, MySQL, HTML5, CSS, Java, JavaScript during my bachelor's. 

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Contents
            </li>
            <li className="about-activity">
              <ImPointRight /> Bridal Skills
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">LALITHAMBIGAI</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
