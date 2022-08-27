import React, { Component } from "react";
import {
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./Images/logo.png";
import { Link } from "react-scroll";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const fontstyle = {
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "16px",
    };
    return (
      <Router>
        <MDBNavbar color="aqua-gradient" dark expand="md" fixed="top">
          <MDBNavbarBrand>
            {/* <img
              src={logo}
              className="img-fluid rounded z-depth-2"
              style={{ height: 50, padding: 0 }}
              alt=""
            /> */}
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem className="m-2">
                <Link to="home" smooth={true} duration={1500}>
                  <MDBNavLink
                    to=""
                    onClick={this.toggleCollapse}
                    style={fontstyle}
                  >
                    <MDBIcon icon="home" className="m-1" spin />
                    முகப்பு
                  </MDBNavLink>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="job" smooth={true} duration={1500} offset={-75}>
                  <MDBNavLink
                    to=""
                    onClick={this.toggleCollapse}
                    className="m-2"
                    style={fontstyle}
                  >
                    <MDBIcon far icon="address-card" className="m-1" spin />
                    கொள்முதல் நிலையங்கள்
                  </MDBNavLink>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="services" smooth={true} duration={1500} offset={-75}>
                  <MDBNavLink
                    to=""
                    onClick={this.toggleCollapse}
                    className="m-2"
                    style={fontstyle}
                  >
                    <MDBIcon far icon="handshake" className="m-1" spin />
                    சேவைகள்
                  </MDBNavLink>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="project" smooth={true} duration={1500} offset={-60}>
                  <MDBNavLink
                    to=""
                    onClick={this.toggleCollapse}
                    className="m-2"
                    style={fontstyle}
                  >
                    <MDBIcon icon="user-plus" className="m-1" spin />
                    திட்டங்கள்
                  </MDBNavLink>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="contact" smooth={true} duration={1500} offset={-60}>
                  <MDBNavLink
                    to=""
                    onClick={this.toggleCollapse}
                    className="m-2"
                    style={fontstyle}
                  >
                    <MDBIcon icon="mobile-alt" className="m-1" spin />
                    புகார் தெரிவிக்க
                  </MDBNavLink>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Navbar;
