import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

// Search bar component for searching projects
const SearchBar = ({ onSearchQueryChange }) => {
    // Prevents enter being used to submit the form and reload the page
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };
    
    return (
        <Form className="mr-2">
            <FormControl
                type="text"
                placeholder="Search"
                onChange={(e) => onSearchQueryChange(e.target.value)}
                className="mr-sm-2"
                onKeyDown={handleKeyDown}
            />
        </Form>
    );
};

export default SearchBar;
