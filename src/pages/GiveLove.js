import { Col, Row, Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import giftImg from "../app/assets/teams/gift.jpg";
import heartImg from "../app/assets/teams/heart.jpg";
import volunteersImg from "../app/assets/teams/volunteers.jpg";

const GiveLove = () => {
  return (
    <Container>
      <SubHeader current="Give Love" />
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
      <Row className="row-content">
        <section className="page-section" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading">Other Ways You Can Help</h2>
              <h3 className="section-subheading text-muted">
                We know a monetary donation is not always possible. Here are
                other ways you can join our mission.
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={giftImg}
                    alt=" "
                  />
                  <h4 className="my-3">Make a Donation</h4>
                  <p className="text-muted">
                    Gifts of all kinds are accepted with gratitude.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={volunteersImg}
                    alt=" "
                  />
                  <h4 className="my-3">Volunteer</h4>
                  <p className="text-muted">
                    Turn your compassion into action and lear more about
                    volunteering
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={heartImg}
                    alt=""
                  />
                  <h4 className="my-3">Share us on Social Media</h4>
                  <p className="text-muted">
                    You can share with your friends using the social media
                    buttons. Contact us or Follow us on our social accounts to
                    join the conversation.
                  </p>
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
      </Row>
    </Container>
  );
};

export default GiveLove;
