import React, { useEffect, useState } from 'react'
import './style.css';
import MenuComp from '../MenuComp/MenuComp';

function HomeCompo() {
    const [weektext, setWeektext] = useState("");
    const time = new Date().getHours()
    const minute = new Date().getMinutes()
    const week = new Date().getDay()

    return (
        <>
            <div className='container'>
                <nav className='navbar'>
                    <div className="left-text">
                        <p className="nav-text">{time}:{minute < 10 ? "0" + minute : minute}  {week === 6 ? "Shanba" : "Err"}</p>
                    </div>
                    <div className="right-text">
                        <p className="nav-text">O'zbekcha <i class="fa-solid fa-caret-down"></i></p>
                    </div>
                </nav>
            </div>
            <MenuComp />
        </>
    )
}

export default HomeCompo
