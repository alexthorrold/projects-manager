import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

// Search bar component for searching projects
const SearchBar = ({ onSearchBarChange }) => {
    return (
        <Form className="mr-2">
            <FormControl
                type="text"
                placeholder="Search"
                onChange={(e) => onSearchBarChange(e.target.value)}
                className="mr-sm-2"
            />
        </Form>
    );
};

export default SearchBar;
