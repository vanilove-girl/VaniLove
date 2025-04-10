import React from 'react';
import './App.css';

function App() {
  return (
    <div className="welcome">
      <h1>سلام خوشگله!</h1>
      <p>امروز وقتشه بدرخشی...</p>
      <button onClick={() => alert('بریم مرحله بعد!')}>شروع کن</button>
    </div>
  );
}

export default App;