import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Single from './Single'
import useAPI from './../../Hooks/useAPI'
const Products = () => {
    const [products, setProducts] = useState([])
    const { productsGet } = useAPI()
    useEffect(() => {
        productsGet(setProducts)
    }, [])
    return (
        <Container fluid className="section-padding">
            <Container>
                <Col sm={12} md={12} lg={12}>
                    <div className="section-title text-center">
                        <h2>Trending Products</h2>
                        <div className="divider"></div>
                        <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                    </div>
                </Col>
            </Container>
            <Container>
                <Row>
                    {
                        products?.map((product) => <Single key={product._id} product={product}></Single>)
                    }
                </Row>
            </Container>
        </Container>
    )
}

export default Products