import React from 'react';
import {Link} from 'react-router-dom';
import './MemberList.scss';

function MemberList({id, name, email, img, text, bg}) {
    return (
        <div className="memberlist">
            <div className="profile_cont">
                <img src={img} alt="" />
                <Link to={'/Profile'}
                    state= {{id, name, email, img, text, bg}}>
                {name}</Link>
                <span>{text}</span>
            </div> 
        </div>
    )
}

export default MemberList;
