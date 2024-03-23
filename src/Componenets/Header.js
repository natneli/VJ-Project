// import React from 'react';
// import {  Link,Navigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import "./Header.css";
// import logoImage from "../../src/Images/logo-videojet.jpg";

// /**
//  * Header Component
//  * This component represents the header section of the application.
//  * It includes the logo, application title, search input, and search functionality.
//  */



// function Header() {
//     return (
//       <div>
//         <div className="header">
//           <Link to="/Login">
//             <img src={logoImage} alt="" className="header__logo" />
//           </Link>
//           <div className="header__topic">
//             <Link to="/Home">
//               <h2>Videojet Service Information System</h2>
//             </Link>
//           </div>
//           <div className="header__search">
//             <input type="text" className="header__searchInput" />
//             <SearchIcon className="header__searchIcon" />
//           </div>
//           <div>
//             <p className="header__search__text">Search Using Serial No</p>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Header

// Responsive Header

// import React, { useState } from "react";
// import {
//   Button,
//   Container,
//   Form,
//   Nav,
//   Navbar,
//   NavDropdown,
//   Offcanvas,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Header.css";
// import logoImage from "../Images/logo-videojet.jpg";
// import buttonData, {
//   appointmentManagementLinks,
//   getRouteName,
//   videojetConnectLinks,
// } from "../constant/const";
// import { Link } from "react-router-dom";

// function OffcanvasExample() {
//   const expand = "lg";
//   const [showNavbar, setShowNavbar] = useState(false); // State to control navbar visibility

//   const handleProductLinkClick = () => {
//     setShowNavbar(false); // Close the navbar when a product link is clicked
//   };
//   // State variables to control visibility of each dropdown
//   const [showProducts, setShowProducts] = useState(false);
//   const [showAppointment, setShowAppointment] = useState(false);
//   const [showVideojetConnect, setShowVideojetConnect] = useState(false);

//   return (
//     <>
//       <Navbar key={expand} expand={expand} className="header">
//         <Container fluid>
//           <Navbar.Brand href="/home">
//             <img src={logoImage} alt="" className="header__logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls={`offcanvasNavbar-expand-${expand}`}
//             onClick={() => setShowNavbar(!showNavbar)}
//             className="toggle"
//           />
//           <Navbar.Offcanvas
//             show={showNavbar} // Control the visibility of offcanvas navbar
//             onHide={() => setShowNavbar(false)} // Hide navbar when close button is clicked
//             id={`offcanvasNavbar-expand-${expand}`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//             placement="end"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                 Videojet Service Information System
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav>
//                 <NavDropdown
//                   title={
//                     <>
//                       <span style={{ fontSize: "20px", fontWeight: "bold" }}>
//                         {showProducts ? "-" : "+"}
//                       </span>{" "}
//                       Products
//                     </>
//                   }
//                   id={`offcanvasNavbarDropdown1-expand-${expand}`}
//                   className={`d-${expand}-none`}
//                   show={showProducts}
//                   onClick={() => setShowProducts(!showProducts)}
//                 >
//                   {Object.keys(buttonData).map((button) => (
//                     <Link
//                       key={button}
//                       to={`/${getRouteName(button)}/${encodeURIComponent(
//                         button
//                       )}`}
//                       className="header-products"
//                       onClick={handleProductLinkClick} // Close navbar when product link is clicked
//                     >
//                       {button}
//                       <hr />
//                     </Link>
//                   ))}
//                 </NavDropdown>
//                 <hr />
//                 <NavDropdown
//                   title={
//                     <>
//                       <span style={{ fontSize: "20px", fontWeight: "bold" }}>
//                         {showAppointment ? "-" : "+"}
//                       </span>{" "}
//                       Appointment Management
//                     </>
//                   }
//                   id={`offcanvasNavbarDropdown2-expand-${expand}`}
//                   className={`d-${expand}-none`}
//                   show={showAppointment}
//                   onClick={() => setShowAppointment(!showAppointment)}
//                 >
//                   <div className="header-link">
//                     {appointmentManagementLinks.map((link, index) => (
//                       <NavDropdown.Item
//                         key={index}
//                         href={link.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="header-links"
//                       >
//                         {link.label}
//                         <hr />
//                       </NavDropdown.Item>
//                     ))}
//                   </div>
//                 </NavDropdown>
//                 <hr />
//                 <NavDropdown
//                   title={
//                     <>
//                       <span style={{ fontSize: "20px", fontWeight: "bold" }}>
//                         {showVideojetConnect ? "-" : "+"}
//                       </span>{" "}
//                       Videojet Connect
//                     </>
//                   }
//                   id={`offcanvasNavbarDropdown3-expand-${expand}`}
//                   className={`d-${expand}-none`}
//                   show={showVideojetConnect}
//                   onClick={() => setShowVideojetConnect(!showVideojetConnect)}
//                 >
//                   <div className="header-link">
//                     {videojetConnectLinks.map((link, index) => (
//                       <NavDropdown.Item
//                         key={index}
//                         href={link.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {link.label}
//                         <hr />
//                       </NavDropdown.Item>
//                     ))}
//                   </div>
//                 </NavDropdown>
//                 <hr />
//               </Nav>
//               <Container>
//                 <h3 className="head">Videojet Service Information System</h3>
//               </Container>
//               <Form className="d-flex">
//                 <Form.Control
//                   type="search"
//                   placeholder="Search"
//                   className="me-2"
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-success">Search</Button>
//               </Form>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default OffcanvasExample;

