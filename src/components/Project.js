import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import DeleteProjectModal from './DeleteProjectModal';

// Project component for displaying a project's details
const Project = ({ project, onDelete }) => {
    const { projectName, projectIdentifier, description, startDate, endDate } =
        project;

    const [showDeleteModal, setShowDeleteModal] = React.useState(false);

    // Closes the delete modal
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    // Calls onDelete to delete the project
    const handleDelete = () => {
        onDelete(projectIdentifier);
        setShowDeleteModal(false);
    };

    return (
        <Card className="mt-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h3>{projectName}</h3>
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => setShowDeleteModal(true)}
                    style={{ cursor: 'pointer' }}
                />
            </Card.Header>
            <Card.Body>
                <p className="card-text">
                    <strong>Description: </strong>
                    {description}
                </p>
                <p className="card-text">
                    <strong>Start Date: </strong>
                    {new Date(startDate).toLocaleString()}
                </p>
                <p className="card-text">
                    <strong>End Date: </strong>
                    {new Date(endDate).toLocaleString()}
                </p>
            </Card.Body>
            <DeleteProjectModal
                show={showDeleteModal}
                onClose={handleCloseDeleteModal}
                handleDelete={handleDelete}
            />
        </Card>
    );
};

export default Project;
