import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
const Search = ({ close, show }) => {
    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>You can serch product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Search</Form.Label>
                <Form.Control required type="text" placeholder="Enter product name" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">
                    Search
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Search