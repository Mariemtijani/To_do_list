import React, { useState } from 'react'
import menu from '../../Icons/menu.png'
import './side.css'
import allTasks from '../../Icons/task.png'
import planned from '../../Icons/done.png'
import history from '../../Icons/history.png'
import today from '../../Icons/today2.png'
import calendar from '../../Icons/calendar.png'
import thisWeek from '../../Icons/this week.png'
import tomorrow from '../../Icons/tomorrow.png'
import completed from '../../Icons/completed.png'
import { Link } from 'react-router-dom'

export default function Side() {

  const [side,setSide] = useState(true)

  const sideToggle = () => {
    setSide(!side)
  }
  return (

      <>
      
      <img src={menu} alt="" className = {`after_img`}
        onClick={sideToggle} />
        <div className={`side_section ${side ? 'show' : ''} shadow-sm`} style={{ backgroundColor : "#fffffe"}}>
         
        <img src={menu} alt="" className='side_img' onClick={sideToggle} />
    <div className='side_menu'>
      <Link to='/To_do_list' style={{ textDecoration: 'none', color: 'inherit' }}> 
        <h6>
          <img src={allTasks} alt=""  />
          <span>All Tasks</span>
        </h6>
      </Link>
      <Link to='/today' style={{ textDecoration: 'none', color: 'inherit' }}> 
        <h6>
          <img src={today} alt=""  /> 
          <span>Today</span>
        </h6>
      </Link>
      <Link to='/tomorrow' style={{ textDecoration: 'none', color: 'inherit' }}> 
        <h6 >
          <img src={tomorrow} alt=""  /> 
          <span>Tomorrow</span>
        </h6>
      </Link>
       <Link to='/thisweek' style={{ textDecoration: 'none', color: 'inherit' }}>
         <h6>
            <img src={thisWeek} alt=""  />
            <span>This week</span>
          </h6>
        </Link>
       <Link to='/history' style={{ textDecoration: 'none', color: 'inherit' }}>
         <h6>
          <img src={completed} alt=""  /> 
         <span>Completed</span>
         </h6>
        </Link>
    </div>
  
</div> 
      </>
 
      
       
      
  
      
   
  )
}
