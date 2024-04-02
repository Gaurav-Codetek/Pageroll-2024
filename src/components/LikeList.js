import React, { useState, useEffect } from 'react'
import postWrap from './Images/post.png'
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import dp from './Images/dp.jpg'


function LikeList(props) {

    const [userName, setUserName] = useState(props.name)
    const [marker, setMarker] = useState("Next")

    const onNext = () => {
        let a = document.querySelector(".uploadForm")
        let b = document.querySelector(".imgSec")
        let c = document.querySelector(".detailSec")
        let d = document.querySelector(".prev")
        let e = document.querySelector(".postLine")

        a.style.width = "60%";
        b.style.width = "60%";
        c.style.display = "block";
        d.style.visibility = "visible"
        e.style.margin = "0px 100px"
        setMarker("Share")

    }

    const onPrev = () => {
        let a = document.querySelector(".uploadForm")
        let b = document.querySelector(".imgSec")
        let c = document.querySelector(".detailSec")
        let d = document.querySelector(".prev")
        let e = document.querySelector(".postLine")

        a.style.width = "30%";
        b.style.width = "100%";
        c.style.display = "none";
        d.style.visibility = "hidden";
        e.style.margin = "0px 50px"
        setMarker("Next")
    }

    return (
        <>
            <div className='uploadPg'>
                <AiOutlineClose onClick={props.closeFunc} className='close' color='rgb(9,146,7)' size="38" />
                <form className='uploadForm'>
                    <div className="postHeader">
                        {/* <MdArrowBack onClick={onPrev} className='prev' color='white' size="35" /> */}
                        <h1>Likes</h1>
                        {/* <a onClick={onNext}>{marker}</a> */}
                    </div>
                    <hr className='postLine' />
                    <div className="likeSec">
                        {/* <div className="imgSec">
                            <center><img id='preview' src={postWrap} alt="upload Post" height="150px" width="130px" /></center>
                            <h3>Upload pictures from your computer</h3>
                            <input type="file" accept='image/*' name="UserPost" id="postUpload" hidden />
                            <label className='uploadBtn' htmlFor="postUpload">Upload</label>
                        </div>
                        <div className="detailSec">
                            <div className="profiling">
                                <img src={dp} alt="Your profile" />
                                <h4>{userName}</h4>
                            </div>
                            <textarea name="Caption" id="caption" placeholder='Write a caption...' cols="30" rows="8" maxLength="2200"></textarea>
                            <div className="locatInp">
                            <input type="text" name="location" id="AddLocation" placeholder='Add Location' />
                            <CiLocationOn color='rgb(9,146,7)' size="25"/>
                            </div>
                            <br />
                            <input type="text" name="Alt" id="Alt-Text" placeholder='Add Alt Text...' />
                        </div> */}
                        <div className="likeList">
                            <li>
                                <div className="profilingLikes">
                                    <img src={dp} alt="Your profile" />
                                    <h4>{userName}</h4>
                                    <span>ECE 2nd</span>
                                </div>
                            </li>
                            <li>
                                <div className="profilingLikes">
                                    <img src={dp} alt="Your profile" />
                                    <h4>{userName}</h4>
                                    <span>ECE 2nd</span>
                                </div>
                            </li>
                            <li>
                                <div className="profilingLikes">
                                    <img src={dp} alt="Your profile" />
                                    <h4>{userName}</h4>
                                    <span>ECE 2nd</span>
                                </div>
                            </li>
                            <li>
                                <div className="profilingLikes">
                                    <img src={dp} alt="Your profile" />
                                    <h4>{userName}</h4>
                                    <span>ECE 2nd</span>
                                </div>
                            </li>
                            <li>
                                <div className="profilingLikes">
                                    <img src={dp} alt="Your profile" />
                                    <h4>{userName}</h4>
                                    <span>ECE 2nd</span>
                                </div>
                            </li>
                            <li>
                                <div className="profilingLikes">
                                    <img src={dp} alt="Your profile" />
                                    <h4>{userName}</h4>
                                    <span>ECE 2nd</span>
                                </div>
                            </li>
                            <li>
                                <div className="profilingLikes">
                                    <img src={dp} alt="Your profile" />
                                    <h4>{userName}</h4>
                                    <span>ECE 2nd</span>
                                </div>
                            </li>
                            <li>
                                <div className="profilingLikes">
                                    <img src={dp} alt="Your profile" />
                                    <h4>{userName}</h4>
                                    <span>ECE 2nd</span>
                                </div>
                            </li>
                            <li>
                                <div className="profilingLikes">
                                    <img src={dp} alt="Your profile" />
                                    <h4>{userName}</h4>
                                    <span>ECE 2nd</span>
                                </div>
                            </li>
                            <li>
                                <div className="profilingLikes">
                                    <img src={dp} alt="Your profile" />
                                    <h4>{userName}</h4>
                                    <span>ECE 2nd</span>
                                </div>
                            </li>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LikeList