import React from 'react'
import { Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap'
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Container fluid style={{ backgroundColor: "#F5F5F5" }}>
            <Container className="navBarContainer" fixed="top">
                <Row>
                    <Col sm={6} md={3} xl={3} className="logoArea">
                        <div className="headerLogo">
                            <Image src='/assets/img/logo.png' />
                        </div>
                    </Col>
                    <Col sm={6} md={6} xl={6}>
                        <div className="mainMenu">
                            <Navbar expand="lg">
                                <Container fluid>
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll">
                                        <Nav
                                            className="me-auto my-2 my-lg-0"
                                            style={{ maxHeight: '100px' }}
                                            navbarScroll
                                        >
                                            <Link className="menuItem" to="/">Home</Link>
                                            <Link className="menuItem" to="/shop">Shop</Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </Col>
                    <Col sm={12} md={3} xl={3} className="careSearchArea">
                        <div className="cartSearch">
                            <div className="cartArea">
                                <FaSearch className="headerIcon" />
                                <span>Search</span>
                            </div>
                            <div className="searchArea">
                                <FaCartPlus className="headerIcon" />
                                <Link to="/cart"><span>Cart (1)</span></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}

export default Header