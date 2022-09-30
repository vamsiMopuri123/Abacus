import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Nav} from "react-bootstrap"
import Enroll from './Enroll'
import {useNavigate} from "react-router-dom"
import "../App.css"

export default function Enrolledcourses() {
    const navigate = useNavigate();
    const clickhandler = () => {
        navigate("/Enroll")
    }
  return (
    
    <div>
        <nav >
        <h1 style={{background:"blue"}}>Enrolledcourses</h1>
        <input className="form-control mr-sm-2" style={{background:"lightblue"}} type="search" placeholder="Type here search course" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="Search" style={{background:"lightgreen"}}>Search</button><br /><br />
        <form style={{background:"lightgreen"}}>
        <lable className="text-center m-4">Course name:Doug Abacus</lable><br/>
        <lable className="text-center m-4">Course Duration:3 months</lable><br/>
        <lable className="text-center m-4">Course Available Timings:6am to 6pm</lable><br/>
        <lable className="text-center m-4">Number of Students:222</lable><br/>
        <lable className="text-center m-4">Course Description:yyyy </lable><br /><br />
        <p className="lead">
             <button className="btn btn-success"
                        onClick={clickhandler}>Enroll 
             </button>
        </p>
        </form>
        <form style={{background:"lightgreen"}}>
        <lable className="text-center m-4">Course name:Melissa & Doug Add Abacus</lable><br/>
        <lable className="text-center m-4">Course Duration:5 months</lable><br/>
        <lable className="text-center m-4">Course Available Timings:6am to 6pm</lable><br/>
        <lable className="text-center m-4">Number of Students:122</lable><br/>
        <lable className="text-center m-4">Course Description:yyyy </lable><br />
       
        
        <p className="lead">
             <button className="btn btn-success"
                        onClick={clickhandler}>Enroll 
             </button>
        </p>
        </form>
        </nav>

         <Routes>
            <Route path="/Enroll" element={<Enroll/>}>
                Enroll
            </Route>
        </Routes> 
   
    </div>

  )
}
