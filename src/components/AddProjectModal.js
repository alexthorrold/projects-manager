import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// Modal with form for adding a new project
const AddProjectModal = ({ show, onClose, handleSave }) => {
    const [projectName, setProjectName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [errors, setErrors] = React.useState({});

    const resetForm = () => {
        setProjectName('');
        setDescription('');
        setStartDate('');
        setEndDate('');
        setErrors({});
    };

    // Checks inputs for errors and saves the project if there are none
    const handleSubmit = () => {
        const newErrors = {};

        if (!projectName) {
            newErrors.projectName = 'Project name is required!';
        }
        if (!startDate) {
            newErrors.startDate = 'Start date is required!';
        }
        if (!endDate) {
            newErrors.endDate = 'End date is required!';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const newProject = {
                projectName,
                description: description,
                startDate,
                endDate,
            };
            console.log(newProject);
            handleSave(newProject);
            handleClose();
        }
    };

    const handleClose = () => {
        resetForm();
        onClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formProjectName" className="mb-3">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter project name"
                            isInvalid={errors.projectName}
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.projectName}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                        controlId="formDescription"
                        className="mb-3"
                    >
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                        />
                    </Form.Group>

                    <Form.Group controlId="formStartDate" className="mb-3">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            isInvalid={errors.startDate}
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.startDate}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formEndDate" className="mb-3">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            isInvalid={errors.endDate}
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.endDate}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Add Project
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddProjectModal;
