import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";
import HeaderMaster from "../components/HeaderMaster";

const HomePage = () => {
  return (
    <>
    <header class="masthead">
        <div class="container">
            <div class="masthead-subheading">Buy, Sell, or Donate your Gowns with us!</div>
            <div class="masthead-heading">Gowns of Love</div>
            <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
        </div>
        
    </header>  
    <section class="page-section" id="services">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading">Our Mission</h2>
                <h3 class="section-subheading text-muted">We are thrilled to introduce our business, "Gowns of Love" a place where fashion meets compassion and affordability. Our mission is to provide a welcoming space where individuals can find their perfect gowns while also making a positive impact on the lives of others.</h3>
            </div>
            <div class="row text-center services">
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="my-3">Buy for Love</h4>
                    <p class="text-muted">You'll be able to afford to buy gowns at a fraction of the cost. By purchasing a gown from Gowns of Love, you not only find a treasure that accentuates your beauty but also contribute to our mission of inclusivity and affordability. Every purchase directly supports our efforts to empower individuals and create a world where dreams are within reach for all.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="my-3">Sell for Love</h4>
                    <p class="text-muted">At Gowns of Love, we understand the sentimental value of your gown and the cherished memories they hold. That's why we warmly welcome gowns donations from generous hearts like yours. By selling your beloved gown to us, you become part of a legacy that celebrates love and supports future brides in their pursuit of happiness.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-heart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="my-3">Donate for Love</h4>
                    <p class="text-muted">We warmly accept gown donations from generous hearts like yours. We believe that every gown has the power to transform lives, symbolizing dreams, confidence, and celebration. By donating your gown, you become part of a movement that transcends material possessions and extends a helping hand to those in need.</p>
                </div>
            </div>
        </div>
    </section>


    <DisplayList />
   
    </>
  );
  
};

export default HomePage;