import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                {/* Replace '#' with real links: */}
                <a
                    href="https://www.linkedin.com/in/harshikamboj/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a
                    href="https://drive.google.com/file/d/1FbFUPZNxllNTbCWiNW_jeq60ouvR5EBa/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src={navIcon2} alt="Resume" />
                </a>
                <a
                    href="https://github.com/harshikamboj"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src={navIcon3} alt="GitHub" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
  );
};
