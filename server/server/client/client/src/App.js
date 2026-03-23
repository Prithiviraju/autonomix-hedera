import React, { useState } from 'react';

function App() {
  const [status, setStatus] = useState('Idle');
  const [logs, setLogs] = useState([]);

  const triggerAgentTask = async () => {
    setStatus('Negotiating...');
    setLogs(prev => [...prev, '🤖 Agent A requesting Data Scrape...']);

    // Simulate API call to backend negotiation
    setTimeout(() => {
      setLogs(prev => [...prev, '🤝 Agent B accepted offer: 0.05 HBAR']);
      setStatus('Executing Payment on Hedera...');

      // Simulate Hedera Transaction
      setTimeout(() => {
        setLogs(prev => [...prev, `✅ Payment Confirmed. TxId: 0.0.12345@${Date.now()}...`]);
        setStatus('Task Complete');
      }, 2000);
    }, 1500);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#0b0f19', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#00E676' }}>🤖 Autonomix M2M Dashboard</h1>
      <p style={{ color: '#888' }}>Live Hedera Testnet Monitor</p>
      
      <div style={{ border: '1px solid #333', padding: '20px', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#111827' }}>
        <h2>Status: <span style={{ color: '#00E676' }}>{status}</span></h2>
        <button
          onClick={triggerAgentTask}
          style={{ backgroundColor: '#00E676', color: '#000', padding: '12px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
        >
          Initialize AI Micro-Bounty
        </button>
      </div>

      <h3>Ledger Activity (Hedera Consensus Service)</h3>
      <div style={{ backgroundColor: '#000', padding: '20px', border: '1px solid #333', borderRadius: '8px', fontFamily: 'monospace' }}>
        {logs.map((log, i) => (
          <p key={i} style={{ margin: '8px 0', color: log.includes('✅') ? '#00E676' : '#ccc' }}>{log}</p>
        ))}
        {logs.length === 0 && <p style={{ color: '#666' }}>Awaiting autonomous agent activity...</p>}
      </div>
    </div>
  );
}

export default App;
