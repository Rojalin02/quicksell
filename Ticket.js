import React, { useState, useEffect } from 'react';
import './Ticket.css';
import { getPriorityIcon } from '../utils/iconHelpers';

function Ticket({ ticket, user }) {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const storedSelection = localStorage.getItem(`ticket_${ticket.id}_selected`);
    if (storedSelection !== null) {
      setIsSelected(JSON.parse(storedSelection));
    }
  }, [ticket.id]);

  const toggleSelection = () => {
    const newSelectionState = !isSelected;
    setIsSelected(newSelectionState);
    localStorage.setItem(`ticket_${ticket.id}_selected`, JSON.stringify(newSelectionState));
  };

  return (
    <div className="ticket">
      <div className="ticket-content">
        <div
          className={`ticket-checkbox ${isSelected ? 'selected' : ''}`}
          onClick={toggleSelection}
        >
          <div className="checkmark"></div>
        </div>
        <div className="ticket-main">
          <div className="ticket-header">
            <span className="ticket-id">{ticket.id}</span>
            {user && (
              <div className={`user-avatar ${user.available ? 'available' : 'unavailable'}`}>
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="ticket-title">{ticket.title}</div>
          <div className="ticket-footer">
            <div className="icon-wrapper">
              {getPriorityIcon(ticket.priority === 4 ? ticket.priority + 1 : ticket.priority)}
            </div>
            <div className="ticket-tag">{ticket.tag[0]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;