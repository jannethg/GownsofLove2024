import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer mt-5">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2" className="mt-5">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/directory">Directory</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col xs="6" sm="3" className="text-center mt-5">
            <h4>Social</h4>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-linkedin" />
            </a>
          </Col>
          <Col sm="4" className="text-center mt-5">
            <h4>Contact</h4>
            <a role="button" className="btn btn-link" href="tel:(410)-652-1795">
              <i className="fa fa-phone" /> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:jgutier1@gmail.com"
            >
              <i className="fa fa-envelope-o" /> campsites@nucamp.co
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
