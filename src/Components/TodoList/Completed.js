import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Task from './Task';
import './form.css'

export default function Completed() {

    const allTasks = useSelector((state) => state.tasks);

     // completed tasks
  const completedTasks = allTasks.filter((task) => task.completed == true);

  return (
    <div className='completed-tasks ' >
        <h3 className='text-secondary fw-bold border-3 border-bottom p-2'
         >
            Completed tasks ({completedTasks.length})
        </h3>
      {completedTasks.map((task,ind) => {
        return (
            <Task 
            key={task.id}
            number={ind + 1}
            text={task.name} 
            date={task.date}/>
        )
      })}
    </div>
  )
}
