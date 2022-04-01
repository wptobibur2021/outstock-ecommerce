import React, { useState, useEffect } from 'react'
import Single from './Single'
import './Single.css'
import { Container, Row, Col } from 'react-bootstrap'
import LeftSidebar from './LeftSidebar'
import useAPI from './../../Hooks/useAPI'
import { Link } from 'react-router-dom'
const Shop = () => {
    const [products, setProducts] = useState([])
    const { productsGet } = useAPI()
    useEffect(() => {
        productsGet(setProducts)
    }, [])
    return (
        <Container fluid>
            <div className="pageBanner" style={{
                backgroundImage: "url('/assets/img/slider/slider-1.jpg')",
                padding: '150px 0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h2>Your Shop</h2>
                <p><Link to="/">Home</Link> / Shop</p>
            </div>
            <Container className="section-padding">
                <Row>
                    <LeftSidebar></LeftSidebar>
                    <Col sm={12} md={9} lg={9}>
                        <Row>
                            {
                                products?.map((product) => <Single product={product}></Single>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Shop