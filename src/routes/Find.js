import React from 'react';
import Nav from '../components/Nav';
import '../styles/Find.scss';

function Find() {
    return (
        <>
        <div class="header">
            <div class="status_bar">
                <div class="left_item"><i class="fas fa-plane"></i><i class="fas fa-wifi"></i></div>
                <div class="center_item"><span>17</span>:<span>33</span></div>
                <div class="right_item"><i class="far fa-moon"></i><i class="fab fa-bluetooth"></i><span>100%</span><i class="fas fa-battery-full"></i></div>
            </div>
            <div class="title_bar">
                <h1>find</h1>
                <div class="left_item"><a href="#">Edit</a></div>
                <div class="right_item"></div>
            </div>
        </div>
        <main>
            <ul class="find_method">
                <li><a href="#"><i class="fas fa-address-book"></i>Find</a></li>
                <li><a href="#"><i class="fas fa-qrcode"></i>QR Code</a></li>
                <li><a href="#"><i class="fas fa-mobile-alt"></i>Shake</a></li>
                <li><a href="#"><i class="fas fa-envelope"></i>Invite via SNS</a></li>
            </ul>
            <section class="recommend_section">
                <header><h2>Recommended Friends</h2></header>
                <ul>
                    <li>You Have no recommended friends.</li>
                </ul>
            </section>
        </main>
        <Nav />
        </>
    )
}

export default Find;
