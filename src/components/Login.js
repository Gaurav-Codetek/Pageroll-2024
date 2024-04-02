import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import './login.css'

function OAuth1() {
    const nav = useNavigate()
    const [roll, setRoll] = useState("");
    const [rollName, setRollName] = useState("")
    const [loader, setLoader] = useState(false)


    const onLoad = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL_TWO}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data)
            if (res.status === 200) {
                console.log("status code match")
                // setLoader(false)
                nav('/');
            }
        }
        catch (err) {
            setLoader(false)
            console.log(err)
        }
    }

    const onCont = async (e) => {

        let a = document.querySelector(".loader")
        a.style.width = "96%"

        e.preventDefault()
        try {

            const res = await fetch(`${process.env.REACT_APP_BASE_URL_TWO}Oauth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ roll }),
                credentials: "include"
            })
            if (res.ok) {
                console.log("ee")
                const data = await res.json();
                console.log(data)

                // var username = data.username;


                if (data.auth === "exist-with-no-passChange") {
                    // setLoader(true)
                    nav('/email-verification', { state: { username: data.username, rollNo: roll, email: data.Email } })
                }

                else if (data.auth === "exist-with-passChange") {
                    // setLoader(true)
                    nav('/auth1', { state: { username: data.username, rollNo: roll, email: data.Email } })
                }
                else if(data.auth === "not-exist"){
                    alert("Roll Number doesn't exist")
                    a.style.width = "0%"
                }
            }
            else {
                console.log("response not ok")
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        onLoad()
        setLoader(true)
    }, [])

    return (
        <>
        {loader ? (<Loader/>):(<></>)}
        <div className="loader"></div>
            <header className='_Project-Name'>
                PageRoll
            </header>
            <main>
                <h1 className='welBack'>Welcome back</h1>
                <div className="emailInp">
                    <input onChange={(text) => setRoll(text.target.value)} type="text" id='Email' required />
                    <br />
                    <label className='emailLabel' htmlFor="Email">Roll number (UIET)</label>
                </div>
                <div className="contBtn">
                    <button onClick={onCont}>Continue</button>

                </div>
                <p className='registerLine'>Use your UIET <span className='register'>Roll Number</span></p>
                <div className="orSec">
                    <div></div>
                    <p>by CodersTek</p>
                    <div></div>
                </div>
            </main>
        </>
    );
}

export default OAuth1