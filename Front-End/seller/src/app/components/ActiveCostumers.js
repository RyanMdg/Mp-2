import React from 'react';

const ActiveUsersTable = ({ activeUsers }) => {
  return (
    <table className='border border-collapse w-[71vh]'>
      <thead>
        <tr className="bg-blue-200">
          <th className="border p-2">User ID</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email address</th>
        </tr>
      </thead>
      <tbody>
        {activeUsers.map((user) => (
          <tr key={user.id}>
            <td className="border p-2">{user.id}</td>
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActiveUsersTable;
