import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";

const CampsiteDetailPage = () => {
  //we'll destructure the campsiteId property from the object returned by the useParams hook.
  //we'll expect this variable to contain an integer that corresponds to a campsite object's Id property.

  //setup a variable name campsite. for its return value we'll call it selectCampsiteById selector.
  //we'll pass the campsiteId integer as an argument
  //this should return to use the campsite object from the campsite array that matches this id.
  //now we can tell the campsite detail page component to render this campsite by writing some jsx inside a return statement.

  //we'll render a <CampsiteDetail> component.  We'll pass the campsite object to the <campsiteDetail> component as a prop using the same name campsite.

  const { campsiteId } = useParams();
  const campsite = selectCampsiteById(campsiteId);

  return (
    <Container>
      <Row>
        <CampsiteDetail campsite={campsite} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
