import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(intervalId);
    }
  }, [timer]);

  return (
    <div>
      <h2>Таймер</h2>
      <p>{timer}</p>
    </div>
  );
}

export default CountdownTimer;
