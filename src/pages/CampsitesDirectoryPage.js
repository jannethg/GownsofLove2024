import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";

const CampsiteDirectoryPage = () => {
  
//we're changing the local state variable [campsiteId] to store an id number of the campsite's object
//instead of the entire object
//and we're changing the function name [setCampsiteId] to match
 //the <CampsiteDetail> is expecting us to pass the entire object
 
  const [campsiteId, setCampsiteId] = useState(0); 
  const selectedCampsite = selectCampsiteById(campsiteId);

  return (
    <Container>

      <Row>
        <Col sm="5" md="7">
          <CampsitesList setCampsiteId={setCampsiteId}/>
        </Col>
        <Col sm="7" md="5">
          <CampsiteDetail campsite={selectedCampsite} />
        </Col>
      </Row>
    </Container>
  );
};

export default CampsiteDirectoryPage;
