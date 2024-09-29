import React, { useMemo } from 'react';
import Column from './column';
import './KanbanBoard.css';

function KanbanBoard({ tickets, users, groupBy, sortBy }) {
  const groupedAndSortedTickets = useMemo(() => {
    const grouped = tickets.reduce((acc, ticket) => {
      const key = groupBy === 'user' ? ticket.userId : ticket[groupBy];
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});

    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sortBy === 'priority') return b.priority - a.priority;
        return a.title.localeCompare(b.title);
      });
    });

    return grouped;
  }, [tickets, groupBy, sortBy]);

  return (
    <div className="kanban-board">
      {Object.entries(groupedAndSortedTickets).map(([key, ticketsGroup]) => (
        <Column 
          key={key} 
          title={key} 
          tickets={ticketsGroup}
          users={users}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
