import React from 'react';

export default function Card({ children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
      {children}
    </div>
  );
}
