import React, { useState, useEffect } from 'react'
import "./Post.css"
import axios from 'axios'
import dp from './Images/dp.jpg'
import postImg from './Images/postImg.jpg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { BsHeartFill } from "react-icons/bs";
import { FaRegComment } from 'react-icons/fa6'
import { PiShareFatFill } from 'react-icons/pi'
import { BsBookmark } from 'react-icons/bs'
import LikeList from './LikeList.js'


function Post({ post, roll, state }) {
    const [stateChange, setStateChange] = useState(state)
    const [likeCount, setLikeCount] = useState(post.lc);
    const [like, setLike] = useState(false);
    const [data, setData] = useState([]);
    const [postData, setPostData] = useState([]);
    const [likeTrig, setLikeTrig] = useState(false);

    const counterFunc = () => {

    }
    const liked = async (uuid) => {
        const userunid = sessionStorage.getItem('roll');
        console.log("Liked");
        setLikeTrig(true);
        setLikeCount(likeCount + 1)

        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}postlike`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ uuid, userunid }),
                credentials: "include"
            })
            if (res.ok) {
                const data = await res.json();
                setPostData(data);
                console.log(postData, "post data");
                // const length = data.likes.length;
                // console.log(length)
            }
            else {
                console.log("like resp not ok");
            }
        } catch (err) { console.log(err) }
    }

    const disliked = async () => {
        const userunid = sessionStorage.getItem('roll');
        const uuid = post.id;
        console.log("disliked", userunid);
        setLikeTrig(false);
        setLikeCount(likeCount - 1)

        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}postdislike`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ uuid, userunid }),
                credentials: "include"
            })
            if (res.ok) {
                const data = await res.json();
                setPostData(data);
                console.log(postData, "post data");
            }
            else {
                console.log("dislike resp not ok")
            }
        } catch (err) { console.log(err) }
    }
    const onLoad = async () => {
        // const uuid = post.id;
        // console.log(post)
        const rollNo = sessionStorage.getItem('roll')
        try {
            if (post.likes.includes(rollNo)) {
                setLike(true);
                setLikeTrig(true);
                console.log(likeTrig, like, rollNo)
            }
            else {
                setLike(false);
                setLikeTrig(false);
                console.log(likeTrig, like, rollNo)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setData(post);
        onLoad();
    }, [])

    return (
        <>
            <div className="top">
                <div className="userDetails">
                    <div className="profile_img">
                        <img src={dp} className="cover" alt='img' />
                    </div>
                    <h3>Gaurav | <span className='connect' style={{ color: "rgb(9,146,7)", fontSize: "14px", cursor: "pointer" }} ></span><br /><span>ECE 2nd year</span></h3>
                </div>

                <div>
                    <BsThreeDotsVertical className="dot" size="20px" />
                </div>
            </div>
            <div className="imgBx">
                <img src={post.url} className="cover" alt='img' />
            </div>
            <div className="actionBtns">
                <div className="left">
                    <div onClick={() => {
                        console.log(data.id)
                        console.log(data)
                        setLike((prev) => !prev)
                        console.log(like)
                        likeTrig ? (disliked(post.id)) : (liked(post.id))
                    }} className="likeBtn">
                        {like ? (<BsHeartFill className="heart" color='red' size='25px' />) : (<BsHeart className="heart" color='white' size='25px' />)}
                    </div>
                    <div className="commentBtn">
                        <FaRegComment className='commentIcon' color='white' size='27px' />
                    </div>
                    <div className="shareBtn">
                        <PiShareFatFill color='white' size='25px' />
                    </div>
                </div>
                <div className="right">
                    <BsBookmark color='white' size='25px' />
                </div>
            </div>
            <div className="infoArea">
                <h4 data-type="likeList" className="likes">{likeCount} likes</h4>
                <h4 className="message"><b>{post.body}</b><br /><span>#pageroll</span></h4>
                <h4 className="comments">View all 245 comments</h4>
            </div>
            {/* <div className="addComments">
                                <div className="userImg">
                                    <img src="bg111.png" className="cover" alt="Img"/>
                                </div>
                                <input type="text" className="text" placeholder="Add a comment..."/>
                            </div> */}
            <h5 className="postTime">4 hours ago</h5>
            <br />
            <br />
        </>
    );
}

function Scrolling(props) {
    const [user, setUser] = useState([]);
    const [photoIds, setPhotoIds] = useState([]);
    const [skip, setSkip] = useState(0);
    const [photos, setPhotos] = useState([]);
    const [like, setLike] = useState(false);
    const [postData, setPostData] = useState([]);
    const [likeCount, setLikeCount] = useState(0);

    const fetchedPhotos = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}photos?skip=${skip}`, {
                method: 'GET',
            });
            const data = await res.json();
            setPhotoIds((prevUser)=> [...prevUser, ...data]);
            setSkip((prevskip)=>prevskip + 5)
            console.log(data, "photoID");
        } catch (e) {
            console.log(e);
        }
    };

    // useEffect(() => {
    //     fetchedPhotos();
    // }, []);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const fetchedPhotos = await Promise.all(
                    photoIds.map(async (photoId) => {
                        const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/photo/${photoId.uuid}`);
                        // if (!response.ok) {
                        //   throw new Error(`Failed to fetch photo with ID ${photoId.uuid}`);
                        // }
                        // const blob = await response.blob();
                        // const res = URL.createObjectURL(blob);
                        const res = await response.json();
                        const url = res.url;
                        console.log(url);
                        const body = photoId.body;
                        const lc = photoId.likeCount;
                        const likes = photoId.likes;
                        return { id: photoId.uuid, url, body, lc, likes }; // Make sure to use photoId.uuid as the id
                    })
                );
                setPhotos(fetchedPhotos);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };


        fetchPhotos();
    }, [photoIds]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ skip }),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const userData = await response.json();

    //         setUser((prevUser) => [...prevUser, ...userData]);
    //         setSkip((prevskip) => prevskip + 5);

    //         console.log(userData);
    //         console.log(skip);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };



    const likeCounter = async (uuid) => {
        try {
            const res = fetch(`${process.env.REACT_APP_BASE_URL}likeCounter`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ uuid }),
                credentials: "include"
            })
            const data = res.json();
            console.log(data);
            const likecount = data[0].likes.length;
            console.log(likecount);
            return likecount
        } catch (err) { console.log(err) }
    }
    useEffect(() => {
        if (skip === 0) {
            fetchedPhotos();
            console.log('fetched 1');
        }
    }, [skip]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                fetchedPhotos();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [skip]);

    // useEffect(()=>{
    //     sessionStorage.setItem('roll', props.roll);
    // },[])

    // const data = axios.get('/post', "${process.env.REACT_APP_BASE_URL}post").then((res)=>console.log(res)).catch((err)=>console.log(err))
    // const onLike = (e) => {
    //     const button = e.target;
    //     const buttonType = button.getAttribute("likeList");
    //     if (buttonType === "likeList") {
    //         const post = button.closest("infoArea");
    //         const active = post.querySelector(".likes")

    //         active.addEventListener('click', ()=>{
    //             setLike()
    //         })
    //     }
    // }
    console.log(photos, "post checking");
    const postScroll = photos.map(photo =>
        <>
            <Post key={photo.id} post={photo} roll={props.roll} />
        </>
    )

    return (
        <>
            <div className="card">
                {postScroll}
            </div>
        </>
    );
}
export default Scrolling