import { GOWNS } from "../../app/shared/GOWNS";
import { Col, Row } from "reactstrap";
import GownCard from "./GownCard";
import { selectAllGowns } from "./gownsSlice";

const GownsList = ({ setGownId }) => {
  const gowns = selectAllGowns();
  return (
    <Row className="ms-auto">
      {GOWNS.map((gown) => {
        return (
          <Col 
          md="5" 
          className="m-4" 
          key={gown.id}
          onClick={() => setGownId(gown.id)}
          >
            <GownCard gown={gown} />
          </Col>
        );
      })}
    </Row>
  );
};

export default GownsList;
