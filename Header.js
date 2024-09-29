import React, { useState } from 'react';
import './Header.css';
import displayIcon from '../icons/Display.svg';
import downIcon from '../icons/down.svg';

function Header({ groupBy, setGroupBy, sortBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleGroupChange = (value) => {
    setGroupBy(value);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <header className="header">
      <div className="display-button" onClick={toggleDropdown}>
        <img src={displayIcon} alt="Display Options" />
        <span>Display</span>
        <img src={downIcon} alt="Dropdown" className={isOpen ? 'rotated' : ''} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select value={groupBy} onChange={(e) => handleGroupChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;