import { GOWNS } from "../../app/shared/GOWNS";
import { Col, Row } from "reactstrap";
import GownCard from "./GownCard";

const GownsList = () => {
  return (
    <Row className="ms-auto">
      {GOWNS.map((gown) => {
        return (
          <Col md="3" className="m-4" key={gown.id}>
            <GownCard gown={gown} />
          </Col>
        );
      })}
    </Row>
  );
};

export default GownsList;
