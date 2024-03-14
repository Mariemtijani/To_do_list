import { Route, Routes } from "react-router-dom";
import NavElament from "./Components/Navbar/Nav";
import Side from "./Components/Side/Side";
import Form from "./Components/TodoList/Form";
import dayjs from "dayjs";
import { useEffect } from "react";
import Completed from "./Components/TodoList/Completed";
import Today from "./Components/TodoList/Today";
import Tomorrow from "./Components/TodoList/Tomorrow";
import ThisWeek from "./Components/TodoList/ThisWeek";
import Timer from './Components/Timer/Timer'


function App() {


  return (
    
    <div>
      <NavElament/>
      <Routes>
        <Route path="/To_do_list" element={<Form />}/>
        <Route path="/history" element={<Completed />}/>
        <Route path="/today" element={<Today />}/>
        <Route path="/tomorrow" element={<Tomorrow />}/>
        <Route path="/thisweek" element={<ThisWeek />}/>
        
      </Routes>

        
      
      <Side />

       
    </div>
  );
}

export default App;
