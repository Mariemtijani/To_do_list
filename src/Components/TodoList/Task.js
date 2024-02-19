import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faTrash,faCircleCheck,faPlay } from '@fortawesome/free-solid-svg-icons'
import './task.css'
// Import necessary dependencies, including useDispatch from react-redux
import { useDispatch } from 'react-redux';

export default function Task(props) {

  const textStyle = {
    textDecoration: props.completed ? 'line-through' : 'none'
   
};



  return (

    

    <div className='todo-container'  >
      <li className='  p-3 d-flex justify-content-between border border-1 ' >
        <div className='taskText d-flex align-items-center ' style={textStyle}>
        <span className='todoNumber '>{props.number }</span>
          <span className='fw-bold text-muted' style={{ textTransform : 'capitalize' }}>{props.text}</span>
          
          
        </div>
        
        <h6 className='fw-bold text-muted '>{props.date}</h6>

        {props.completed == false ? (
          <div className='iconDiv'>
            <span title='Completed / Not completed' onClick={props.markDone}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>

            <span title='Delete' onClick={props.deleteTodo}>
              <FontAwesomeIcon icon={faTrash} />
            </span>

            <span title='start pomodoro' onClick={props.startPomodoro} >
              <FontAwesomeIcon icon={faPlay} />
            </span>
          </div>
        ) : null}
        

       
         
      </li>
    </div>
  
  )
}
