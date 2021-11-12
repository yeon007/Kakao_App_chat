import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
    return (
        <nav class="tab_bar">
            <ul>
                <li>
                    <NavLink to="/" exact={true} activeClassName="choice">
                        <i class="fas fa-user"></i>Friends
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Chats" activeClassName="choice">
                        <i class="fas fa-comment"></i>Chats
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Find" activeClassName="choice">
                        <i class="fas fa-search"></i>Find
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/More" activeClassName="choice">
                        <i class="fas fa-ellipsis-h"></i>More
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
