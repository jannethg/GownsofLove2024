import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import GownDetail from "../features/gowns/GownDetail";
import GownsList from "../features/gowns/GownsList";
import { selectGownById } from "../features/gowns/gownsSlice";

const GownDirectoryPage = () => {
  
  const [gownId, setGownId] = useState(0); 
  const selectedGown = selectGownById(gownId);

  return (
    <Container>     
      <Row>
        <Col sm="5" md="7">
          <GownsList setGownId={setGownId}/>
        </Col>
        <Col sm="7" md="5">
          <GownDetail gown={selectedGown} />
        </Col>
      </Row>
    </Container>
  );
};

export default GownDirectoryPage;
