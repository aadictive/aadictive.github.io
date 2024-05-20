import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    dark: ["#8400b8", "#b22ff4", "#b265f6", "#c084f5", "#ecd9fc"]
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        When I Have Used <strong className="purple">GitHub</strong>
      </h1>
      <GitHubCalendar
        username="aadictive"
        blockSize={20}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
