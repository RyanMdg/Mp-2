import React from 'react';
import ActiveUsersTable from '../components/ActiveCostumers';

const CostumersInput = () => {
  // Assuming you have an array of active user objects
  const activeUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more active user objects as needed
  ];

  return (
    <div>
      <h1>A</h1>
      <ActiveUsersTable activeUsers={activeUsers} />
    </div>
  );
};

export default CostumersInput;