// Using Videojet Template

import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import logoImage from '../../src/Images/logo-videojet.jpg';

/**
 * Header Component
 * This component represents the header section of the application.
 * It includes the logo, application title, search input, and search functionality.
 */

function Header() {
  useEffect(() => {
    const eventTypes = [
      "mouseover",
      "keydown",
      "touchmove",
      "touchstart",
      "scroll",
      "click touchstart",
    ];

    const handleEvent = () => {
      executeScripts();
      eventTypes.forEach((eventType) => {
        window.removeEventListener(eventType, handleEvent, { passive: true });
      });
    };

    const executeScriptsSequentially = (scripts, callback, index = 0) => {
      if (index < scripts.length) {
        scripts[index](() =>
          executeScriptsSequentially(scripts, callback, index + 1)
        );
      } else {
        callback();
      }
    };

    const dispatchEvents = () => {
      const eventNames = [
        "DOMContentLoaded",
        "readystatechange",
        "load",
        "show",
      ];
      eventNames.forEach((eventName) => {
        const event = document.createEvent("Event");
        event.initEvent(eventName, true, true);
        window.dispatchEvent(event);
        document.dispatchEvent(event);
      });

      const resizeEvent = window.document.createEvent("UIEvents");
      resizeEvent.initUIEvent("resize", true, true, window, 0);
      window.dispatchEvent(resizeEvent);
      document.dispatchEvent(resizeEvent);
    };

    const runScript = (scriptElement, callback) => {
      const newScript = document.createElement("script");
      newScript.type = "text/javascript";

      if (scriptElement.src) {
        newScript.onload = callback;
        newScript.onerror = callback;
        newScript.src = scriptElement.src;
        newScript.id = scriptElement.id;
      } else {
        newScript.textContent = scriptElement.innerText;
        newScript.id = scriptElement.id;
      }

      if (scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }

      document.body.appendChild(newScript);

      if (!scriptElement.src) {
        callback();
      }
    };

    const executeScripts = () => {
      const scriptElements = document.querySelectorAll("script");
      const scriptFunctions = [];

      scriptElements.forEach((scriptElement) => {
        const scriptType = scriptElement.getAttribute("type");
        if (scriptType === "text/rtscript") {
          scriptFunctions.push((callback) =>
            runScript(scriptElement, callback)
          );
        }
      });

      executeScriptsSequentially(scriptFunctions, dispatchEvents);
    };

    eventTypes.forEach((eventType) => {
      window.addEventListener(eventType, handleEvent, { passive: true });
    });

    return () => {
      eventTypes.forEach((eventType) => {
        window.removeEventListener(eventType, handleEvent, { passive: true });
      });
    };
  }, []);


    return (
      <div>
        <body className="home page-template-default page page-id-24896 no-sidebar vj-site-us">
          <div id="page" className="hfeed site" />
          <a className="skip-link screen-reader-text" href="#content">
            Skip to content
          </a>
          <header id="masthead" className="site-header" role="banner">
            <div className="row site-header__top">
              <div className="small-12">
                <nav className="site-header__top-menu">
                  <ul
                    id="menu-top-header-menu"
                    className="top-header-navigation js-children-menu-dropdown no-bullet"
                  >
                    <li
                      id="menu-item-24899"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24899"
                    >
                      <a href="tel:(866)871-3226">
                        Equipment quote (866) 871-3226
                      </a>
                    </li>
                    <li
                      id="menu-item-24900"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24900"
                    >
                      <a href="tel:(800)843-3610">
                        On-site service (800) 843-3610
                      </a>
                    </li>
                  </ul>{" "}
                  <ul className="no-bullet top-header-navigation-left">
                    <ul
                      id="menu-top-header-menu-right"
                      className="top-header-navigation js-children-menu-dropdown no-bullet top-header-navigation-left"
                    >
                      <li
                        id="menu-item-24901"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24901"
                      >
                        <span
                          className="vj-contact-modal js-modal-trigger"
                          data-text="Contact"
                          data-model-trigger="#contactUsModal"
                        >
                          <span>Contact us</span>
                        </span>
                      </li>
                      <li
                        id="menu-item-24902"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24902"
                      >
                        <a href="https://accounts.videojet.com">Log in</a>
                      </li>
                    </ul>
                    <li className="site-header__glob-nav">
                      <a
                        href="#"
                        title="global country"
                        className="js-modal-trigger"
                        data-model-trigger="#globalSite"
                      >
                        <i className="icon-white icon-globe"></i>{" "}
                        <span className="site_abbr">US </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="site-header__bottom">
              <div className="row small-12 row-container">
                {/* Site Logo */}
                <div className="site-header__logo small-10">
                  <a
                    href="https://www.videojet.com/us/homepage.html?countryCode=US"
                    rel="home"
                  >
                    <img
                      src="https://www.videojet.com/wp-content/themes/videojet-2020/assets/lib/images/videojet-logo.png"
                      alt="Videojet Logo"
                      height="33px"
                      width="181px"
                    />
                  </a>
                  <div className="site-title screen-reader-text">
                    <a href="https://www.videojet.com/" rel="home">
                      United States
                    </a>
                  </div>{" "}
                </div>

                <div
                  id="videojet-2023-site-header-nav"
                  className="site-header__nav small-2"
                >
                  <ul className="hide-for-small-medium no-bullet site-header__nav-mobile">
                    <li className="small-12">
                      <div
                        id="primary-nav-button"
                        className="videojet-mobile-nav-button menu-toggle"
                      >
                        <button
                          id="primary-nav-button-hamburger"
                          className="hamburger hamburger--slider"
                          type="button"
                          tabindex="0"
                          aria-label="Navigation"
                        >
                          <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                  <nav
                    id="site-navigation"
                    className="videojet-main-navigation"
                    role="navigation"
                    aria-label="Primary Menu"
                  >
                    <div className="menu-main-header-navigation-container">
                      <ul id="primary-menu" className="primary-menu menu">
                        <li
                          id="menu-item-1830"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1830 vj-menu-item-depth-0"
                        >
                          <a href="#">PRODUCTS</a>
                          <ul className="sub-menu vj-sub-menu-depth-0">
                            <li
                              id="menu-item-1831"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1831 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-24905"
                                  className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24905 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/products.html">
                                    Industrial printers
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1832"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1832 vj-menu-item-depth-3"
                                    >
                                      <a
                                        href="/ProductTypeCIJ"
                                        
                                      >
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/cij-icon-small.png?w=70"
                                          alt="Continuous Inkjet (CIJ)"
                                        />
                                        <div>Continuous Inkjet (CIJ)</div>
                                      </a>
                                    </li>

                                    <li
                                      id="menu-item-1838"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1838 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/laser-marking-systems.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/laser-icon-small.png?w=70"
                                          alt="Laser Marking Systems"
                                        />
                                        <div>Laser Marking Systems</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1847"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1847 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/thermal-transfer-overprinters.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/tto-icon-small.png?w=70"
                                          alt="Thermal Transfer Overprinter (TTO)"
                                        />
                                        <div>
                                          Thermal Transfer Overprinter (TTO)
                                        </div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1851"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1851 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/thermal-ink-jet.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/tij-icon-small.png?w=70"
                                          alt="Thermal Inkjet Printers (TIJ)"
                                        />
                                        <div>Thermal Inkjet Printers (TIJ)</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1856"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1856 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/case-coding-printers.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/lcm-lpa-icon-small.png?w=70"
                                          alt="Case Coding and Labeling"
                                        />
                                        <div>Case Coding and Labeling</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1862"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1862 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/graphics-and-addressing.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/gij-icon-small.png?w=70"
                                          alt="Commercial Graphics and Addressing"
                                        />
                                        <div>
                                          Commercial Graphics and Addressing
                                        </div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-25010"
                                      className="vj-menu-is-link new-product menu-item menu-item-type-custom menu-item-object-custom menu-item-25010 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/latest-industrial-printers.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/icon-burst-exclamation.png?w=50"
                                          alt="See new product launches"
                                        />
                                        <div>See new product launches</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-24913"
                                      className="custom-padding-left-25 menu-item menu-item-type-custom menu-item-object-custom menu-item-24913 vj-menu-item-depth-3 vj-menu-is-link"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products.html">
                                        See all industrial printers
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-24914"
                                      className="custom-padding-left-25 menu-item menu-item-type-custom menu-item-object-custom menu-item-24914 vj-menu-item-depth-3 vj-menu-is-link"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/equipment-leasing.html">
                                        Industrial printer lease options
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1868"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1868 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-24433"
                                  className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24433 vj-menu-item-depth-2"
                                >
                                  <a>Software</a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-24434"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-24434 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/enterprise-labeling-marking-coding-solutions.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/sof-icon-colour-high-res.jpg?w=1060"
                                          alt="Enterprise Labeling, Marking and Coding Solution"
                                        />
                                        <div>
                                          Enterprise Labeling, Marking and
                                          Coding Solution
                                        </div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-24984"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24984 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/videojet-connect-suite.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/sof-icon-colour-high-res.jpg?w=1060"
                                          alt="VideojetConnect™ Suite"
                                        />
                                        <div>VideojetConnect™ Suite</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-24435"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-24435 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/clarisuite-software-products.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/sof-icon-colour-high-res.jpg?w=1060"
                                          alt="CLARiSUITE"
                                        />
                                        <div>CLARiSUITE</div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-24918"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24918 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-24920"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24920 vj-menu-item-depth-2"
                                >
                                  <a>Solutions</a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1877"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1877 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/track-and-trace.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/vision-icon-cord-blue.png?w=1060"
                                          alt="Vision and Track &amp; trace"
                                        />
                                        <div>Vision and Track &amp; trace</div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-24919"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24919 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-1870"
                                  className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1870 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/products/inks-and-ribbons.html">
                                    Inks, ribbons, parts &#038; supplies
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1871"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1871 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/inks-and-ribbons/continuous-ink-jet-inks.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/cij-icon-small.png?w=70"
                                          alt="Continuous Inkjet Inks"
                                        />
                                        <div>Continuous Inkjet Inks</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1873"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1873 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/inks-and-ribbons/thermal-transfer-ribbons.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/tto-icon-small.png?w=70"
                                          alt="Thermal Transfer Ribbons"
                                        />
                                        <div>Thermal Transfer Ribbons</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1874"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1874 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/inks-and-ribbons/thermal-ink-jet-inks.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/tij-icon-small.png?w=70"
                                          alt="Thermal Inkjet Inks"
                                        />
                                        <div>Thermal Inkjet Inks</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1875"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1875 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/inks-and-ribbons/case-coding-inks.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/lcm-lpa-icon-small.png?w=70"
                                          alt="Case Coding Inks"
                                        />
                                        <div>Case Coding Inks</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1876"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1876 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/inks-and-ribbons/colored-inks.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/colored-inks.jpg?w=300"
                                          alt="Colored Inks"
                                        />
                                        <div>Colored Inks</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-25268"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-25268 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/laser-marking-systems/laser-fume-extraction-systems-and-filters.html">
                                        <img
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/misc/icons/laser-icon-small.png?w=70"
                                          alt="Laser Fume Extractors"
                                        />
                                        <div>Laser Fume Extractors</div>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-24921"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24921 vj-menu-item-depth-3 vj-menu-is-link"
                                    >
                                      <a href="https://shop.videojet.com/">
                                        Shop Videojet parts and Supplies
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-1887"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1887 vj-menu-item-depth-0"
                        >
                          <a href="#">APPLICATIONS</a>
                          <ul className="sub-menu vj-sub-menu-depth-0">
                            <li
                              id="menu-item-1888"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1888 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-24925"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24925 vj-menu-item-depth-2"
                                >
                                  <a>Coding applications</a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1889"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1889 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-glass-bottles-and-containers.html">
                                        Glass Bottles and Containers
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1890"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1890 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-pet-bottles.html">
                                        PET Plastic Bottles
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1891"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1891 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-plastic-rigid-containers.html">
                                        Plastic Rigid Containers
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1892"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1892 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-plastic-and-rubber-parts.html">
                                        Plastic and Rubber Parts
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1893"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1893 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-metal-and-aluminum-cans.html">
                                        Metal and Aluminum Cans
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1894"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1894 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-metal-parts.html">
                                        Metal Parts
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1895"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1895 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-extrusions.html">
                                        Extrusions
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1896"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1896 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-24922"
                                  className="hide-menu-column-header-text menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24922 vj-menu-item-depth-2"
                                >
                                  <a href="#">custom-html</a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1897"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1897 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-flexible-films-and-foils.html">
                                        Flexible Film and Foils
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1898"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1898 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-shrink-wrap.html">
                                        Shrink Wrap
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1899"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1899 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-paperboard.html">
                                        Paperboard
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1900"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1900 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-and-labeling-on-corrugate.html">
                                        Labeling on Corrugate
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1901"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1901 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-wood.html">
                                        Wood and Lumber
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1902"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1902 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-eggs.html">
                                        Eggs and Egg Cartons
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1903"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1903 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/applications/printing-on-retail-ready-packaging.html">
                                        Retail-Ready Packaging
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1904"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1904 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-18110"
                                  className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-18110 vj-menu-item-depth-2"
                                >
                                  <div className="vj-custom-html">
                                    <div className="text">
                                      <p title="Case coding solutions for big box retail suppliers">
                                        <b>
                                          Case coding solutions for big box
                                          retail suppliers
                                        </b>
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  id="menu-item-18111"
                                  className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-18111 vj-menu-item-depth-2"
                                >
                                  <div className="vj-custom-html">
                                    <p>
                                      <a
                                        href="https://www.videojet.com/us/homepage/applications/walmart-marking-and-coding-requirements.html"
                                        target="_blank"
                                      >
                                        <img
                                          decoding="async"
                                          width="300px"
                                          height="200px"
                                          src="https://global.videojet.com/wp-content/uploads/dam/image/country/north-america/walmart-banner-us.png?w=300&quality=80"
                                          alt="Videojet applications for Walmart"
                                          title="Videojet applications for Walmart"
                                        />
                                      </a>
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-1907"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1907 vj-menu-item-depth-0"
                        >
                          <a href="#">INDUSTRIES</a>
                          <ul className="sub-menu vj-sub-menu-depth-0">
                            <li
                              id="menu-item-1908"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1908 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-1909"
                                  className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1909 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/industry-solutions.html">
                                    Food and Beverage
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1910"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1910 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/baked-goods.html">
                                        Baked Goods and Cereal
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1919"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1919 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/other-food-industries.html">
                                        Packaged Foods
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1911"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1911 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/beverage-hub.html">
                                        Beverages
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1912"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1912 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/candy-and-confectionery.html">
                                        Candy and Confectionery
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1913"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1913 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/dairy.html">
                                        Dairy
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1914"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1914 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/egg.html">
                                        Egg
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1915"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1915 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/fruits-and-vegetables.html">
                                        Fruits and Vegetables
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1916"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1916 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/meat-and-poultry.html">
                                        Meat and Poultry
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1917"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1917 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/pet-food-and-animal-feed.html">
                                        Pet Food and Animal Feed
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1918"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1918 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/salty-snacks.html">
                                        Salty Snacks
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1920"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1920 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-1921"
                                  className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1921 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/industry-solutions.html#tabs-tab_0tabsmainpar">
                                    Pharmaceutical and consumer products
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1922"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1922 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/cosmetic-personal-home-care-hub.html">
                                        Cosmetics, Personal and Home Care
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1923"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1923 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/pharma-hub.html">
                                        Pharmaceutical and Medical Devices
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1924"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1924 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/tobacco.html">
                                        Tobacco
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-21312"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-21312 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/cannabis.html">
                                        Cannabis
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-24952"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24952 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-1925"
                                  className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1925 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/industry-solutions.html#tabs-tab_1tabsmainpar">
                                    Industrial
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1926"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1926 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/aero-auto-hub.html">
                                        Automotive and Aerospace
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1927"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1927 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/building-materials.html">
                                        Building Materials
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1928"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1928 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/chemicals.html">
                                        Chemicals
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1929"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1929 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/commercial-printing-and-addressing.html">
                                        Commercial Printing and Addressing
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1930"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1930 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/electrical-components-and-electronics.html">
                                        Electrical Components and Electronics
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1931"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1931 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/industry-solutions/wire-cable-pipe.html">
                                        Wire, Cable and Pipe
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1932"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1932 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-17030"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17030 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/general/oem-packaging-machinery.html">
                                    OEM
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-24951"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24951 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/general/oem-packaging-machinery.html">
                                        Packaging machinery
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-1953"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1953 vj-menu-item-depth-0"
                        >
                          <a href="#">SUPPORT</a>
                          <ul className="sub-menu vj-sub-menu-depth-0">
                            <li
                              id="menu-item-1954"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1954 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-1955"
                                  className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1955 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/service-and-support/customer-care.html">
                                    Customer care
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1956"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1956 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/onsite-service-request.html">
                                        Request Onsite Service
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1957"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1957 vj-menu-item-depth-3"
                                    >
                                      <a href="https://shop.videojet.com/">
                                        Check your order status
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1958"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1958 vj-menu-item-depth-3"
                                    >
                                      <a href="https://shop.videojet.com/">
                                        Order Online &#8211; shop.videojet.com
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1964"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1964 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-1959"
                                  className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1959 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/service-and-support.html">
                                    Technical Service &#038; Support
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1960"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1960 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/technical-support.html">
                                        Technical Support
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1961"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1961 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/technical-training.html">
                                        Technical Training
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1962"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1962 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/training-calendar.html">
                                        Training Calendar
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1963"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1963 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/operator-manuals.html">
                                        Operator Manuals
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1975"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1975 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-1965"
                                  className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1965 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/service-and-support/onsite-service.html">
                                    Videojet Service Advantage
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1966"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1966 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/life-cycle-advantage.html">
                                        Videojet LifeCycle Advantage
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1967"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1967 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/service-offerings.html">
                                        Service Agreements and Offerings
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1968"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1968 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/remoteservice.html">
                                        Remote Service
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1969"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1969 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/rapid-recover.html">
                                        Rapid Recover
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1970"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1970 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/service-selector.html">
                                        Service Selector Tool
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1971"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1971 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/products/equipment-leasing.html">
                                        Full Care Lease Program
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-18650"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-18650 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/onsite-service-request.html">
                                        Onsite Service Request
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-1935"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1935 vj-menu-item-depth-0"
                        >
                          <a href="#">RESOURCES</a>
                          <ul className="sub-menu vj-sub-menu-depth-0">
                            <li
                              id="menu-item-1936"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1936 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-1937"
                                  className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1937 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/resources/knowledge-base.html">
                                    Knowledge Base
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1938"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1938 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/application-notes.html">
                                        Application Notes
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1939"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1939 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/brochures.html">
                                        Brochures
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1940"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1940 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/case-studies.html">
                                        Case Studies
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1941"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1941 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/glossary.html">
                                        Glossary
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1942"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1942 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/video-hub.html">
                                        Video Hub
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1943"
                                      className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-1943 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/white-papers.html">
                                        White Papers
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-24944"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24944 vj-menu-item-depth-3"
                                    >
                                      <a href="https://know.videojet.com">
                                        Visit the service module Knowledge Base
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1945"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1945 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-24945"
                                  className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24945 vj-menu-item-depth-2"
                                >
                                  <a>Coding market resources</a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1944"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1944 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/productivity-pulse.html">
                                        Productivity Pulse
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1947"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1947 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/faqs.html">
                                        Frequently asked questions (FAQs)
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1950"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1950 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-24949"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24949 vj-menu-item-depth-2"
                                >
                                  <a>Videojet resources</a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1946"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1946 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/safety-data-sheets.html">
                                        Safety Data Sheets
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1948"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1948 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/about-us/videojet-warranty.html">
                                        Videojet Warranties
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1949"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1949 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/terms-and-conditions.html">
                                        Terms and Conditions
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-24950"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24950 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/operator-manuals.html">
                                        Operator manuals
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-1978"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1978 vj-menu-item-depth-0"
                        >
                          <a href="#">ABOUT</a>

                          <ul className="sub-menu vj-sub-menu-depth-0">
                            <li
                              id="menu-item-1979"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1979 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-22707"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-22707 vj-menu-item-depth-2"
                                >
                                  <a href="https://www.videojet.com/us/homepage/about-us.html">
                                    About Videojet
                                  </a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1980"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1980 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/contact-us.html">
                                        Contact Us
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1981"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1981 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/contact-us/global-offices.html">
                                        Global Offices
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1982"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1982 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/service-and-support/contact-us/sales-and-distributor-search.html">
                                        Sales and Distributor Search
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1983"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1983 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/general/news.html">
                                        Press Releases
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-14529"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-14529 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/general/videojet-in-the-news.html">
                                        Videojet in the News
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1984"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1984 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/resources/tradeshows-and-events.html">
                                        Trade Shows and Events
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1985"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1985 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-24928"
                                  className="hide-menu-column-header-text menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24928 vj-menu-item-depth-2"
                                >
                                  <a href="#">Custom HTML</a>
                                  <ul className="sub-menu vj-sub-menu-depth-2">
                                    <li
                                      id="menu-item-1986"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1986 vj-menu-item-depth-3"
                                    >
                                      <a href="https://jobs.veralto.com/global/en/videojet">
                                        Videojet Careers
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1987"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1987 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/about-us/history.html">
                                        History
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1988"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1988 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/about-us/veralto-integrity.html">
                                        Integrity and Compliance
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-1989"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-1989 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/about-us/rohs-compliance.html">
                                        RoHS Compliance
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-10215"
                                      className="linkListTitle menu-item menu-item-type-custom menu-item-object-custom menu-item-10215 vj-menu-item-depth-3"
                                    >
                                      <a href="https://www.videojet.com/us/homepage/about-us/sustainability.html">
                                        Sustainability
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-1991"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1991 vj-menu-item-depth-1 vj-menu-is-column"
                            >
                              <ul className="sub-menu vj-sub-menu-depth-1">
                                <li
                                  id="menu-item-22704"
                                  className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-22704 vj-menu-item-depth-2"
                                >
                                  <div className="vj-custom-html">
                                    <div className="text">
                                      <p>
                                        <strong>
                                          Videojet Supplier Information
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  id="menu-item-22705"
                                  className="linkList_arrowNone menu-item menu-item-type-custom menu-item-object-custom menu-item-22705 vj-menu-item-depth-2"
                                >
                                  <div className="vj-custom-html">
                                    <div>
                                      <a
                                        href="https://global.videojet.com/wp-content/uploads/dam/pdf/NA%20-%20English/Brochure/br-videojet-supplier-information-us.pdf"
                                        target="_blank"
                                      >
                                        <img
                                          fetchpriority="high"
                                          decoding="async"
                                          title="Videojet Supplier Information"
                                          alt="Videojet Supplier Information"
                                          width="200"
                                          height="266"
                                          className="cq-dd-image"
                                          src="https://global.videojet.com/wp-content/uploads/dam/pdf/NA%20-%20English/Brochure/thumbnails/br-videojet-supplier-information-us.jpg"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="header-search-form hide-for-small-medium">
                      <form
                        role="search"
                        method="get"
                        className="videojet-search-form"
                        action="https://www.videojet.com/us/homepage/general/search-results.html"
                      >
                        <label>
                          <span className="screen-reader-text">
                            Search For :
                          </span>
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Search..."
                            value=""
                            name="q"
                            title="Search for:"
                          />
                        </label>
                        <input
                          type="submit"
                          className="search-submit"
                          value="Search"
                        />
                      </form>
                    </div>
                  </nav>{" "}
                  {/* #site-navigation */}
                </div>

                <div
                  id="videojet-2023-open-search-btn"
                  className="videojet-2023-search show-for-small-medium"
                >
                  <a href="#" title="search">
                    <img
                      src="https://www.videojet.com/wp-content/themes/videojet-2023/assets/src/img/search-icon.png"
                      alt="search-icon"
                      width="15px"
                      height="15px"
                    />
                  </a>
                </div>

                <div
                  id="videojet-2023-search-form"
                  className="header-search-form show-for-small-medium"
                >
                  <form
                    role="search"
                    method="get"
                    className="videojet-search-form"
                    action="https://www.videojet.com/us/homepage/general/search-results.html"
                  >
                    <div className="search-field-container">
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search..."
                        value=""
                        name="q"
                        title="Search for:"
                      />
                      <a
                        href="#"
                        className="videojet-2023-close-search-btn show-for-small-medium"
                      ></a>

                      <input
                        type="submit"
                        className="search-submit hide-for-small-medium"
                        value="Search"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </header>{" "}
          {/* #masthead */}
          <div id="content" className="site-content row-container" />
          <main id="main" className="site-main" role="main" />
          <div
            id="mega-menu-overlay"
            className="mega-menu-overlay hide fadeIn animated"
          ></div>
          <div className="wp-block-group alignfull has-black-background-color has-background is-layout-constrained wp-block-group-is-layout-constrained">
            <div className="wp-block-group__inner-container">
              <div
                className="wp-block-videojet-sticky-nav vj-sticky-navs-block-wrapper"
                id="vj-sticky-navs-menu-block"
                data-sticky="true"
                data-title-color="#fff"
                style={{
                  backgroundColor: "#000",
                  paddingTop: "15px",
                }}
              ></div>

              <p></p>
            </div>
          </div>
        </body>
      </div>
    );
}

export default Header;



