import { Container } from "reactstrap";
import CampsitesList from "../features/campsites/CampsitesList";
import SubHeader from "../components/SubHeader";
import { Link } from "react-router-dom";



//here you should see the Campsite list component, not any details.
const CampsitesDirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Directory" />
      <CampsitesList />

      <section className="page-section" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading">View More Gowns</h2>
            <h3 className="section-subheading text-muted">
              Discover more variety of gowns.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="team-member">
                <h4 className="my-3">
                  <Link to="/populargowns">Popular Gowns</Link>
                </h4>
                <p className="text-muted">View Popular selections.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-member">
                <h4 className="my-3">
                  <Link to="/gownsdirectory">Designer Spotlights</Link>
                </h4>
                <p className="text-muted">View variety of Designer gowns.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted"></p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CampsitesDirectoryPage;
