import React from 'react';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import styles from '../css/AddProjectButton.module.css';

// Button which will open AddProjectModal when clicked
const AddProjectButton = ({onClick}) => {
    return (
        <Button onClick={onClick} className={`position-fixed bottom-0 end-0 m-3 ${styles.button}`} variant="primary">
            <FaPlus />
        </Button>
    );
};

export default AddProjectButton;
