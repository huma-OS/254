import React, { useEffect, useState} from "react";

interface TimeRemaining {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeRemaining = (endtime: Date): TimeRemaining => {
  const total = Date.parse(endtime.toString()) - Date.parse(new Date().toString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps>  = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);
  return ( 
 
      <div id="clockdiv">
    <div>
      <span className="days">{timeRemaining.days}</span>
      <div className="smalltext">Days</div>
    </div>
    <div>
      <span className="hours">{('0' + timeRemaining.hours).slice(-2)}</span>
      <div className="smalltext">Hours</div>
    </div>
    <div>
      <span className="minutes">{('0' + timeRemaining.minutes).slice(-2)}</span>
      <div className="smalltext">Minutes</div>
    </div>
    <div>
      <span className="seconds">{('0' + timeRemaining.seconds).slice(-2)}</span>
      <div className="smalltext">Seconds</div>
    </div>
  </div>
    
   );
}
 
export default CountdownTimer;