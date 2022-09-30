import React from 'react'
import AddCourse from './AddCourse';
import {useNavigate} from "react-router-dom"
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "../App.css"


export default function Course() {
    const navigate=useNavigate();
    const clickhandler=()=>{
        navigate("/AddCourse")
    }
  return (
    <div>
        <center>
        <h1 style={{background:"blue"}}>Course</h1>
        <p className="lead">
             <button className="btn btn-success" style={{background:"red"}}
                        onClick={clickhandler}>AddCourse 
             </button>
        </p>
        <Routes>
            <Route path="/AddCourse" element={<AddCourse/>}>
                AddCourse
            </Route>
        </Routes>
        </center>
    </div>

  )
}
