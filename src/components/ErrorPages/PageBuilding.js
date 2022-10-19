import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function PageBuilding(props) {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Hey folks! I am still building this page. Stay tuned for some amazing content here.
                </h1>
            </Container>
        </Container>

    );
}
export default PageBuilding;