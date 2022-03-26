import React from 'react'
import './HomePromote.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Animated } from "react-animated-css";
const HomePromote = () => {
    return (
        <Container fluid className="section-padding">
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <Animated
                            animationIn="fadeInLeft"
                            isVisible={true}
                            animationInDuration={2000}
                        >
                            <div className="promoteItem p-relative">
                                <div className="promoteImg">
                                    <Image src="/assets/img/banner/banner-sm-1.jpg" />
                                </div>
                                <div className="promoteText p-absolute">
                                    <h5 className="proTitle"><a href="4">Sunflower Clock<br></br>Quartz Hands</a></h5>
                                    <p className="proLink"><a href="3">Discover now</a></p>
                                </div>
                            </div>
                        </Animated>
                    </Col>

                    <Col sm={12} md={4} lg={4}>
                        <Animated
                            animationIn="zoomIn"
                            isVisible={true}
                            animationInDuration={2000}
                        >
                            <div className="promoteItem p-relative">
                                <div className="promoteImg">
                                    <Image src="/assets/img/banner/banner-sm-2.jpg" />
                                </div>
                                <div className="promoteText p-absolute">
                                    <h5 className="proTitle"><a href="4">Sunflower Clock<br></br>Quartz Hands</a></h5>
                                    <p className="proLink"><a href="3">Discover now</a></p>
                                </div>
                            </div>
                        </Animated>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <Animated
                            animationIn="fadeInRight"
                            isVisible={true}
                            animationInDuration={2000}
                        >
                            <div className="promoteItem p-relative">
                                <div className="promoteImg">
                                    <Image src="/assets/img/banner/banner-sm-3.jpg" />
                                </div>
                                <div className="promoteText p-absolute">
                                    <h5 className="proTitle"><a href="4">Sunflower Clock<br></br>Quartz Hands</a></h5>
                                    <p className="proLink"><a href="3">Discover now</a></p>
                                </div>
                            </div>
                        </Animated>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default HomePromote