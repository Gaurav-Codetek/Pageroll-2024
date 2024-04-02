import React from 'react'
import axios from 'axios'
import logo from './logo.svg'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
function Signup(){
    const history = useNavigate();
    const [username, setUsername] = useState('')
    const [roll, setRoll] = useState('')
    const [pass, setPass] = useState('')

   async function onSubmit(e){
        e.preventDefault()

        try{
            await axios.post(`${process.env.REACT_APP_BASE_URL}signup`,{
                roll, pass, username
            }).then(res=>{
                if(res.data==="exist"){
                    alert("User already registered!")
                }
                else if(res.data==="notexist"){
                    history('/')
                }
            }).catch(err=>console.log(err))
        }
        catch(e){
            console.log(e)
        }
    }
    return(
        <>
        <div className="login">
         
         <form onSubmit={onSubmit} method="POST">
         <img src={logo} alt="Logo" />
         <h3>Sign Up</h3>

            <label htmlFor="Name" className='roll'>Name</label>
            <input type="text" id='Name' onChange={(e)=> {setUsername(e.target.value)}} placeholder='Full Name' required/>
            <br />
            <br />
            <label htmlFor="rollno" className='roll'>Roll No.</label>
            <input type="text" id='rollNo' onChange={(e)=> {setRoll(e.target.value)}} placeholder='UIET Roll NO' required/>
            <br />
            <br />
            <label htmlFor="password" className='pass'>Password</label>
            <input type="password" id='password' onChange={(e)=> {setPass(e.target.value)}} placeholder='Enter the Password' required/>
            <br />
            <br />
            <input type="submit" value="Submit" />
            <p> Already registered?<Link to="/">Sign in</Link></p>
         </form>
         
         </div>
        </>
    )
}

export default Signup