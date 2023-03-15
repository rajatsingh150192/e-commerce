import { Button } from "react-bootstrap"
import React, {useEffect, useState } from "react"
import Header from "../layout/Header"
import { useNavigate  } from "react-router-dom"


function Login() {
   
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/product/add')
        }
    },[])
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const navigate = useNavigate();
    async function authLogin()
    {
        let form_data = {email,password}
        const api_data = await fetch('http://localhost:4200/api/auth/login',{
            method:'POST',
            headers:{
                'Content-type':"application/json",
                'Accept':"application/json",
            },
            body:JSON.stringify(form_data)
            });
        let result = await api_data.json();
        console.log(result)
        if(result.status==1)
        {
            localStorage.setItem('user-info',JSON.stringify(result.user[0]))
            navigate("/product/add");
           // navigate("/product/add");
            
        }
        else
        {

        }

    }
    return (
        <>
              <Header></Header>
       
        <div className ="col-md-6 offset-sm-3">
             <h4>Login</h4>
            <div className="form-group" style={{textAlign:"left"}}>
                <label htmlFor="email" >Email</label>
                <input class="form-control" type="text" placeholder="Enter Email Id" aria-label=" " onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group" style={{textAlign:"left"}}>
                <label htmlFor="password">Password</label>
                <input class="form-control" type="text" placeholder="Enter Password Id" aria-label=" " onChange={(e)=>setPassword(e.target.value)}/>
            </div>
           
            <div className="form-group">

            <Button onClick={authLogin}> Login</Button>
            </div>
        </div>
        </>
    )
}
export default Login