import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="headerMain py-3">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src="/assets/imgs/logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
            <div className="d-flex align-items-center coinsDropdown me-3">
                  <Image src="/assets/imgs/sol.svg" />
                  <NavDropdown title="SOL" id="coinDropdown">
                    <NavDropdown.Item href="#action/3.1"><div className="d-flex gap-3"><Image className="dropdownIcons" src="/assets/imgs/eth.svg" /><span>ETH</span></div></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"><div className="d-flex gap-3"><Image className="dropdownIcons" src="/assets/imgs/sol.svg" /><span>SOL</span></div></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><div className="d-flex gap-3"><Image className="dropdownIcons" src="/assets/imgs/blast.svg" /><span>Blast</span></div></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"><div className="d-flex gap-3"><Image className="dropdownIcons" src="/assets/imgs/base.svg" /><span>BASE</span></div></NavDropdown.Item>
                  </NavDropdown>
                </div>
              <Nav.Link href="#home"><i className="bi bi-twitter-x"></i></Nav.Link>
              <Nav.Link href="#link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.94364 11.2904C7.58077 8.83435 11.3397 7.2152 13.2206 6.4329C18.5907 4.1993 19.7065 3.8113 20.4338 3.79848C20.5938 3.79567 20.9514 3.83531 21.1831 4.0233C21.3788 4.18204 21.4326 4.39647 21.4583 4.54697C21.4841 4.69747 21.5162 5.04032 21.4907 5.30821C21.1997 8.36585 19.9405 15.7859 19.2999 19.2105C19.0288 20.6596 18.4951 21.1455 17.9784 21.193C16.8554 21.2964 16.0027 20.4509 14.9151 19.738C13.2132 18.6223 12.2517 17.9279 10.5997 16.8392C8.69056 15.5811 9.92819 14.8896 11.0162 13.7596C11.301 13.4638 16.2486 8.96351 16.3444 8.55527C16.3564 8.50421 16.3675 8.31389 16.2544 8.21339C16.1414 8.11289 15.9745 8.14726 15.8541 8.17459C15.6834 8.21333 12.9646 10.0104 7.69761 13.5657C6.92588 14.0956 6.22687 14.3538 5.60058 14.3403C4.91015 14.3254 3.58204 13.9499 2.59473 13.629C1.38374 13.2353 0.421278 13.0272 0.505087 12.3587C0.54874 12.0105 1.02826 11.6544 1.94364 11.2904Z" fill="currentColor"/>
                </svg>
              </Nav.Link>
              <div className="d-flex align-items-center ms-3">
                  <i className="bi bi-globe2"></i>
                  <NavDropdown title="EN" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">En</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">中文</NavDropdown.Item>
                  </NavDropdown>
                </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
