import React from 'react'
import { Accordion, Col } from 'react-bootstrap'
import './LeftSidebar.css'
import { Link } from 'react-router-dom'
const LeftSidebar = () => {
    return (
        <Col sm={12} md={3} lg={3}>
            <div className="leftSidebarContainer">
                <div className="categoryLists">
                    <h2 className="leftSidebarTitle">Product Categories</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accessories</Accordion.Header>
                            <Accordion.Body>
                                <ul className="catNameLists">
                                    <li className="catNameList"><Link to="https://techbd71.com/">Category Name</Link></li>
                                    <li className="catNameList"><Link to="https://techbd71.com/">Category Name</Link></li>
                                    <li className="catNameList"><Link to="https://techbd71.com/">Category Name</Link></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Clothing</Accordion.Header>
                            <Accordion.Body>
                                <ul className="catNameLists">
                                    <li className="catNameList">Category Name</li>
                                    <li className="catNameList">Category Name</li>
                                    <li className="catNameList">Category Name</li>
                                    <li className="catNameList">Category Name</li>
                                    <li className="catNameList">Category Name</li>
                                    <li className="catNameList">Category Name</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div className="singleCategory">
                        <ul className="catNameLists">
                            <li className="catNameList">Category Name</li>
                            <li className="catNameList">Category Name</li>
                            <li className="catNameList">Category Name</li>
                        </ul>
                    </div>
                </div>
                <div className="brandList">
                    <h2 className="leftSidebarTitle">Brand</h2>
                    <ul className="catNameLists">
                        <li className="catNameList"><Link to="https://techbd71.com/">Brand Name</Link></li>
                        <li className="catNameList"><Link to="https://techbd71.com/">Brand Name</Link></li>
                        <li className="catNameList"><Link to="https://techbd71.com/">Brand Name</Link></li>
                    </ul>
                </div>
            </div>
        </Col>
    )
}

export default LeftSidebar