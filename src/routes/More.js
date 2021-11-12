import React from 'react';
import Nav from '../components/Nav';
import '../styles/More.scss'
import profiles from '../data/memberList.json';
import friends from '../data/PlusFriends.json';
import PlusFriends from '../components/PlusFriends';

function More() {

    const myprofile = profiles[0];
    const plus = friends[0];
    return (
        <>
        <div className="header">
            <div className="status_bar">
                <div className="left_item"><i className="fas fa-plane"></i><i className="fas fa-wifi"></i></div>
                <div className="center_item"><span>17</span>:<span>33</span></div>
                <div className="right_item"><i className="far fa-moon"></i><i className="fab fa-bluetooth"></i><span>100%</span><i className="fas fa-battery-full"></i></div>
            </div>
            <div className="title_bar">
                <h1>More</h1>
                <div className="left_item"></div>
                <div className="right_item"><a href="#"><i className="fas fa-cog"></i></a></div>
            </div>
        </div>
        <main>
            <section className="user_info">
                <h2 className="blind">사용자 정보</h2>
                <span className="profile_img">
                    <img src={myprofile.profileimg} alt="" />
                </span>
                <span className="profile_info">
                    <span className="profile_name">{myprofile.name}</span>
                    <span className="profile_email">{myprofile.email}</span>
                </span>
                <span className="chat_img"><a href="#"><i className="fas fa-comment"></i></a></span>
            </section>
            <section className="user_menu">
                <h2 className="blind">사용자 메뉴</h2>
                <ul>
                    <li><a href="#"><i className="far fa-smile"></i>Emoticons</a></li>
                    <li><a href="#"><i className="fas fa-paint-brush"></i>Themes</a></li>
                    <li><a href="#"><i className="far fa-hand-peace"></i>Plus friends</a></li>
                    <li><a href="#"><i className="far fa-user-circle"></i>Account</a></li>
                </ul>
            </section>
            <section className="plus_friends">
                <header>
                    <h2>Plus Friends</h2>
                    <span><i className="fas fa-info-circle"></i> Learn More</span>
                </header>
                <ul className="plus_list">
                    {friends.map(friend=>(
                        <PlusFriends
                            id = {friend.id}
                            icon = {friend.icon}
                            title = {friend.title}
                        />
                    ))}
                    {/* <li><a href="#"><i className="fas fa-utensils"></i>Order</a></li>
                    <li><a href="#"><i className="fas fa-home"></i>Store</a></li>
                    <li><a href="#"><i className="fas fa-tv"></i>TV Channel/Radio</a></li>
                    <li><a href="#"><i className="fas fa-pencil-alt"></i>Creation</a></li>
                    <li><a href="#"><i className="fas fa-graduation-cap"></i>Education</a></li>
                    <li><a href="#"><i className="fas fa-university"></i>Politics/Society</a></li>
                    <li><a href="#"><i className="fas fa-won-sign"></i>Finance</a></li>
                    <li><a href="#"><i className="fas fa-video"></i>Movies/Music</a></li> */}
                </ul>
            </section>
            <section className="more_app">
                <h2 className="blind">앱 더보기</h2>
                <ul>
                    <li><a href="#"><span className="app_icon"></span>Kakao Story</a></li>
                    <li><a href="#"><span className="app_icon"></span>Path</a></li>
                    <li><a href="#"><span className="app_icon"></span>Kakao friends</a></li>
                </ul>
            </section>
        </main>
        <Nav />
        </>
    )
}

export default More;
