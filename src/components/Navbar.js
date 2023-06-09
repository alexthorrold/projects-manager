import React from 'react';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import SearchBar from './SearchBar';
import SortMenu from './SortMenu';

// Navbar component for searching and sorting projects
const Navbar = ({ onSearchBarChange, onSortFieldChange, onSortOrderChange }) => {
    return (
        <BootstrapNavbar bg="dark" variant="dark" className="p-2">
            <BootstrapNavbar.Brand>Project Manager</BootstrapNavbar.Brand>
            <BootstrapNavbar.Collapse className="justify-content-end">
                <SortMenu onSortFieldChange={onSortFieldChange} onSortOrderChange={onSortOrderChange} />
                <SearchBar onSearchBarChange={onSearchBarChange} />
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;
