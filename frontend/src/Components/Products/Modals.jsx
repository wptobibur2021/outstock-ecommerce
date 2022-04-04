import React, { useState } from 'react'
import { Modal, Nav, Tab, Col, Row, Container, Image, Button, FormControl } from 'react-bootstrap'
import './Modals.css'
import { addCarts } from './../../redux/cartSlice.js'
import { useDispatch } from 'react-redux'
// import useNotifications from './../../Hooks/useNotification'
const Modals = ({ show, close, product }) => {
    // const { successNotify } = useNotifications()
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const { name, price, desc, gallery } = product;
    const qtyPlus = () => {
        setQty(Number(qty) + 1)
    }
    const qtyMinus = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }
    const handleChange = (e) => {
        setQty(e.target.value)
    }

    const handleCart = () => {
        dispatch(addCarts({ ...product, price, qty }))
        close();
        // successNotify()
    }

    return (
        <Modal size="lg" show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <Tab.Container id="left-tabs-example" defaultActiveKey={gallery[0].id}>
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            {
                                                gallery?.map((gallery) => (
                                                    <Nav.Item>
                                                        <Nav.Link eventKey={gallery.id}>
                                                            <Image className="modalImgSize" src={gallery.img} alt="Title" />
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                ))
                                            }
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            {
                                                gallery?.map((gallery) => (
                                                    <Tab.Pane eventKey={gallery.id}>
                                                        <Image className="modalViewImg" src={gallery.img} alt="Title" />
                                                    </Tab.Pane>
                                                ))
                                            }
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className="ProductDetails">
                                <p>Price: ${price}</p>
                                <p>{desc}</p>
                                <div className="cartActions">
                                    <div className="cartInputText">
                                        <h6>Quantity</h6>
                                        <div className="ModalQty">
                                            <span className="qtyMinus" onClick={qtyMinus}>-</span>
                                            <FormControl
                                                className="qty"
                                                value={qty}
                                                onChange={handleChange}
                                                type="text"
                                            />
                                            <span className="qtyPlus" onClick={qtyPlus}>+</span>
                                        </div>
                                    </div>
                                    <div className="cartBtn">
                                        <Button type="submit" onClick={handleCart} className="btnOutStock">Add To Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal >
    )
}

export default Modals