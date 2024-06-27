import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const GownDetail = ({gown}) => {
    const {image, name,description } = gown;
    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name}/>
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default GownDetail;