import React from 'react'
import { useState, useEffect } from 'react';

function Timer({setStop, questionNumber}) {
    const[timer, setTimer] = useState(30);

    useEffect(() => {
        if(timer === 0) return setStop(true);
        const interval = setInterval(() => {
            setTimer(prev => (prev > 0  ? prev -1 : 0));
        },1000);

        return () => clearInterval(interval);
    },[])
    
    useEffect(() => {
        setTimer(30);
      }, [questionNumber]);

  return (
    <div>
      {timer}
    </div>
  )
}

export default Timer
