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

const Header = () => {
  
  const[menuOpen, setMenuOpen] = useState(false)

  return (
    <Navbar class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" expand="md">
      <NavbarBrand className="ms-5" href="/">
      <h1 class="visually-hidden">Gowns of Love</h1>
      <span class="nav-brand" alt="Gowns of Love" className="float-start"  ><span class="nav-brand">Gowns of Love</span></span>
        
        
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
              <NavLink className="nav-link" to="/give-love">
                <i className="fa fa-heart fa-lg" /> Give Love
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                <i className="fa fa-info fa-lg" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/directory">
                <i className="fa fa-list fa-lg" /> Directory
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
