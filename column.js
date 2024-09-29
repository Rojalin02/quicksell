import React from 'react';
import Ticket from './Ticket';
import './Column.css';
import addIcon from '../icons/add.svg';
import threeDot from '../icons/3 dot menu.svg';
import { getStatusIcon, getPriorityIcon } from '../utils/iconHelpers';

function Column({ title, tickets, users, groupBy, onTicketMove }) {
  const getColumnIcon = () => {
    if (groupBy === 'status') return getStatusIcon(title);
    if (groupBy === 'priority') return getPriorityIcon(parseInt(title));
  };

  const handleTicketSelection = (ticketId, isSelected) => {
    if (isSelected && title !== 'Done') {
      onTicketMove(ticketId, 'Done');
    } else if (!isSelected && title === 'Done') {
      onTicketMove(ticketId, 'To Do');
    }
  };

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
          {getColumnIcon()}
          <span>{title}</span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-actions">
          <img src={addIcon} alt="Add" className="add-icon" />
          <img src={threeDot} alt="Dots" className="dots-icon" />
        </div>
      </div>
      <div className="ticket-list">
        {tickets.map(ticket => (
          <Ticket 
            key={ticket.id} 
            ticket={ticket} 
            user={users.find(u => u.id === ticket.userId)}
            onSelectionChange={(isSelected) => handleTicketSelection(ticket.id, isSelected)}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;