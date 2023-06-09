import React from 'react';
import { Button, Dropdown, Nav } from 'react-bootstrap';
import { FaSort } from 'react-icons/fa';

// Dropdown menu for sorting projects and toggle button for changing order ascending/descending
const SortMenu = ({ onSortFieldChange, onSortOrderChange }) => {
    const handleSortFieldChange = (sortField) => {
        onSortFieldChange(sortField);
    };

    const handleSortOrderChange = () => {
        onSortOrderChange((prevOrder) =>
            prevOrder === 'asc' ? 'desc' : 'asc'
        );
    };

    return (
        <Nav className="justify-content-end">
            <Dropdown onSelect={handleSortFieldChange}>
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
            <Button variant="outline-info" onClick={handleSortOrderChange}>
                <FaSort />
            </Button>
        </Nav>
    );
};

export default SortMenu;
