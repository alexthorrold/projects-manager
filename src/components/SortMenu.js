import React from 'react';
import { Button, Dropdown, Nav } from 'react-bootstrap';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

// Dropdown menu for sorting projects and toggle button for changing order ascending/descending
const SortMenu = ({ onSortFieldChange, onSortOrderChange }) => {
    const [sortField, setSortField] = React.useState('projectName');
    const [sortOrder, setSortOrder] = React.useState('asc');

    return (
        <Nav className="justify-content-end">
            <Dropdown onSelect={onSortFieldChange}>
                <Dropdown.Toggle variant="outline-info">
                    Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="projectName">
                        Project Name
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="startDate">
                        Start Date
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-info" onClick={onSortOrderChange}>
                {sortOrder === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
            </Button>
        </Nav>
    );
};

export default SortMenu;
