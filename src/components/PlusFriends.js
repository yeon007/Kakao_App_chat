import React from 'react';
import './PlusFriends.scss';

function PlusFriends({id, icon, title}) {
    return (
        <div className="icons">
            <i className={icon}></i>
            <span>{title}</span>
        </div>
    )
}

export default PlusFriends;
