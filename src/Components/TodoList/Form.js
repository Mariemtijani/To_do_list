import React, { useEffect, useState,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import './form.css';
import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Timer from '../Timer/Timer';

export default function Form() {

  // declare the state from redux store
  const allTasks = useSelector((state) => state.tasks);

  // no completed tasks
  const notCompleted = allTasks.filter((task) => task.completed == false)

  // declare the dispatch to use the actions
  const dispatch = useDispatch();

  // declare the states
  const [task, setTask] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [day, setDay] = useState('Today');


  useEffect(() => {
    const today = dayjs();
    const tomorrow = today.add(1, 'day');
    const next7Days = today.add(7, 'day');

    if (dayjs(selectedDate).isSame(today, 'day')) {
      setDay('Today');
    } else if (dayjs(selectedDate).isSame(tomorrow, 'day')) {
      setDay('Tomorrow');
    } else if (dayjs(selectedDate).isBefore(next7Days.endOf('day')) && dayjs(selectedDate).isAfter(today.endOf('day'))) {
      setDay('Next 7 days');
    } else {
      setDay(dayjs(selectedDate).format('MM-DD-YYYY'));
    }
  }, [selectedDate]);

  const addToTasks = () => {
    if (task !== ''){
      dispatch({
        type: 'add',
        payload: { id: uuid(), name: task, date: day },
      });
    }
    

    setTask('');
  };

  const deleteTask = (id) => {
    dispatch({
      type: 'del',
      payload: id,
    });
  };

  const doneTasks = (id) => {
    dispatch({
      type: 'done',
      payload: id,
    });
  };

//  timer section 

const [time, setTime] = useState(1500);
const [isActive , setIsActive] = useState(false);
const [workingTaskId, setWorkingTaskId] = useState(null);

  const timerRef = useRef(null)

  const green = '#93C572';

  const red = '#FA8072';

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };



  const startPomodoro = (taskId) => {

    clearInterval(timerRef.current);

    setIsActive(true);
    setWorkingTaskId(taskId);

    const startTime = Date.now();

    console.log(Date.now());
  
    timerRef.current = setInterval(() => {
      const timePassed = Date.now() - startTime;
      const timeLeft = 1500 - Math.floor(timePassed / 1000);
  
      if (timeLeft > 0) {
        setTime(timeLeft);
      } else {
        clearInterval(timerRef.current);
        setIsActive(false);
        setTime(0); 
      }
    }, 1000);
  };

  const stopPomodoro = () => {

    clearInterval(timerRef.current);
    setIsActive(false);
    setTime(1500);
    
  }

  const shortBreak = () => {
    clearInterval(timerRef.current);
    setIsActive(true);
    setTime(300);

    const startTime = Date.now();
  
    timerRef.current = setInterval(() => {
      const timePassed = Date.now() - startTime;
      const timeLeft = 300 - Math.floor(timePassed / 1000);
  
      if (timeLeft > 0) {
        setTime(timeLeft);
      } else {
        clearInterval(timerRef.current);
        setIsActive(false);
        setTime(time); 
      }
    }, 1000);
    
  }

  const longBreak = () => {
    clearInterval(timerRef.current);
    setIsActive(true);
    setTime(900);

    const startTime = Date.now();
  
    timerRef.current = setInterval(() => {
      const timePassed = Date.now() - startTime;
      const timeLeft = 900 - Math.floor(timePassed / 1000);
  
      if (timeLeft > 0) {
        setTime(timeLeft);
      } else {
        clearInterval(timerRef.current);
        setIsActive(false);
        setTime(time); 
      }
    }, 1000);
  }


  return (
    <div className=''>
      <h3 className='all-header text-secondary p-2'>All Tasks</h3>
      <div className="form">
          <div className="inputs">
          <div className="placeholder-text text-secondary">Add New Task</div>
                <input
                  type="text"
                  className="form-control border p-2   "
                  placeholder="type here .."
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  
                />
          </div>
        <div className='dates'>
          
        <div className="placeholder-text text-secondary">Select Date</div>
         
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM-dd-yyyy"
            className='text-muted border p-2 rounded '
            placeholderText="Select Date" 
            
           
          />


        </div>

        <button
            className="btn btnAdd"
            id="basic-addon2"
            onClick={addToTasks}
          >
            Add
          </button>
      </div>

      <div className="showTasks">
        {notCompleted.length ? (
          <>
            {notCompleted.map((item, ind) => {
              return (
                <Task
                  key={item.id}
                  number={ind + 1}
                  text={item.name}
                  deleteTodo={() => deleteTask(item.id)}
                  completed={item.completed}
                  markDone={() => doneTasks(item.id)}
                  date={item.date}
                  startPomodoro = {() => startPomodoro(item.name)}
                  
                  
                />
              );
            })}
          </>
        ) : (
          <div className='text-secondary fw-bold my-5'>You have no incomplete tasks in this list, wohoo!</div>
        )}
      </div>
      
      <Timer 
        workingTask = {workingTaskId}
        time = {formatTime(time)}
        valueP = {(time / 1500) * 100}
        startPomodoro = {() => startPomodoro(task.id)}
        stopPomodoro = {() => stopPomodoro()}
        longBreak = {() => longBreak()}
        shortBreak = {() => shortBreak()}
        />
    
      
    </div>
  );
}
