import { Container, Row, Col, Button } from "reactstrap";
import GownDetail from "../features/gowns/GownDetail";
import GownsList from "../features/gowns/GownsList";
import { selectRandomGown } from "../features/gowns/gownsSlice";

const GownDirectoryPage = () => {
  let selectedGown = selectRandomGown();

  const toggleGown = () => {
    selectedGown = selectRandomGown();
    console.log(selectedGown);
};
  return (
    <Container>
      <Button onClick={() => toggleGown()}>
            Select Random Campsite 
        </Button>
     
      <Row>
        <Col sm="5" md="7">
          <GownsList />
        </Col>
        <Col sm="7" md="5">
          <GownDetail gown={selectedGown} />
        </Col>
      </Row>
    </Container>
  );
};

export default GownDirectoryPage;
