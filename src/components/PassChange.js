import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function PassChange() {
    // const auth1 = "exist"
    const navData = useLocation();
    const nav = useNavigate();
    const [dataNew, setData] = useState([]);
    const [rollName, setRollName] = useState("");
    const [newpass, setNewPass] = useState("");
    const [pass, setPass] = useState("");
    const [password, setPassword] = useState("")


    const onCont = async () => {
        let a = document.querySelector(".loader")
        a.style.width = "96%"

        try {
            const a = navData.state.rollNo;
            const b = pass;
            console.log(a, b)
            const res = await fetch(`${process.env.REACT_APP_BASE_URL_TWO}changePass`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ a, b }),
                credentials: "include"
            })
            if (res.ok) {
                const data = await res.json();
                if (data.auth === 'passChanged') {
                    nav('/', {state: {roll: a, username: data.username}});
                    console.log("landed on root page")
                }
                else if (data.auth !== 'passChanged') {
                    alert('Unknown error Try again!')
                    a.style.width = "0%";
                }
                console.log(data)
            }
        }
        catch (err) {
            console.log(err)
        }
    }    

    useEffect(() => {
        try {
            const Name = navData.state.username;
            setRollName(Name)
        } catch (err) {
            nav('/home')
        }
    }, [])

    // useEffect(()=>{
    //     sessionStorage.getItem(navData.state.username)
    //     const nameOfUser = navData.state.username
    //     sessionStorage.setItem("nameOfUser", nameOfUser)
    //     setRollName(nameOfUser)
    //   },[])

    const unmatchPass = (pass)=>{
        let a = document.getElementById('password');
        if(pass !== newpass){
            a.style.borderColor = "red";
        }
        else if(pass === newpass){
            a.style.borderColor = "#208B81";
            setPass(pass)
        }
    }

    return (
        <>
            <div className="loader"></div>
            <header className='_Project-Name'>
                PageRoll
            </header>
            <main>
                <h1 className='passHead'>Enter your password</h1>
                <div className="emailInp">
                    <input onChange={(text) => setNewPass(text.target.value)} type="password" id='Email' required />
                    <br />
                    <label className='emailLabel' htmlFor="Email">New password</label>
                </div>
                <div className="passInp">
                    <input onChange={(text) => {
                        unmatchPass(text.target.value)
                        // setPass(text.target.value)
                        }} type="password" id='password' required />
                    <br />
                    <label className='emailLabel' htmlFor="password">Confirm password</label>
                </div>
                <div className="contBtn">
                    <button onClick={onCont}>Change Password</button>
                </div>
                <p className='registerLine'>Your password will be Encrypted <span className='register'>Don't worry</span></p>
                <div className="orSec">
                    <div></div>
                    <p>by CodersTek</p>
                    <div></div>
                </div>
            </main>
        </>
    );
}

export default PassChange