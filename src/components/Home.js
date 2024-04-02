import React, { useEffect, useState } from 'react'
import { TiHome } from "react-icons/ti"
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { BsChatSquareDots } from 'react-icons/bs'
import { FiDownload } from 'react-icons/fi'
import { FaImage } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { BsTextParagraph } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillMessage } from "react-icons/ai";
import dp from './Images/dp.jpg'
// import {GrUserManager} from 'react-icons/gr'
// import { MdDarkMode } from 'react-icons/md'
// import {BsFillSunFill} from 'react-icons/bs'
// import {BiSolidDownArrow} from 'react-icons/bi'
import { useNavigate, useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Download from './Download'
import Scrolling from './Scrolling'
import PostForm from './PostForm'
import BlogForm from './BlogForm'
import Commmunity from './Community'


function Home() {

    const nav = useNavigate();
    const location = useLocation();
    const [nameOfUser, setNameOfUser] = useState('')
    const [iconWidth, setIconWidth] = useState('40%')
    const [iconColorD, setIconColorD] = useState('white')
    const [iconColorF, setIconColorF] = useState('white')
    const [iconColorC, setIconColorC] = useState('white')
    const [iconColorH, setIconColorH] = useState('white')
    const [iconColorM, setIconColorM] = useState('white')
    const [blog, setBlog] = useState(false)
    const [post, setPost] = useState(false)
    const [data, setData] = useState([])


    const closeFunc = () => {
        setPost(false)
        setBlog(false)
    }
    const [count, setCount] = useState(<Scrolling roll={data.RollNo} closeFunc={closeFunc} />)


    let navBtnComm = document.querySelector(".navBtnComm")

    const homeNavComm = () => {
        let homeTxt = document.querySelector(".homeTxt")
        let commTxt = document.querySelector(".commTxt")
        let downloadTxt = document.querySelector(".downloadTxt")
        let featureTxt = document.querySelector(".featureTxt")
        let leftbar = document.querySelector(".leftbar")
        let rightbar = document.querySelector(".rightbar")
        let mainBody = document.querySelector(".mainBody")
        let navBtnHome = document.querySelector(".navBtnHome")
        let navBtnComm = document.querySelector(".navBtnComm")
        let navBtnDownload = document.querySelector(".navBtnDownload")
        let navBtnFeature = document.querySelector(".navBtnFeature")
        let home = document.querySelector(".home")
        let comm = document.querySelector(".comm")
        let download = document.querySelector(".download")
        let feature = document.querySelector(".feature")
        leftbar.style.transition = "width 0.3s"
        leftbar.style.width = "6%"
        mainBody.style.width = "100%"
        homeTxt.style.display = "none"
        commTxt.style.display = "none"
        downloadTxt.style.display = "none"
        featureTxt.style.display = "none"
        homeTxt.style.width = "0%"
        commTxt.style.width = "0%"
        downloadTxt.style.width = "0%"
        featureTxt.style.width = "0%"
        navBtnHome.style.marginLeft = "0px"
        navBtnComm.style.marginLeft = "0px"
        navBtnFeature.style.marginLeft = "0px"
        navBtnDownload.style.marginLeft = "0px"
        navBtnHome.classList.remove('clickBtn')
        navBtnComm.classList.add('clickBtn')
        navBtnDownload.classList.remove('clickBtn')
        navBtnFeature.classList.remove('clickBtn')
        // navBtnComm.style.border = "1px solid #cfcfcf"
        navBtnComm.style.borderRadius = "8px"
        navBtnHome.style.backgroundColor = "black"
        navBtnFeature.style.backgroundColor = "black"
        navBtnComm.style.backgroundColor = "rgb(118, 23, 187)"
        navBtnDownload.style.backgroundColor = "black"
        navBtnFeature.style.border = "none"
        navBtnDownload.style.border = "none"
        home.style.width = "100%"
        comm.style.width = "100%"
        feature.style.width = "100%"
        download.style.width = "100%"
        setCount(<Commmunity />)
        setIconColorF("white")
        setIconColorC("white")
        setIconColorM("white")
        setIconColorD("white")
        setIconColorH("white")
    }

    const homeNavDownload = () => {
        let homeTxt = document.querySelector(".homeTxt")
        let commTxt = document.querySelector(".commTxt")
        let downloadTxt = document.querySelector(".downloadTxt")
        let featureTxt = document.querySelector(".featureTxt")
        let leftbar = document.querySelector(".leftbar")
        let rightbar = document.querySelector(".rightbar")
        let mainBody = document.querySelector(".mainBody")
        let navBtnHome = document.querySelector(".navBtnHome")
        let navBtnComm = document.querySelector(".navBtnComm")
        let navBtnDownload = document.querySelector(".navBtnDownload")
        let navBtnFeature = document.querySelector(".navBtnFeature")
        let home = document.querySelector(".home")
        let comm = document.querySelector(".comm")
        let download = document.querySelector(".download")
        let feature = document.querySelector(".feature")
        leftbar.style.transition = "width 0.3s"
        leftbar.style.width = "6%"
        mainBody.style.width = "100%"
        homeTxt.style.display = "none"
        commTxt.style.display = "none"
        downloadTxt.style.display = "none"
        featureTxt.style.display = "none"
        homeTxt.style.width = "0%"
        commTxt.style.width = "0%"
        downloadTxt.style.width = "0%"
        featureTxt.style.width = "0%"
        navBtnHome.style.marginLeft = "0px"
        navBtnComm.style.marginLeft = "0px"
        navBtnFeature.style.marginLeft = "0px"
        navBtnDownload.style.marginLeft = "0px"
        // navBtnDownload.style.border = "1px solid white"
        navBtnDownload.style.borderRadius = "8px"
        navBtnHome.classList.remove('clickBtn')
        navBtnComm.classList.remove('clickBtn')
        navBtnDownload.classList.add('clickBtn')
        navBtnFeature.classList.remove('clickBtn')
        navBtnHome.style.backgroundColor = "black"
        navBtnFeature.style.backgroundColor = "black"
        navBtnComm.style.backgroundColor = "black"
        navBtnDownload.style.backgroundColor = "rgb(118, 23, 187)"
        navBtnComm.style.border = "none"
        navBtnFeature.style.border = "none"
        home.style.width = "100%"
        comm.style.width = "100%"
        feature.style.width = "100%"
        download.style.width = "100%"
        setCount(<Download />)
        setIconColorF("white")
        setIconColorC("white")
        setIconColorM("white")
        setIconColorD("white")
        setIconColorH("white")

    }

    const homeNavFeature = () => {
        let homeTxt = document.querySelector(".homeTxt")
        let commTxt = document.querySelector(".commTxt")
        let downloadTxt = document.querySelector(".downloadTxt")
        let featureTxt = document.querySelector(".featureTxt")
        let leftbar = document.querySelector(".leftbar")
        let rightbar = document.querySelector(".rightbar")
        let mainBody = document.querySelector(".mainBody")
        let navBtnHome = document.querySelector(".navBtnHome")
        let navBtnComm = document.querySelector(".navBtnComm")
        let navBtnDownload = document.querySelector(".navBtnDownload")
        let navBtnFeature = document.querySelector(".navBtnFeature")
        let home = document.querySelector(".home")
        let comm = document.querySelector(".comm")
        let download = document.querySelector(".download")
        let feature = document.querySelector(".feature")
        leftbar.style.transition = "width 0.3s"
        leftbar.style.width = "6%"
        mainBody.style.width = "100%"
        homeTxt.style.display = "none"
        commTxt.style.display = "none"
        downloadTxt.style.display = "none"
        featureTxt.style.display = "none"
        homeTxt.style.width = "0%"
        commTxt.style.width = "0%"
        downloadTxt.style.width = "0%"
        featureTxt.style.width = "0%"
        navBtnHome.style.marginLeft = "0px"
        navBtnComm.style.marginLeft = "0px"
        navBtnFeature.style.marginLeft = "0px"
        navBtnDownload.style.marginLeft = "0px"
        // navBtnFeature.style.border = "1px solid white"
        navBtnFeature.style.borderRadius = "8px";
        navBtnHome.style.backgroundColor = "black"
        navBtnHome.classList.remove('clickBtn')
        navBtnComm.classList.remove('clickBtn')
        navBtnDownload.classList.remove('clickBtn')
        navBtnFeature.classList.add('clickBtn')
        navBtnFeature.style.backgroundColor = "rgb(118, 23, 187)"
        navBtnComm.style.backgroundColor = "black"
        navBtnDownload.style.backgroundColor = "black"
        navBtnComm.style.border = "none"
        navBtnDownload.style.border = "none"
        home.style.width = "100%"
        comm.style.width = "100%"
        feature.style.width = "100%"
        download.style.width = "100%"
        setCount()
        setIconColorF("white")
        setIconColorC("white")
        setIconColorD("white")
        // setIconColorM("white")
        setIconColorH("white")
    }

    const homeNavOut = () => {
        let homeTxt = document.querySelector(".homeTxt")
        let commTxt = document.querySelector(".commTxt")
        let downloadTxt = document.querySelector(".downloadTxt")
        let featureTxt = document.querySelector(".featureTxt")
        let moreTxt = document.querySelector(".moreTxt")
        let leftbar = document.querySelector(".leftbar")
        let rightbar = document.querySelector(".rightbar")
        let mainBody = document.querySelector(".mainBody")
        let navBtnHome = document.querySelector(".navBtnHome")
        let navBtnComm = document.querySelector(".navBtnComm")
        let navBtnDownload = document.querySelector(".navBtnDownload")
        let navBtnFeature = document.querySelector(".navBtnFeature")
        let navBtnMore = document.querySelector(".navBtnMore")
        let home = document.querySelector(".home")
        let comm = document.querySelector(".comm")
        let download = document.querySelector(".download")
        let feature = document.querySelector(".feature")
        // let more = document.querySelector(".more")
        leftbar.style.transition = "width 0.3s"
        leftbar.style.width = "21%"
        mainBody.style.width = "100%"
        homeTxt.style.display = "block"
        homeTxt.style.color = "#fff"
        commTxt.style.display = "block"
        downloadTxt.style.display = "block"
        featureTxt.style.display = "block"
        // moreTxt.style.display = "block"
        homeTxt.style.width = "80%"
        commTxt.style.width = "80%"
        downloadTxt.style.width = "80%"
        featureTxt.style.width = "80%"
        // moreTxt.style.width = "80%"
        navBtnHome.style.marginLeft = "0px"
        navBtnComm.style.marginLeft = "0px"
        navBtnFeature.style.marginLeft = "0px"
        navBtnDownload.style.marginLeft = "0px"
        // navBtnMore.style.marginLeft = "0px"
        navBtnHome.classList.add('clickBtn')
        navBtnComm.classList.remove('clickBtn')
        navBtnDownload.classList.remove('clickBtn')
        navBtnFeature.classList.remove('clickBtn')
        navBtnFeature.style.backgroundColor = "black"
        navBtnComm.style.backgroundColor = "black"
        navBtnDownload.style.backgroundColor = "black"
        navBtnHome.style.borderRadius = "8px"
        navBtnComm.style.border = "none"
        navBtnFeature.style.border = "none"
        navBtnDownload.style.border = "none"
        // navBtnMore.style.border = "none"
        home.style.width = "20%"
        comm.style.width = "20%"
        feature.style.width = "20%"
        download.style.width = "20%"
        // more.style.width = "20%"
        setCount(<Scrolling nameOfUser={nameOfUser} closeFunc={closeFunc} />)
        setIconColorF("white")
        setIconColorC("white")
        setIconColorD("white")
        setIconColorH("white")
    }



    const onLogOut = () => {
        fetch(`${process.env.REACT_APP_BASE_URL_TWO}logout`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            // console.log()
            nav("/home", { replace: true });
        })
            .catch((e) => {
                console.log("Logout Error")
            })

    }
    const onLoad = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL_TWO}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
            })
            const data = await res.json();
            setData(data)
            console.log(data)
            const rollOfUser = data.RollNo
            const nameOfUser = data.Name
            sessionStorage.setItem("roll", rollOfUser)
            sessionStorage.setItem("Name", nameOfUser)
            setNameOfUser(rollOfUser)
            if (!res.status === 200) {
                console.log("status code match")
                // setLoader(false)
                nav('/home');

            }
        }
        catch (err) {
            console.log(err)
            nav('/home');
        }
    }

    useEffect(() => {
        onLoad()
        // sessionStorage.getItem(location.state.id)

    }, [])

    const addPost = () => {
        setPost(true)
    }

    const addBlog = () => {
        setBlog(true)
    }



    return (
        <>
            {post ? <PostForm name={nameOfUser} closeFunc={closeFunc} /> : null}
            {blog ? <BlogForm name={nameOfUser} closeFunc={closeFunc} /> : null}
            <div className="homeBody">
                <div className="leftbar">
                    <div className="head">
                        <div className="mastHead">
                            <p>PRoll</p>
                        </div>
                    </div>
                    <div className='navBtnHome clickBtn' onClick={homeNavOut}>
                        <TiHome className='home' style={{ width: { iconWidth } }} size="30px" color={iconColorH} />
                        <p className='homeTxt' >Home</p>
                    </div>

                    <div className='navBtnComm' onClick={homeNavComm}>
                        <AiFillMessage onClick={() => { setCount(navBtnComm) }} className='comm' style={{ width: { iconWidth } }} size="27px" color={iconColorC} />
                        <p className='commTxt'>Community Page</p>
                    </div>

                    <div className='navBtnDownload' onClick={homeNavDownload}>
                        <FiDownload className='download' style={{ width: { iconWidth } }} size="28px" color={iconColorD} />
                        <p className='downloadTxt'>Downloads</p>
                    </div>

                    <div className='navBtnFeature' onClick={homeNavFeature}>
                        <AiOutlineAppstoreAdd className='feature' style={{ width: { iconWidth } }} size="28px" color={iconColorF} />
                        <p className='featureTxt'>Features</p>
                    </div>
                </div>
                <div className="mainBody">
                    {/* <Scrolling nameOfUser={nameOfUser} closeFunc={closeFunc} /> */}
                    {count}

                </div>
                <div className="rightbar">
                    <div className="profileBadge">
                        <img src={dp} className='profile_img' alt='dp' />
                        <div className="username">
                            <p>{sessionStorage.getItem('Name')}<br /><b>ECE 2nd Year</b></p>
                        </div>
                        <BsThreeDotsVertical onClick={onLogOut} className='editIcon' size="24px" color='#d624c1' />
                    </div>
                    <div className="uploadNav">
                        <div className='uploadPost' onClick={addPost}><FaImage size="20" />Post</div>
                        <div className='uploadBlog' onClick={addBlog}><BsTextParagraph size="20" />Blog</div>
                        <div className='uploadStory'><FaMagic size="20" />Story</div>
                    </div>
                    <br />
                    <br />
                    <div className="searchSec">
                        <input type="text" placeholder='Search...' />
                    </div>
                    <br />
                    <p className='suggest'>Suggested for you</p>
                    <br />
                    <div className="searchProfile">
                        <img src={dp} className='profile_img' alt='dp' />
                        <div className="username">
                            <p>Harshpreet Singh<br /><b>ECE 2nd Year</b></p>
                        </div>
                        {/* <AiFillEdit className='editIcon' size="24px" color='rgb(9,146,7)' /> */}
                    </div>
                    <div className="searchProfile">
                        <img src={dp} className='profile_img' alt='dp' />
                        <div className="username">
                            <p>Hinddeep Singh<br /><b>EEE 2nd Year</b></p>
                        </div>
                        {/* <AiFillEdit className='editIcon' size="24px" color='rgb(9,146,7)' /> */}
                    </div>
                    <div className="searchProfile">
                        <img src={dp} className='profile_img' alt='dp' />
                        <div className="username">
                            <p>Rohan Baluja<br /><b>CSE 2nd Year</b></p>
                        </div>
                        {/* <AiFillEdit className='editIcon' size="24px" color='rgb(9,146,7)' /> */}
                    </div>
                    <div className="searchProfile">
                        <img src={dp} className='profile_img' alt='dp' />
                        <div className="username">
                            <p>Anmol Chauhan<br /><b>IT 2nd Year</b></p>
                        </div>
                        {/* <AiFillEdit className='editIcon' size="24px" color='rgb(9,146,7)' /> */}
                    </div>
                </div>
            </div >
        </>
    );
}
export default Home
