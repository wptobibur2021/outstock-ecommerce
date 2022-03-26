import React from 'react'
import { Accordion, Col } from 'react-bootstrap'
import './LeftSidebar.css'
const LeftSidebar = () => {
    return (
        <Col sm={12} md={3} lg={3}>
            <div className="leftSidebarContainer">
                <h2>Product Categories</h2>
                <div className="categoryLists">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accessories</Accordion.Header>
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

            </div>
        </Col>
    )
}

export default LeftSidebar