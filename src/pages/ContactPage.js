import { Container, Col, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from '../components/ContactForm';


const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us'>
            </SubHeader>
            <Row className='row-content align-items-center'>
                <Col sm='2'></Col>
                <Col sm='4'>
                    <h3>Our Address</h3>
                    <address>
                        9999 Example Dr.
                        <br />
                        Fayetteville, NC 28312
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' /> 1-555-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:jgutier1@gmail.com'
                    >
                        <i className='fa fa-envelope-o' /> jgutier1@gmail.com                   </a>
                </Col>
            </Row>
            <Row className='row-content mt-5'>
                <Col xs='12'>
                    <h3 className="my-3">Send Us Your Feedback</h3>
                    <hr/>
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactPage;