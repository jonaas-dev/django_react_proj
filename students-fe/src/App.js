import React, { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './components/Home';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import Header from './components/Header';

const Links = {
  color: "palevioletred",
  fontSize: "1.5rem",
  fontWeight: "400",
}

function About() {
  return <h1 className="text-center display-2 text-success">This is About Page</h1>
}

function Contact() {
  return <h1 className="text-center display-2 text-danger">This is Contact Page</h1>
}

function App() {
  const [toggle, setToggle] = useState(false);

  const isToggle = () => setToggle(!toggle);

  return (
    <Fragment>
      <Header />
      <div>
        <Router>
          <Navbar dark color="faded" className="text-dark" style={{ backgroundColor: "#1F2833" }}>
            <NavbarBrand style={{ color: "peachpuff", fontSize: "2rem" }}>
              MY APP
            </NavbarBrand>
            <NavbarToggler onClick={isToggle} />

            <Collapse isOpen={toggle} navbar>
              <Nav navbar className="text-center">

                <NavItem>
                  <NavLink style={Links}>
                    <Link to="/">Home</Link>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink style={Links}>
                    <Link to="/about">About</Link>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink style={Links}>
                    <Link to="/contact">Contact</Link>
                  </NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
