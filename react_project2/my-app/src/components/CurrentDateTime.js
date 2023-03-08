import React, { useState, useEffect } from 'react';

function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div>
      <h1>Current Date and Time:</h1>
      <p>{formattedDateTime}</p>
    </div>
  );
}

export default CurrentDateTime;
