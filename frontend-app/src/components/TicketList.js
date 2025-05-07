import React, { useState, useEffect } from 'react';

const mockTickets = [
  { id: 'T20250001', customer: 'Jane Smith', issue: 'Cracked screen', status: 'In Progress' },
  { id: 'T20250002', customer: 'Mark Lee', issue: 'Battery issue', status: 'Open' },
];

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTickets(mockTickets);
    }, 500);
  }, []);

  return (
    <div>
      <h2>Tickets</h2>
      <ul className="ticket-list">
        {tickets.map(ticket => (
          <li key={ticket.id} className="ticket-card">
            <strong>{ticket.id}</strong> — {ticket.customer}<br />
            <em>{ticket.issue}</em> | <span className="status">{ticket.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
