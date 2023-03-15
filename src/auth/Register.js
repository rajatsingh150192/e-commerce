import { Button } from "react-bootstrap"
import  React, {useEffect, useState } from 'react'
import Header from "../layout/Header"
import { useNavigate } from "react-router-dom"

function Register()
{
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/product/add')
        }
    },[]);
    const navigate = useNavigate()
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    async function signUp()
    {
      
       
        let formvalue={name,password,email}
        console.log(formvalue)
        const api_data = await fetch('http://localhost:4200/api/auth/registration',{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
                'Accept':"application/json"
            },
            body:JSON.stringify(formvalue)
        });
        let result = await api_data.json();
        console.log(result)
      //  if(result.status==1)
           // navigate('/login')

    }
    return (
        <>
              <Header></Header>
        <div className="col-md-6 offset-sm-3">
             <h4>Registration</h4>
             <div className="form-group" style={{textAlign:"left"}}>
                <label htmlFor="name" >Name</label>
                <input class="form-control" type="text" placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className ="form-group" style={{textAlign:"left"}}>
                <label htmlFor="email" >Email</label>
                <input class="form-control" type="text" placeholder="Enter Email Id" onChange={(e)=>setEmail(e.target
                    .value)}/>
            </div>
           
            <div className="form-group" style={{textAlign:"left"}}>
                <label htmlFor="password">Password</label>
                <input class="form-control" type="text" placeholder="Enter Password Id"  onChange={(e)=>setPassword(e.target.value)}/>
            </div>
           
            <div className="form-group">

            <Button onClick={signUp}> Registration</Button>
            </div>
        </div>
        </>
    )
}
export default Register