import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import '../styles/Chats.scss';
import ChatList from '../components/ChatList';
import ImgChatting from '../data/ImgChatting.json'

function Chats() {
    const chatimg = ImgChatting;
    const [chats, setchats] = useState([]);
    let getData = async () => {
        const{ data : chats } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setchats(chats);
    }

    useEffect(getData,[]);

    return (
        <>
        <div className="header">
            <div className="status_bar">
                <div className="left_item"><i className="fas fa-plane"></i><i className="fas fa-wifi"></i></div>
                <div className="center_item"><span>17</span>:<span>33</span></div>
                <div className="right_item"><i className="far fa-moon"></i><i className="fab fa-bluetooth"></i><span>100%</span><i className="fas fa-battery-full"></i></div>
            </div>
            <div className="title_bar">
                <h1>Chats <i className="fas fa-caret-down"></i></h1>
                <div className="left_item"><a href="#">Edit</a></div>
                <div className="right_item"></div>
            </div>
        </div>
        <main>
            <from className="search_box">
                <fieldset className="search_inner">
                    <legend className="blind">검색창</legend>
                    <i className="fas fa-search"></i>
                    <input type="search" name="search" id="search" placeholder="Find friends, chats, Plus friends" />
                </fieldset>
            </from>
            <section className="main_section" >
                <header className="blind"><h2>Friends</h2></header>
                <ul className="chats_list">
                    {chats.map((chat, idx) =>(
                        <ChatList
                            id={chat.id}
                            username = {chat.username}
                            msg = {chatimg[idx].chatmsg}
                            img = {chatimg[idx].img}
                        />
                    ))}
                </ul>
            </section>
            <div className="chat_fa_btn">
                <a href="#"><i className="fas fa-comment"></i></a>
            </div>
        </main>
        <Nav />
        </>
    )
}

export default Chats;
