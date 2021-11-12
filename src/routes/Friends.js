import React from 'react';
import MemberList from '../components/MemberList';
import '../styles/Friends.scss';
import profiles from '../data/memberList.json';
import Nav from '../components/Nav';

function Friends() {

    const myprofile = profiles[0];
    return (
        <>
        <div className="header">
        <div className="status_bar">
            <div className="left_item"><i className="fas fa-plane"></i><i className="fas fa-wifi"></i></div>
            <div className="center_item"><span>17</span>:<span>33</span></div>
            <div className="right_item"><i className="far fa-moon"></i><i className="fab fa-bluetooth"></i><span>100%</span><i className="fas fa-battery-full"></i></div>
        </div>
        <div className="title_bar">
            <h1>Friends <span>1</span></h1>
            <div className="left_item"><a href="#">Manage</a></div>
            <div className="right_item"><a href="#"><i className="fas fa-cog"></i></a></div>
        </div>
        </div>
        <main>
            <form className="search_box">
                <fieldset className="search_inner">
                    <legend className="blind">검색창</legend>
                    <i className="fas fa-search"></i>
                    <input type="search" name="search" id="search" placeholder="Find friends, chats, Plus friends" />
                </fieldset>
            </form>
            <section className="main_section">
                <header><h2>My Profile</h2></header>
                <ul>
                    <MemberList 
                        id = {myprofile.id}
                        name = {myprofile.name}
                        email = {myprofile.email}
                        img = {myprofile.profileimg}
                        text = {myprofile.chatmsg}
                        bg = {myprofile.backgroundImg}
                    />
                </ul>
            </section>
            <section className="main_section" >
                <header><h2>Friends</h2></header>
                <ul>
                    {profiles.map(profile =>{
                        if(profile.id != 0) {return(
                            <MemberList
                            id = {profile.id}
                            name = {profile.name}
                            email = {profile.email}
                            img = {profile.profileimg}
                            text = {profile.chatmsg}
                            bg = {profile.backgroundImg}
                            />
                        )}})}
                </ul>
            </section>
        </main>  
        <Nav />
        </>
    )
}

export default Friends;
