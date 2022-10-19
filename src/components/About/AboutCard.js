import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Aditya Chaudhari </span>
            from <span className="purple"> Binghamton, New York</span>. Currently working as a Software Engineer at <a href="https://www.mindex.com/" target="_blank">Mindex Technologies Inc.</a>
             I am working in the Professional Services Department for <a href="https://www.paychex.com/" target="_blank">Paychex Inc</a>, based out of <span className="purple">Rochester, New York</span>
            <br />
            <br />I'm a May'21 graduate from the <a href="https://www.binghamton.edu/" target="_blank">State University of New York at Binghamton</a>. I completed my Master of Science in <span className="purple">Computer Science</span>.
            <br/>
            <br />I'm Analytically driven and ambitious professional having diverse experience in Software Development, Data management,
             and business reporting. Proficient knowledge in backend Java web services and frameworks like Spring.
              I have had the opportunity as Chief Operating Officer at <a href="https://matlabhelper.com/" target="_blank">MATLAB Helper ®</a> to work with various cross-functional & multi-cultural teams in various projects to achieve the desired results on the past.
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>
          <p style={{ textAlign: "center" }}> My Life Moto is...</p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Not everything that counts can be counted, and not everything that's counted truly counts!"{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
