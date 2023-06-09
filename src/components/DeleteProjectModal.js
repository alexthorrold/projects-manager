import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// Modal to verify user wants to delete a project, if confirms then calls handleDelete to delete the project
const DeleteProjectModal = ({ show, onClose, handleDelete }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this project?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteProjectModal;
