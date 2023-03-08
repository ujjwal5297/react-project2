import React, { useState, useEffect } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let newGreeting = '';

    if (currentHour >= 6 && currentHour < 12) {
      newGreeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 19) {
      newGreeting = 'Good afternoon';
    } else {
      newGreeting = 'Good night';
    }

    setGreeting(newGreeting);
  }, []);

  const greetingStyle = {
    color: '#007bff',
  };

  return (
    <div>
      <h1 style={greetingStyle}>Hello/Hi {greeting}!</h1>
      <p style={{ color: '#28a745' }}>This is a React app</p>
    </div>
  );
}

export default App;
