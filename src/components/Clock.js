import React, { useEffect } from 'react';
import './Clock.css';
import moment from 'moment';

const Clock = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function updateTime() {
    document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
    document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
    document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
  }

  return (
    <div className="clock-container">
      <div className="clock-col">
        <p className="clock-day clock-timer"></p>
        <p className="clock-label">Day</p>
      </div>
      <div className="clock-col">
        <p className="clock-hours clock-timer"></p>
        <p className="clock-label">Hours</p>
      </div>
      <div className="clock-col">
        <p className="clock-minutes clock-timer"></p>
        <p className="clock-label">Minutes</p>
      </div>
      <div className="clock-col">
        <p className="clock-seconds clock-timer"></p>
        <p className="clock-label">Seconds</p>
      </div>
    </div>
  );
};

export default Clock;
