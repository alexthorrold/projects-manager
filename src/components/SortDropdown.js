import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const SortDropdown = ({ handleSort }) => {
  const [sortCategory, setSortCategory] = useState('projectName');
  const [sortDirection, setSortDirection] = useState(true); // True for Ascending, False for Descending

  const handleSortDirection = () => {
    setSortDirection(!sortDirection);
    handleSort(sortCategory, sortDirection ? 'Asc' : 'Desc');
  };

  const handleSortCategory = (eventKey) => {
    setSortCategory(eventKey);
  };

  const getSortOptionText = () => {
    switch (sortCategory) {
      case 'projectName':
        return 'Project Name';
      case 'startDate':
        return 'Start Date';
      default:
        return 'Sort by';
    }
  };

  return (
    <div>
      <DropdownButton title={getSortOptionText()} id="dropdown-menu-align-right" onSelect={handleSortCategory}>
        <Dropdown.Item eventKey="projectName">Project Name</Dropdown.Item>
        <Dropdown.Item eventKey="startDate">Start Date</Dropdown.Item>
      </DropdownButton>
      <button onClick={handleSortDirection}>
        {sortDirection ? <FaArrowUp /> : <FaArrowDown />}
      </button>
    </div>
  );
};

export default SortDropdown;
