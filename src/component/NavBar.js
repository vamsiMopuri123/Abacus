import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Academy from "./Academy"
import Enrolledcourses from "./Enrolledcourses"
import Login from "./Login"
import AdminDashboard from './AdminDashboard'
import {Nav} from "react-bootstrap"
import "../App.css"


export default function NavBar() {
    function onLogout(e){
        e.preventDefault();
    }
  return (
    
    <div>
        <nav className="navbar navbar-dark bg-primary justify-content-between">
        <a className="navbar-brand">Abacus academy</a>
        <form className="form-inline">
        <Nav.Link as={Link} to={"/AdminDashboard"}>AdminDashboard</Nav.Link>  
       <Nav.Link as={Link} to={"/Academy"}>Academy</Nav.Link> 
       <Nav.Link as={Link} to={"/Enrolledcourses"}>Enrolledcourses</Nav.Link>
        <Nav.Link as={Link} to={"/Logout"}>Logout</Nav.Link> 
       </form>
       </nav>
       <center >     
        <input className="form-control mr-sm-2" type="search"  style={{backgroundColor: "lightgreen"}} placeholder="Type here search " aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" style={{backgroundColor: "lightgreen"}} type="Search">Search</button>
        
        </center>
        
        <Routes>
            <Route path="/Academy" element={<Academy/>}>
                Academy
            </Route>
            <Route path="/Enrolledcourses" element={<Enrolledcourses/>}>
                Enrolledcourses
            </Route>
            <Route path="/AdminDashboard" element={<AdminDashboard/>}>
                AdminDashboard
            </Route> 
        </Routes>
    </div>
    
  )
}
