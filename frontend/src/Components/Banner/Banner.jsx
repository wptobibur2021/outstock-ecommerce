import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Banner.css'
const Banner = () => {
    return (
        <Container fluid className="section-padding">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div className="banner p-relative">
                            <div className="bannerImg">
                                <Image src="/assets/img/banner/banner-big-1.jpg" />
                            </div>
                            <div className="bannerText p-absolute">
                                <h4><a href="www.https://techbd71.com">Bottle With Wooden Cork</a></h4>
                                <button className="bannerBtn">Buy Now / $150</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="banner p-relative">
                            <div className="bannerImg">
                                <Image src="/assets/img/banner/banner-big-2.jpg" />
                            </div>
                            <div className="bannerText p-absolute">
                                <h4><a href="www.https://techbd71.com">Bottle With Wooden Cork</a></h4>
                                <button className="bannerBtn">Buy Now / $150</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Banner