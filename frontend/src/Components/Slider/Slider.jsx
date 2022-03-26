import React from 'react'
import './Slider.css'
import { Container, Carousel, Button } from 'react-bootstrap'
import { Animated } from "react-animated-css";

const Slider = () => {
    return (
        <Container fluid style={{ padding: "0px" }} indicators={false}>
            <Carousel fade nextLabel="Next">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/img/slider/slider-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Animated
                            animationIn="fadeInUp"
                            isVisible={true}
                            animationInDuration={2000}
                        >
                            <h3>Handmade<br></br>Hand carved Coffee</h3>
                        </Animated>
                        <Animated
                            animationIn="fadeInLeft"
                            isVisible={true}
                            animationInDuration={2000}
                        >
                            <p>Claritas est etiam processus dynamicus qui sequitur <br></br>mutationem consuetudium lectorum.</p>
                        </Animated>
                        <Animated
                            animationIn="bounceInUp"
                            isVisible={true}
                            animationInDuration={2000}
                        >
                            <Button className="btnOutStock">Shop Now</Button>
                        </Animated>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/img/slider/slider-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Think Different &<br></br>Do it otherwise</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/img/slider/slider-3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>High Beam <br></br>by Tom Chung</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Slider