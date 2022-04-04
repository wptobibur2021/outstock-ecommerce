import React, { useEffect, useState } from 'react'
import { Container, Col } from 'react-bootstrap'
import Slider from "react-slick";
import Carousel from './Carousel';
import useAPI from './../../Hooks/useAPI'
import './Carousel.css'
const Discount = () => {
    const [products, setProducts] = useState([])
    const { productsGet } = useAPI()
    useEffect(() => {
        productsGet(setProducts)
    }, [])
    const settings = {
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
                <Col sm={12} md={12} lg={12}>
                    <div className="section-title text-center">
                        <h2>Sale Off</h2>
                        <div className="divider"></div>
                        <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                    </div>
                </Col>
            </Container>
            <Container>
                <Slider {...settings}>
                    {
                        products?.map((product, i) => <Carousel key={product._id} product={product}></Carousel>)
                    }
                </Slider>
            </Container>
        </Container>
    )
}

export default Discount