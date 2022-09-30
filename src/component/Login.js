import React, { Component } from 'react'
import axios from "axios"
import '../App.css';

 class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    emailhandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    passwordhandler=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.email} ${this.state.password} Logged in Successfully`)
        console.log(this.state);
        this.setState({
            email:"",
            password:"",
        })
        event.preventDefault();
         axios.post("http://localhost:8080/api/add_login",this.state)
         .then(response=>{
            console.log(response)
           })
           .catch(error=>{
            console.log(error)
           })
           
    }
    
  render() {
    return (
      <div className="container">
        
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
       <form onSubmit={this.handleSubmit}>
        <h1 className="text-center m-4" style={{color: "blue",backgroundColor: "violet"}}>Login</h1>
         <input
         type="text"
         value={this.state.email}
         onChange={this.emailhandler}
         name="email"
         placeholder="email" 
         /> <br />
         <input
         type="password"
         value={this.state.password}
         onChange={this.passwordhandler}
         name="password"
         placeholder="password" 
          /> <br />
         <button style={{backgroundColor: "red"}}>
          Submit
        </button>
        </form>
      </div>
      </div>
      </div>
    )
  }
}

export default Login;
