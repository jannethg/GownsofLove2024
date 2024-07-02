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
    <div className="container">
    <DisplayList />
    </div>
    </>
  );
  
};

export default HomePage;