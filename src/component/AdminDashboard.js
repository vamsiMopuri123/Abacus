import React from 'react'
import AdminAcademy from './AdminAcademy'
import {Nav} from "react-bootstrap"
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Course from './Course';
import Students from './Students';
import "../App.css"

export default function AdminDashboard() {
  function onLogout(e){
    e.preventDefault();
}
  return (
    <div>
    <nav className="navbar navbar-dark bg-primary justify-content-between">
    <a className="navbar-brand">Admin Home Page</a>
    <form className="form-inline">
    {/* <Nav.Link as={Link} to={"/AdminDashboard"}>AdminDashboard</Nav.Link>  
   <Nav.Link as={Link} to={"/Academy"}>Academy</Nav.Link> 
   <Nav.Link as={Link} to={"/Enrolledcourses"}>Enrolledcourses</Nav.Link> */}
    <Nav.Link as={Link} to={"/AdminAcademy"}>AdminAcademy</Nav.Link> 
    <Nav.Link as={Link} to={"/Course"}>Course</Nav.Link>
    <Nav.Link as={Link} to={"/Students"}>Students</Nav.Link>
    <Nav.Link as={Link} to={"/Logout"}>Logout</Nav.Link>
   </form>
   </nav>
   <center >     
    <input className="form-control mr-sm-2" type="search"  style={{backgroundColor: "lightgreen"}} placeholder="Type here search " aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0"  style={{backgroundColor: "lightgreen"}} type="Search">Search</button>
    
    </center>
    
    <Routes>
        <Route path="/AdimAcademy" element={<AdminAcademy/>}>
            AdminAcademy
        </Route>
         <Route path="/Course" element={<Course/>}>
            Enrolledcourses
        </Route>
         <Route path="/Students" element={<Students/>}>
            Students
        </Route>  
    </Routes>
</div>
  )
}
