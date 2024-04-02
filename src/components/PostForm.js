import React, { useState, useEffect } from 'react'
import postWrap from './Images/post.png'
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import dp from './Images/dp.jpg'
import axios from 'axios';
import CryptoJS from 'crypto-js';


function PostForm(props) {
    const decrypt = (key) => {
        const encryptedData = localStorage.getItem(key);
        if (encryptedData) {
            const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);
            const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
            return decryptedData;
        }
        return null; // Key not found or data couldn't be decrypted
    };

    const [userName, setUserName] = useState(props.name)
    const [file, setFile] = useState();
    const [filePreview, setFilePreview] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [marker, setMarker] = useState("Next")
    const [caption, setCaption] = useState("")
    const [rollno, setRoll] = useState("") 
    const [onNextTest, setOnNextTest] = useState(false)
    const [remove, setRemove] = useState(false);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setFilePreview(true);
        setOnNextTest(true)
        setFile(URL.createObjectURL(e.target.files[0]));
        let a = document.querySelector(".imgSec");
        let b = document.querySelector(".remove");
        a.style.margin = "0px"
        b.style.display = "block"
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('caption', caption);
        formData.append('type','post')
        formData.append('rollNo', decrypt(`${process.env.KEY}`))
        console.log(formData);
        console.log(caption)
        try {
            console.log("sss")
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}post`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully:', response.data);
            // window.location.reload()
        } catch (error) {
            console.error('File upload failed:', error.response.data);
        }
    };

    const onNext = async () => {
        let a = document.querySelector(".uploadForm")
        let b = document.querySelector(".imgSec")
        let c = document.querySelector(".detailSec")
        let d = document.querySelector(".prev")
        let e = document.querySelector(".postLine")
        let g = document.querySelector(".remove");

        a.style.width = "60%";
        b.style.width = "60%";
        c.style.display = "block";
        d.style.visibility = "visible"
        e.style.margin = "0px 100px"
        g.style.display = "none"
        setMarker("Share")

        if (marker === "Share") {
            const roll = sessionStorage.getItem('roll')
            setRoll(roll)
            await handleFileUpload()
            console.log("File upload")
            window.location.reload()
        }

    }

    const onPrev = () => {
        let a = document.querySelector(".uploadForm")
        let b = document.querySelector(".imgSec")
        let c = document.querySelector(".detailSec")
        let d = document.querySelector(".prev")
        let e = document.querySelector(".postLine")
        let g = document.querySelector(".remove");
        // setOnNextTest(false)

        a.style.width = "30%";
        b.style.width = "100%";
        c.style.display = "none";
        d.style.visibility = "hidden";
        e.style.margin = "0px 50px";
        g.style.display = "block";
        setMarker("Next")
    }

    const onUpload = () => {
        setFilePreview(true)
    }
    const onRemove = ()=>{
        setFilePreview(false)
        onPrev()
        let a = document.querySelector(".remove");
        a.style.display="none"
    }




    return (
        <>
            <div className='uploadPg'>
                <AiOutlineClose onClick={props.closeFunc} className='close' color='rgb(9,146,7)' size="38" />
                <form className='uploadForm'>
                    <div className="postHeader">
                        <b className='remove' onClick={onRemove}>Remove</b>
                        <MdArrowBack onClick={onPrev} className='prev' color='white' size="35" />
                        <h1>Create new post</h1>
                        {onNextTest ? (
                            <a onClick={onNext}>{marker}</a>) : (
                            <></>
                        )}
                    </div>
                    <hr className='postLine' />
                    <div className="postSec">
                        <div className="imgSec">
                            {filePreview ? (
                                <>
                                    <img id='preview' src={file} alt="upload Post" height="350px" width="350px" />
                                </>
                            ) : (
                                <>
                                    <center><img id='preview' src={postWrap} alt="upload Post" height="150px" width="130px" /></center>
                                    <h3>Upload pictures from your computer</h3>
                                    <input onChange={handleFileChange} type="file"  name="UserPost" id="postUpload" hidden />
                                    <label className='uploadBtn' htmlFor="postUpload">Upload</label>
                                </>
                            )}

                        </div>
                        <div className="detailSec">
                            <div className="profiling">
                                <img src={dp} alt="Your profile" />
                                <h4>{userName}</h4>
                            </div>
                            <textarea name="Caption" id="caption" onChange={(text) => setCaption(text.target.value)} placeholder='Write a caption...' cols="30" rows="8" maxLength="2200"></textarea>
                            <div className="locatInp">
                                <input type="text" name="location" id="AddLocation" placeholder='Add Location' />
                                <CiLocationOn color='rgb(9,146,7)' size="25" />
                            </div>
                            <br />
                            <input type="text" name="Alt" id="Alt-Text" placeholder='Add Alt Text...' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default PostForm

// import React, { useState } from 'react';
// import axios from 'axios';
// import CryptoJS from 'crypto-js';
// const PostForm = () => {
//   const decrypt = (key) => {
//     const encryptedData = localStorage.getItem(key);
//     if (encryptedData) {
//       const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);
//       const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
//       return decryptedData;
//     }
//     return null; // Key not found or data couldn't be decrypted
//   };
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [file, setFile] = useState();
//   const [caption, setCaption] = useState("");
//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//     setFile(URL.createObjectURL(e.target.files[0]));
//   };
//   const handleCaptionChange = (e) => {
//     e.preventDefault();
//     setCaption(e.target.value);
   
//   };
//   const handleFileUpload = async () => {
//     const roll = sessionStorage.getItem('roll')
//     const formData = new FormData();
//     formData.append('image', selectedFile);
//     formData.append('caption',caption)
//    formData.append('type','blog')
//     formData.append('rollNo',decrypt('user'))
//     console.log(formData);
//     try {
//       const response = await axios.post('http://localhost:9000/post', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('File uploaded successfully:', response.data);
//     } catch (error) {
//       console.error('File upload failed:', error.response.data);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <input type="text" onChange={handleCaptionChange} />
//       <button onClick={handleFileUpload}>Upload</button>
//       <img src={file}/>
//     </div>
//   );
// };

// export default PostForm