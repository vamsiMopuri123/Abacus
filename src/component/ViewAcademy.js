import React, { Component } from 'react'
import axios from "axios";
import "../App.css"


export default class ViewAcademy extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8080/api/view_academy")
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
  render() {
    const{posts}=this.state
    return (
      <div>
        <center>
       <h1 style={{background:"blue"}}> List of Academy</h1>
       </center>
         {
            posts.length?
            posts.map((post)=>(
            <div key={post.id}>
              Id:{post.id},
              Academy_Name:{post.academyname},
              Contact_Number:{post.contactnumber},
              Image_Url:{post.imageurl},
              Email_id:{post.emailid},
              Academy_Location:{post.academylocation},
              Academy_Description:{post.academydescription}
            </div>)):
            null
            
        } 
            
            
      </div>
    )
  }
}

