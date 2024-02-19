import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import todoList from '../../Icons/to-do-list.png';
import menu from '../../Icons/menu.png';
import './nav.css';
import { Link } from 'react-router-dom'
import allTasks from '../../Icons/task.png'
import planned from '../../Icons/done.png'
import history from '../../Icons/history.png'
import today from '../../Icons/today2.png'
import calendar from '../../Icons/calendar.png'
import thisWeek from '../../Icons/this week.png'
import tomorrow from '../../Icons/tomorrow.png'
import completed from '../../Icons/completed.png'

function NavElament(props) {
  return (
    <Navbar expand="sm" fixed="top" className="shadow-sm" style={{ backgroundColor: "#fffffe" }}>
      <Container fluid>
        <Navbar.Brand href="#" className='logo'>
          <div className='d-inline'>
            <img src={todoList} style={{ width: '40px' }} alt="" />
          </div>

          <div className='logo_name'>
            Remember<span className='todo_span'>Todo</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Add the search form */}
          {/* <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 input_search"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

          <Nav className="ms-auto">
            {/* Add your existing Nav items or links here */}
            <div className='nav-menu'>
      <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}> 
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavElament;
