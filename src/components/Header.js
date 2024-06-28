import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import NucampLogo from "../app/assets/img/logo.png";

const Header = () => {
  //we'll make a call to useState
  //well destructure the return value into a const variable [menuOpen] and a function [setMenuOpen]
  //the [menuOpen] will track whether or not the collapsed navigation is open or closed 
  //for the initial state, we'll set this to false

  //we'll pass an onClick prop to the NavbarToggler component
  //we'll pass a function to run when the NavbarToggler is clicked. 
  //we'll set an arrow function setMenuOpen - this will call the setMenuOpen function that we got back from useState
  //this will change the local state of menuOpen to the opposite of whatever it is by using (!menuOpen) 
  //so if the original value is false , it will set to true.

  //add a prop to the collapse component - isOpen={menuOpen} - React strap will use this prop to determin whether to show
  //the collapse menu or not.. the isOpen property will change from true to false /or vise-versa based on the menuOpen variable. 
  //this will show the effect of revealing or hiding the collapse navlinks

  const[menuOpen, setMenuOpen] = useState(false)

  return (
    <Navbar  color='secondary' sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img src={NucampLogo} alt="nucamp logo" className="float-start" />
        <h1 className="mt-1">NuCamp</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
      <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <i className="fa fa-home fa-lg" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/directory">
                <i className="fa fa-list fa-lg" /> Directory
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                <i className="fa fa-info fa-lg" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                <i className="fa fa-address-card fa-lg" /> Contact
              </NavLink>
            </NavItem>
          </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
