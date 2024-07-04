import { Container, Button } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";
import giftImg from "../app/assets/teams/gift.jpg";
import heartImg from "../app/assets/teams/heart.jpg";
import volunteersImg from "../app/assets/teams/volunteers.jpg";

const HomePage = () => {
  return (
    <>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">
            Buy, Sell, or Donate your Gowns with us!
          </div>
          <div className="masthead-heading">Gowns of Love</div>
          <a
            className="btn btn-danger btn-xl text-uppercase"
            href="#services"
          >
            Tell Me More
          </a>
        </div>
      </header>

      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading">Our Mission</h2>
            <h3 className="section-subheading text-muted">
              We are thrilled to introduce our business, "Gowns of Love" a place
              where fashion meets compassion and affordability. Our mission is
              to provide a welcoming space where individuals can find their
              perfect gowns while also making a positive impact on the lives of
              others.
            </h3>
          </div>
          <div className="row text-center services">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-circle"></i>
                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h3 className="my-3">Buy for Love</h3>
              <p className="text-muted">
                You'll be able to afford to buy gowns at a fraction of the cost.
                By purchasing a gown from Gowns of Love, you not only find a
                treasure that accentuates your beauty but also contribute to our
                mission of inclusivity and affordability. Every purchase
                directly supports our efforts to empower individuals and create
                a world where dreams are within reach for all.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-circle"></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h3 className="my-3">Sell for Love</h3>
              <p className="text-muted">
                At Gowns of Love, we understand the sentimental value of your
                gown and the cherished memories they hold. That's why we warmly
                welcome gowns donations from generous hearts like yours. By
                selling your beloved gown to us, you become part of a legacy
                that celebrates love and supports future brides in their pursuit
                of happiness.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-circle"></i>
                <i className="fa fa-heart fa-stack-1x fa-inverse"></i>
              </span>
              <h3 className="my-3">Donate for Love</h3>
              <p className="text-muted">
                We warmly accept gown donations from generous hearts like yours.
                We believe that every gown has the power to transform lives,
                symbolizing dreams, confidence, and celebration. By donating
                your gown, you become part of a movement that transcends
                material possessions and extends a helping hand to those in
                need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading">Featured Gowns</h2>
            <DisplayList />
          </div>
        </div>
      </section>

      <section className="page-section" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading">Other Ways You Can Help</h2>
            <h3 className="section-subheading text-muted">
              We know a monetary donation is not always possible. Here are other
              ways you can join our mission.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={giftImg} alt=" " />
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
                <img className="mx-auto rounded-circle" src={heartImg} alt="" />
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
    </>
  );
};

export default HomePage;
