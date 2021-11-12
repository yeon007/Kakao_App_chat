import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Profile.scss';

function Profile() {
    const location = useLocation();
    console.log(location);
    const {id, name, email, img, text, bg} = location.state;
    return (
        <>
        <div className="profile_header">
            <div className="status_bar">
                <div className="left_item"><i className="fas fa-plane"></i><i className="fas fa-wifi"></i></div>
                <div className="center_item"><span>17</span>:<span>33</span></div>
                <div className="right_item"><i className="far fa-moon"></i><i className="fab fa-bluetooth"></i><span>100%</span><i className="fas fa-battery-full"></i></div>
            </div>
            <div className="title_bar">
                <h1></h1>
                <div className="left_item my">
                    <Link to='/' exact={true}>
                        <i className="fas fa-times"></i>
                    </Link>
                </div>    
                <div className="right_item"><i className="fas fa-user"></i></div>
            </div>
        </div>
        <main>
            <section className="background" style={{background: "url("+bg+") no-repeat 50% 50%"}}>
                <h2 className="blind">My profile backgroud image</h2>
            </section>
            <section className="myprofile">
                <h2 className="blind">My profile info</h2>
                <div className="myprofile_img">
                    <img src={img} alt="" />
                </div>
                <div className="myprofile_cont">
                    <span className="myprofile_name">{name}</span>
                    <input type="text" className="myprofile_email" placeholder={email} />
                    <ul className="myprofile_menu">
                        <li><a href="#"><span className="myicon"><i className="fas fa-comment"></i></span>My Chatroom</a></li>
                        <li><a href="#"><span className="myicon"><i className="fas fa-pencil-alt"></i></span>Edit Profile</a></li>
                    </ul>
                </div> 
            </section>
        </main>
        </>
    )
}

export default Profile;
