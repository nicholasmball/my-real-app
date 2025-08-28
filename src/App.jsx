import React, { useState, useEffect } from 'react';
import './App.css'; // This file is for styling

function App() {
  // State for our counter
  const [count, setCount] = useState(0);
  // State to store the message from our back-end
  const [message, setMessage] = useState('');

  // useEffect runs once when the component first loads
  useEffect(() => {
    // Fetch the data from our back-end API
    fetch('http://localhost:3001/api/message')
      .then(res => res.json()) // Parse the response as JSON
      .then(data => setMessage(data.message)); // Update the state with the message
  }, []); // The empty array means this effect runs only once

  return (
    <div className="App">
      <h1>Front-End Application</h1>
      
      {/* Our counter component */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {/* Display the message from the back-end */}
      <h2>Message from the Back-End:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;