import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NoCarts = () => {
    return (
        <Col sm={12} md={12} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="noCarts">
                <h6>No Cart Item Avilable, Please product add to cart, <Link to='/'>Click here</Link></h6>
            </div>
        </Col>
    )
}

export default NoCarts