import React from 'react';
import backlogIcon from '../icons/Backlog.svg';
import todoIcon from '../icons/To-do.svg';
import inProgressIcon from '../icons/in-progress.svg';
import doneIcon from '../icons/Done.svg';
import cancelledIcon from '../icons/Cancelled.svg';
import noPriorityIcon from '../icons/No-priority.svg';
import lowPriorityIcon from '../icons/Img - Low Priority.svg';
import mediumPriorityIcon from '../icons/Img - Medium Priority.svg';
import highPriorityIcon from '../icons/Img - High Priority.svg';
import urgentPriorityIcon from '../icons/SVG - Urgent Priority colour.svg';
import urgentPriorityIconGrey from '../icons/SVG - Urgent Priority grey.svg';

export const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case 'backlog': return <img src={backlogIcon} alt="Backlog" />;
    case 'todo': return <img src={todoIcon} alt="Todo" />;
    case 'in progress': return <img src={inProgressIcon} alt="In Progress" />;
    case 'done': return <img src={doneIcon} alt="Done" />;
    case 'cancelled': return <img src={cancelledIcon} alt="Cancelled" />;
    default: return null;
  }
};

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 0: return <img src={noPriorityIcon} alt="No Priority" />;
    case 1: return <img src={lowPriorityIcon} alt="Low Priority" />;
    case 2: return <img src={mediumPriorityIcon} alt="Medium Priority" />;
    case 3: return <img src={highPriorityIcon} alt="High Priority" />;
    case 4: return <img src={urgentPriorityIcon} alt="Urgent Priority" />;
    case 5: return <img src={urgentPriorityIconGrey} alt="Urgent Priority" />;
    default: return null;
  }
};