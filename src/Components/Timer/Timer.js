import React, { useState, useRef } from 'react'
import './timer.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Timer(props) {

  

  const [time, setTime] = useState(1500);
  // const [isActive , setIsActive] = useState(false);

  // const timerRef = useRef(null)

  const green = '#93C572';

  // const red = '#FA8072';

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };



  // const startPomodoro = () => {

  //   clearInterval(timerRef.current);

  //   setIsActive(true);
  //   const startTime = Date.now();

  //   console.log(Date.now());
  
  //   timerRef.current = setInterval(() => {
  //     const timePassed = Date.now() - startTime;
  //     const timeLeft = 1500 - Math.floor(timePassed / 1000);
  
  //     if (timeLeft > 0) {
  //       setTime(timeLeft);
  //     } else {
  //       clearInterval(timerRef.current);
  //       setIsActive(false);
  //       setTime(0); 
  //     }
  //   }, 1000);
  // };

  // const stopPomodoro = () => {

  //   clearInterval(timerRef.current);
  //   setIsActive(false);
  //   setTime(1500);
    
  // }

  // const shortBreak = () => {
  //   clearInterval(timerRef.current);
  //   setIsActive(true);
  //   setTime(300);

  //   const startTime = Date.now();
  
  //   timerRef.current = setInterval(() => {
  //     const timePassed = Date.now() - startTime;
  //     const timeLeft = 300 - Math.floor(timePassed / 1000);
  
  //     if (timeLeft > 0) {
  //       setTime(timeLeft);
  //     } else {
  //       clearInterval(timerRef.current);
  //       setIsActive(false);
  //       setTime(time); 
  //     }
  //   }, 1000);
    
  // }

  // const longBreak = () => {
  //   clearInterval(timerRef.current);
  //   setIsActive(true);
  //   setTime(900);

  //   const startTime = Date.now();
  
  //   timerRef.current = setInterval(() => {
  //     const timePassed = Date.now() - startTime;
  //     const timeLeft = 900 - Math.floor(timePassed / 1000);
  
  //     if (timeLeft > 0) {
  //       setTime(timeLeft);
  //     } else {
  //       clearInterval(timerRef.current);
  //       setIsActive(false);
  //       setTime(time); 
  //     }
  //   }, 1000);
  // }

  


  return (
    <div className='timer-container   ' >
      <h2 className='text-secondary ' style={{ textTransform : 'capitalize' }}>{props.workingTask ? props.workingTask : ''}</h2>
      <div className="time" style={{ width: 200, height: 200 }}>
      <CircularProgressbar value={props.valueP} text={props.time} 
      styles={buildStyles({
        textColor : '#000',
        pathColor : green,
      })}/>
      </div>
      
      <div className="time-action">
        
        <div>
          <button onClick={props.startPomodoro}>Start</button>
          <button onClick={props.stopPomodoro}>Stop</button>
        </div>
        <div>
          <button onClick={props.shortBreak}>Short Break</button>
          <button onClick={props.longBreak}>Long Break</button>
        </div>
      </div>
    </div>
  )
}

