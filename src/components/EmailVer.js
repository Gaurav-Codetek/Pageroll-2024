import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import VerOtp from './VerOtp';
import Loader from './Loader';

function EmailVer() {
    const nav = useNavigate()
    const navData = useLocation()
    const [email, setEmail] = useState("");
    const [hideEmail, setHideEmail] = useState("")
    const [func, setFunc] = useState(true)
    const [btnName, setBtnName] = useState("Send OTP")
    const [otpWin, setOtpWin] = useState()
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
            // setData(data);
            if (res.status === 200) {
                console.log("status code match")
                nav('/');
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const onCont = async (e) => {
        setLoader(true)
        let a = document.querySelector(".loader")
        a.style.width = "96%"
        if(email !== navData.state.email){
            setLoader(false)
            alert("Email error: Please enter correct email!")
            a.style.width="0%"
        }

        e.preventDefault()
        try {
            const rollNo = navData.state.rollNo;

            const res = await fetch(`${process.env.REACT_APP_BASE_URL_TWO}EmailVer`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ rollNo, email }),
                credentials: "include"
            })
            if (res.ok) {
                
                const data = await res.json();
                // var username = data.username;
                console.log("resp came")
                if (data === "exist") {
                    setLoader(false)
                    // nav('/auth1', { state: { username: data.username, rollNo: rollNo } })
                    // console.log("email Sent")
                    setFunc(false);
                }

                else if (data.auth !== "exist") {
                    alert("Roll Number doesn't exist")
                    a.style.width = "0%"
                    setLoader(false)
                }
                else {
                    console.log("err")
                    setLoader(false)
                }
            }
            else {
                console.log("response not ok")
                setLoader(false)
            }
        }
        catch (err) {
            console.log(err)
            setLoader(false)
        }
    }

    const emailHidden = () => {
        const data = navData.state.email;
        console.log(data)
        const n = data.length

        for (var i = 0; i < n; i++) {
            if (data.charAt(i) === "@") {
                const result = data.charAt(0) + data.charAt(1) + data.charAt(2) + "xxxxx" + data.slice(i);
                console.log(result)
                setHideEmail(result)
                break;
            }
        }
    }

    const onVerify = async () => {
        setLoader(true)
        const rollNo = navData.state.rollNo
        console.log(rollNo)
        const res = await fetch(`${process.env.REACT_APP_BASE_URL_TWO}verifyCode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ rollNo, email }),
            credentials: "include"
        })
        if (res.ok) {
            const data = await res.json();
            if (data.auth === "exist") {
                nav('/pass-change', { state: { username: data.username, rollNo: rollNo } })
            }
            else if (data !== "exist") {
                setLoader(false)
                setFunc(true);
                alert("Incorrect OTP: Try again")
            }
        }
    }

    useEffect(() => {
        onLoad()
        emailHidden()
    }, [])

    return (

        <>
        {loader ? (<Loader/>):(<></>)}

            {func ? (<></>) : (
                <>
                    <div className="otpWin">
                        <div className="otpForm">
                            <h1 className='welBackOtp'>Enter verification code</h1>
                            <p className='registerLine'>Verification code sent to your email!<span className='register'></span> </p>

                            <div className="emailInpOtp">
                                <input maxLength="5" onChange={(text) => setEmail(text.target.value)} type="text" id='EmailOtp' required />
                                <br />
                                <label className='emailLabel' htmlFor="Email">Enter code</label>
                            </div>
                            <div className="contBtnOtp">
                                <button onClick={onVerify}>Verify OTP</button>

                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className="loader"></div>
            <header className='_Project-Name'>
                Birth-Bash
            </header>
            <main>
                <h1 className='welBack'>Welcome back</h1>
                <p className='registerLine'>Your registered email address is similar to <span className='register'>{hideEmail}</span> </p>
                <div className="emailInp">
                    <input onChange={(text) => setEmail(text.target.value)} type="text" id='Email' required />
                    <br />
                    <label className='emailLabel' htmlFor="Email">Enter your email</label>
                </div>
                <div className="contBtn">
                    <button onClick={onCont}>Send OTP</button>
                </div>
                <p className='registerLine'>Please enter registered email address in <span className='register'>UIET</span></p>
                <div className="orSec">
                    <div></div>
                    <p>by CodersTek</p>
                    <div></div>
                </div>
            </main>
        </>
    );
}

export default EmailVer