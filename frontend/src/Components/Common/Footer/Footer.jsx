import React from 'react'
import './Footer.css'
import { Container, Col, Row, Image } from 'react-bootstrap'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <Container fluid className="footerAreaContainer">
            <Container style={{ padding: '80px 0px' }}>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <Image className="footerLogo" src="/assets/img/logo-2.png" alt="OutStcok" />
                        <p>Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready.</p>
                        <ul className="footerInfo">
                            <li><FaMapMarkerAlt className="footerIcon" />Dhaka, Bangladesh</li>
                            <li><FaEnvelope className="footerIcon" />info@techbd71.com</li>
                            <li><FaPhoneAlt className="footerIcon" />+8801722527364</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <div className="footerWidgets">
                            <h4>Information</h4>
                            <ul className="footerLists">
                                <li className="footerList"><a href="https://techbd71.com">About Us</a></li>
                                <li className="footerList"><a href="https://techbd71.com">Careers</a></li>
                                <li className="footerList"><a href="https://techbd71.com">Delivery Inforamtion</a></li>
                                <li className="footerList"><a href="https://techbd71.com">Privacy Policy</a></li>
                                <li className="footerList"><a href="https://techbd71.com">Terms & Condition</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <div className="footerWidgets">
                            <h4>Information</h4>
                            <ul className="footerLists">
                                <li className="footerList"><a href="https://techbd71.com">Shipping Policy</a></li>
                                <li className="footerList"><a href="https://techbd71.com">Help & Contact Us</a></li>
                                <li className="footerList"><a href="https://techbd71.com">Returns & Refunds</a></li>
                                <li className="footerList"><a href="https://techbd71.com">Online Stores</a></li>
                                <li className="footerList"><a href="https://techbd71.com">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}

export default Footer