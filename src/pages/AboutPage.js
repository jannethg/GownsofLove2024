import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About Us" />
      <Row className="row-content">
        <Col sm="12">
          <p>
            We are thrilled to introduce our business, "Gowns of Love," where we
            believe that every love story deserves to shine, and every bride
            deserves to feel radiant on her special day. Our mission is to
            create a place of enchantment and affordability, where we not only
            purchase gown donations but also offer exquisite gowns at prices
            that make dreams attainable.
          </p>
          <p>
            At Gowns of Love, we understand the sentimental value ofgowns and
            the cherished memories they hold. That's why we warmly welcome gown
            donations from generous hearts like yours. By selling your beloved
            gown to us, you become part of a legacy that celebrates love and
            supports future brides in their pursuit of happiness.
          </p>
          <p>
            Each gown we purchase is a testament to love's enduring power. We
            treat every gown with the utmost respect, understanding the
            significance it holds for its previous owner. Our team carefully
            assesses and values each dress, recognizing its unique beauty and
            the memories woven into its fabric.
          </p>
        </Col>
      </Row>
      <Row className="row-content m-5">
        <Col sm="6">
          <h3>Our Mission</h3>
          <p>
            But our mission extends beyond the purchase of gown donations. We
            are devoted to making dreams come true for every bride, regardless
            of financial limitations. Our collection showcases an array of
            breathtaking gowns, thoughtfully curated to cater to various tastes
            and styles. We take pride in offering affordable prices, ensuring
            that our brides can find their perfect gown without compromise.
          </p>
          <p>
            By purchasing a gown from Gowns of Love, you not only embrace your
            own love story but also contribute to our mission of inclusivity and
            joy. Every gown sold directly supports our efforts to make weddings
            a magical and unforgettable experience for all.
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader className="bar-primary">
              <h3> Facts at a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">February 3, 2024</dd>
                <dt className="col-6">No. of Gowns in 2024</dt>
                <dd className="col-6">563</dd>
                <dt className="col-6">No. of Reviews in 2024</dt>
                <dd className="col-6">4388</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">1</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Col sm="12">
            <p>
              We invite you to be part of this heartwarming journey. Whether you
              are selling your cherished gown or searching for the gown of your
              dreams at an affordable price, together, we can create a world
              where every bride finds her radiant reflection in the mirror of
              happiness.
            </p>
            <p>
              Thank you for considering Gowns of Love as your partner in
              celebrating love, life, and the enchantment of weddings.
            </p>
          </Col>
          <Card className="bg-light mt-5">
            <CardBody>
              <blockquote className="blockquote">
                <p>
                    Be practical as well as generous in your ideals. Keep your eyes on the stars, but remember to keep your feet on the ground.
                </p>
                <footer className="blockquote-footer">
                     Theodore Roosevelt,{" "}
                  <cite title="Source Title">
                    Roosevelt, Theodore, 1858-1919
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content mt-5">
        <Col xs="12">
          <h2>Community Partners</h2>
        </Col>
        <PartnersList />
      </Row>
    </Container>
  );
};

export default AboutPage;
