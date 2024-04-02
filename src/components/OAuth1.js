import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import CryptoJS from 'crypto-js';


function OAuth2() {

    const encryptAndStore = (key, data) => {
        const encryptedData = CryptoJS.AES.encrypt(data, key).toString();
        localStorage.setItem(key, encryptedData);
        console.log(data)
      };
    // const auth1 = "exist"
    const navData = useLocation();
    const nav = useNavigate();
    const [dataNew, setData] = useState([]);
    const [rollName, setRollName] = useState("");
    const [pass, setPass] = useState("");
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const [roll, setRoll] = useState('')
    const [Name1, setName1] = useState('')




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
            if (res.status === 200) {
                console.log("status code match")
                nav('/');
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    const onCont = async () => {
        let a = document.querySelector(".loader")
        a.style.width = "96%"

        try {

            const a = navData.state.rollNo;
            const b = pass;
            console.log(a, b)
            const res = await fetch(`${process.env.REACT_APP_BASE_URL_TWO}OAuth1`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ a, b }),
                credentials: "include"
            })
            if (res.ok) {
                setLoader(true)
                const data = await res.json();
                if (data.auth === "valid") {
                    nav('/', { state: { roll: data.roll, username: data.username } });
                    encryptAndStore(`${process.env.KEY}`,JSON.stringify(data));
                }
                else if (data.auth !== 'valid') {
                    setLoader(false)
                    alert('Incorrect Password')
                    a.style.width = "0%"
                }
                console.log(data)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const forgotPass = () => {
        const email = navData.state.email;
        const username = navData.state.username;
        const roll = navData.state.rollNo;
        nav('/email-verification', { state: { username: username, rollNo: roll, email: email } })
    }



    useEffect(() => {
        try {
            onLoad()
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

    return (
        <>
            <div className="loader"></div>
            <header className='_Project-Name'>
                PageRoll
            </header>
            <main>
                <h1 className='passHead'>Enter your password</h1>
                <div className="emailInp">
                    <input value={rollName} type="text" id='Email' required />
                    <br />
                    <label className='emailLabel' htmlFor="Email">Name</label>
                </div>
                <div className="passInp">
                    <input onChange={(text) => setPass(text.target.value)} type="password" id='password' required />
                    <br />
                    <label className='emailLabel' htmlFor="password">Password</label>
                </div>
                <div className="contBtn">
                    <button onClick={onCont}>Log in</button>
                </div>
                <p className='registerLine'><span onClick={forgotPass} className='register'>Forgot password?</span></p>
                <div className="orSec">
                    <div></div>
                    <p>by CodersTek</p>
                    <div></div>
                </div>
            </main>
        </>
    );
}

export default OAuth2