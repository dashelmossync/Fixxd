import React from 'react';
import TicketList from './components/TicketList';
import './styles.css';

export default function App() {
  return (
    <div className="container">
      <h1>Fixxd Ticketing App</h1>
      <TicketList />
    </div>
  );
}
