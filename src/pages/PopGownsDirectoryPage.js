import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PopularGownsList from "../features/gowns/PopularGownsList";
import PopularGownDetail from "../features/gowns/PopularGownDetail";
import { selectPopularById } from "../features/gowns/populargownsSlice";

const PopGownDirectoryPage = () => {
  const [popgownId, setPopGownId] = useState(0);
  const selectedPopGown = selectPopularById(popgownId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <PopularGownsList setPopGownId={setPopGownId} />
        </Col>
        <Col sm="7" md="5">
          <PopularGownDetail popular={selectedPopGown} />
        </Col>
      </Row>
    </Container>
  );
};

export default PopGownDirectoryPage;
