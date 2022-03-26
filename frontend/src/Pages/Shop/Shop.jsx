import React from 'react'
import Single from './Single'
import './Single.css'
import { Container, Row, Col } from 'react-bootstrap'
import LeftSidebar from './LeftSidebar'
const Shop = () => {
    return (
        <Container fluid className="section-padding">
            <Container>
                <Row>
                    <LeftSidebar></LeftSidebar>
                    <Col sm={12} md={9} lg={9}>
                        <Row>
                            <Single></Single>
                            <Single></Single>
                            <Single></Single>
                            <Single></Single>
                            <Single></Single>
                            <Single></Single>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Shop