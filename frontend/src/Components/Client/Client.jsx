import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Slider from "react-slick";
const Client = () => {
    const settings = {
        // dots: true,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container fluid className="section-padding">
            <Container>
                <Slider {...settings}>
                    <div className="clientArea">
                        <Image src="/assets/img/client/client-1.jpg" />
                    </div>
                    <div className="clientArea">
                        <Image src="/assets/img/client/client-2.jpg" />
                    </div>
                    <div className="clientArea">
                        <Image src="/assets/img/client/client-3.jpg" />
                    </div>
                    <div className="clientArea">
                        <Image src="/assets/img/client/client-4.jpg" />
                    </div>
                    <div className="clientArea">
                        <Image src="/assets/img/client/client-5.jpg" />
                    </div>
                </Slider>
            </Container>
        </Container>
    )
}

export default Client