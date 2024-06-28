import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";

const CampsiteDirectoryPage = () => {
  //store the campsiteId instead of the entire object because each campsite object has a unique id.
  //


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
