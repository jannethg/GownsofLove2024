import { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";

const CampsiteDirectoryPage = () => {
  //this code is not re-rending
  // let selectedCampsite = selectRandomCampsite();

  // const toggleCampsite = () => {
  //     selectedCampsite = selectRandomCampsite();
  //     console.log(selectedCampsite);
  // };

  //destructure the local state value as selectedCampsite
  //in the useState, we want to pass the selectedRandomCampsite as initial value to the campsite.
  //the [selectedCampsite] is the entire campsite object
  //when the button is clicked we want to update the value of the selected campsite with the new random Campsite object..
  //the [toggleCampsite] is now defined by react and pass back to us from a call to useState
  const [selectedCampsite, toggleCampsite] = useState(selectRandomCampsite());

  //selectRandomCampsite will pull a random campsite object from our campsite's array.
  //and we'll send that into this toggleCampsite function which sends that over to react.
  //and react will handle updating the local state for selected campsite.
  //React will rerender the effective components automatically.
  return (
    <Container>
      <Button onClick={() => toggleCampsite(selectRandomCampsite)}>
        Select Random Campsite
      </Button>
      <Row>
        <Col sm="5" md="7">
          <CampsitesList />
        </Col>
        <Col sm="7" md="5">
          <CampsiteDetail campsite={selectedCampsite} />
        </Col>
      </Row>
    </Container>
  );
};

export default CampsiteDirectoryPage;
