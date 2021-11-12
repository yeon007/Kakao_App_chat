import React from 'react';
import {Link} from 'react-router-dom';
import './ChatList.scss';

function ChatList({id, msg, img, username}) {
    return (
        <li className="chats">
            <Link to={'/Chatting'}
                state = {{id, img, username, msg}}>
                <div className="chant_content">
                    <img src={img} alt="" />
                    <div className="chats_info">
                        <h3>{username}</h3>
                        <span>{msg}</span>
                    </div>
                    <span className="time">17:33</span>
                </div>
                
            </Link>
        </li>
    )
}

export default ChatList;
