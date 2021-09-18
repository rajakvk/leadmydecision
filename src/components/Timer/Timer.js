import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({choose, chosen, setChosen, setThisSelected, setThatSelected}) => {
  let timer;
  // todo: Get timer value from user
  const [ counter, setCounter ] = useState(6);

  const startTimer = () => {
    timer = setTimeout( () => {
      if(counter === 0) {
        if(!chosen) choose();
        clearTimeout(timer);
      } else {
        setCounter(counter-1);
      }
    }, 1000);
  };

  const resetTimer = () => {
    setCounter(6);
    setChosen(false);
    setThisSelected(false);
    setThatSelected(false);
    if(timer) clearTimeout(timer);
  };

  const stopTimer = () => {
    if(timer) clearTimeout(timer);
  }

  useEffect( ()=> {
    startTimer();
  }, [counter]);

  return (
    <div className="timer-container">
      <button 
        onClick={resetTimer}>
          Start
      </button>
      &nbsp;
      Timer: {counter} 
      &nbsp;
      <button 
        onClick={stopTimer}>
          Stop
      </button>
    </div>
  )
}

export default Timer;