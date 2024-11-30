import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
    return (
        
        <footer className="position-fixed bottom-0 w-100">
            <Container fluid>
                <Row className="bg-dark text-white p-4">
                    <Col>
                        <LinkContainer to='/AcceptableUsePolicy'>
                        <Nav.Link>
                        Acceptable use Policy
                        </Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col>
                        <LinkContainer to='/DMCANoticeTakeDownPolicy'>
                        <Nav.Link>
                        DMCA notice & takedown Policy
                        </Nav.Link>
                        </LinkContainer>
                    </Col>
                    <Col>
                        <LinkContainer to='/SecurityPrivacyPolicy'>
                        <Nav.Link>
                        Security & Privacy Policy
                        </Nav.Link>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;