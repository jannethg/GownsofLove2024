
import { POPULARS } from "../../app/shared/POPULARS";
import { Col, Row } from "reactstrap";
import PopularGownCard from "./PopularGownCard";
import { selectAllPopulars } from "./populargownsSlice";

const PopularGownsList = ({ setPopGownId }) => {
  const popular = selectAllPopulars();
  return (
    <Row className="ms-auto">
      {POPULARS.map((popular) => {
        return (
          <Col 
          md="5" 
          className="m-4" 
          key={popular.id}
          onClick={() => setPopGownId(popular.id)}
          >
            <PopularGownCard popular={popular} />           
          </Col>
        );
      })}
    </Row>
  );
};

export default PopularGownsList;
