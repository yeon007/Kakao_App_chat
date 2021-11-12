import React from 'react';
import '../styles/Chatting.scss';
import { Link, useLocation } from 'react-router-dom';

function Chatting() {
    const location = useLocation();
    console.log(location);
    const {id, img, username} = location.state;

    return (
        <>
        <div class="chat_header">
            <div class="status_bar">
                <div class="left_item"><i class="fas fa-plane"></i><i class="fas fa-wifi"></i></div>
                <div class="center_item"><span>17</span>:<span>33</span></div>
                <div class="right_item"><i class="far fa-moon"></i><i class="fab fa-bluetooth"></i><span>100%</span><i class="fas fa-battery-full"></i></div>
            </div>
            <div class="title_bar">
                <h1>{username}</h1>
                <div class="left_item black">
                    <Link to='/Chats'>
                    <i class="fas fa-angle-left"></i>
                    </Link>
                </div>
                <div class="right_item black2"><a href="#"><i class="fas fa-search"></i><i class="fas fa-bars"></i></a></div>
            </div>
        </div>
        <main className="mainbg">
            <span class="date_info">Monday, october 25, 2021</span>
            <div class="chat_box my">
                <span class="chat">Hello!</span>
                <span class="chat">Hello! This is a test message.</span>
                <span class="chat">This is a test message.</span>
                <span class="chat_time"><span>16</span>:<span>30</span></span>
            </div>
            <div class="chat_box other">
                <div class="other_info">
                    <span class="profile_img">
                        <img src={img} alt=""/></span>
                    <span class="profile_name">{username}</span>
                </div>
                <span class="chat">And this is an answer</span>
                <span class="chat">And this is an answer And this is an answer</span>
                <span class="chat">And this is an answer</span>
                <span class="chat_time"><span>17</span>:<span>33</span></span>
            </div>
        </main>
        <footer>
            <span class="plus_btn"><a href="#"><i class="fas fa-plus"></i></a></span>
            <form action="/" method="post">
                <fieldset class="text_box">
                    <legend class="blind">채팅 입력창</legend>
                    <label for="chatting" class="blind">채팅 입력</label>
                    <input type="text" id="chatting" class="text_field" />
                    <span class="emoticon_btn"><a href="#"><i class="far fa-smile"></i></a></span>
                    <span class="voice_btn"><a href="#"><i class="fas fa-microphone"></i></a></span>
                </fieldset>
            </form>
        </footer>
        </>
    )
}

export default Chatting;
