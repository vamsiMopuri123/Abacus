import React, { Component } from 'react'
import axios from "axios";
import Login from './Login';
 import {NavLink,BrowserRouter as Router,Routes,Route,redirect} from "react-router-dom"
 import NavBar from './NavBar';
 import {useNavigate} from "react-router-dom"
 import {Nav} from "react-bootstrap"
 import '../App.css';
 

class Form extends Component {
   static navigate=useNavigate;
   static path="/Login";
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            phone:"",
            password:"",
            confirmpassword:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler=(event) => {
        this.setState({
            username:event.target.value
        })
    }
    emailhandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    phonehandler=(event)=>{
        this.setState({
            phone:event.target.value
        })
    }
    passwordhandler=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    confirmpasswordhandler=(event)=>{
        this.setState({
            confirmpassword:event.target.value
        })
      
    }

     handleSubmit=(event)=>{
        
        this.setState({
            username:"",
            email:"",
            phone:"",
            password:"",
            confirmpassword:"",
        })
        event.preventDefault();
        if(this.state.password===this.state.confirmpassword)
       
        {
            alert(`${this.state.username} ${this.state.email} ${this.state.password} ${this.state.phone}
            ${this.state.confirmpassword} ${this.state.password===this.state.confirmpassword} Register successfully `)
            console.log(this.state);
            console.log("register successfully");
            axios.post("http://localhost:8080/api/add",this.state)
            .then(response=>{
            console.log(response)
            })
            .catch(error=>{
            console.log(error)
            })
       
        }
        else{
            alert(`${this.state.password!==this.state.confirmpassword} password not matching`)
            console.log("password not matching");
        }
       
       
    }


  render() {
    return (
        
      <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <form action="action_page.php" onSubmit={this.handleSubmit}>
            <h1 className="text-center m-4" style={{color: "red",backgroundColor: "lightblue"}}>Registration Form</h1>
            
           <select id="user/admin" style={{backgroundColor: "blue"}}>
            <option>user</option>
            <option>admin</option>
           </select> <br />
           
            <input type="text" value={this.state.username} onChange={this.firsthandler} name="username" placeholder="username"/>  <br />
           
            <input type="text" value={this.state.email} onChange={this.emailhandler} name="email" placeholder="email"/> <br />
           
            <input type="text" value={this.state.phone} onChange={this.phonehandler} name="phone" placeholder="phone" /> <br />
          
            <input type="password" value={this.state.password} onChange={this.passwordhandler} name="password" placeholder="password" /> <br />
          
            <input type="password" value={this.state.confirmpassword} onChange={this.confirmpasswordhandler} name="confirmpassword" placeholder="confirmpassword"/> <br />
            <button style={{backgroundColor: "red"}} >
              Submit
            </button> <br />
           

        </form>
       <NavLink actimeClassName="login" to={"/login"}>Login</NavLink>  
         <Routes>
            <Route path="/login" element={<Login/>}>
                Login
            </Route>
         
        </Routes>   
         <div>Already user?</div>
         <div click className="card-link" to="/Login">
            <button  className="btn btn-link btn-block" style={{backgroundColor: "lightblue"}} >
               Login
            </button> 
         </div> 
        </div>
        </div>
        </div>
      
    )
  }
}
export default Form;