import React, { useState, useEffect } from 'react';

// Save audit log to localStorage
const saveAuditLog = (action) => {
  const timestamp = new Date().toISOString();
  const log = {
    action,
    timestamp,
  };
  const logs = JSON.parse(localStorage.getItem('auditLogs')) || [];
  logs.push(log);
  localStorage.setItem('auditLogs', JSON.stringify(logs));
};

const RecentActivityPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem('auditLogs')) || [];
    setLogs(storedLogs);
  }, []);

  const handleLogin = () => {
    // Simulate login (you can add your own authentication logic here)
    saveAuditLog('User logged in');
    setLogs((prevLogs) => [
      ...prevLogs,
      { action: 'User logged in', timestamp: new Date().toISOString() },
    ]);
  };

  return (
    <div>
      <h3>Recent Activity</h3>
      <button onClick={handleLogin}>Login</button>
      {logs.length > 0 ? (
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              <strong>{log.action}</strong> - {log.timestamp}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent activity available.</p>
      )}
    </div>
  );
};

export default RecentActivityPage;
