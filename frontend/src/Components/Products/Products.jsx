import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Single from './Single'

const Products = () => {
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
                    <Single></Single>
                    <Single></Single>
                    <Single></Single>
                    <Single></Single>
                    <Single></Single>
                    <Single></Single>
                    <Single></Single>
                    <Single></Single>
                </Row>
            </Container>
        </Container>
    )
}

export default Products