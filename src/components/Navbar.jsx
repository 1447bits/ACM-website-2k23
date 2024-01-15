import React, { useState } from 'react'
import "../styles/navbar.css"
import clublogo from '../Assets/Icons/clubLogo.png'
import BurgermenuIcon from "../Assets/Icons/burgerMenuIcon.png"
import closeicon from "../Assets/Icons/closeIcon.png"
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [BurgerMenuvisibility, setBurgerMenuvisibility] = useState(false)

    function toggleBurgerMenu() {
        setBurgerMenuvisibility(!BurgerMenuvisibility)
    }

    return (<>
        <div id="navbar">
            <Link to={"/"}>
                <img src={clublogo} alt="club icon" />
            </Link>
            <div className='navlinks'>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/event" >Event</Link>
                <Link to="/gallery" >gallery</Link>
                <Link to="/team" className='joinBtn'>Team</Link>
            </div>
            <div id='BurgerMenu'>
                <div className='BurgerIcon' onClick={toggleBurgerMenu}>
                    <img src={BurgermenuIcon} style={{
                        display: !BurgerMenuvisibility ? "flex" : "none"
                    }} alt="options" />
                </div>
            </div>
        </div>
        <div id='BurgerMenuLinks' style={{
            display: BurgerMenuvisibility ? "flex" : "none"
        }}>
            <div id="BurgerMenucloseicon" onClick={toggleBurgerMenu}>
                <img src={closeicon} alt='close' />
            </div>
            <Link onClick={toggleBurgerMenu} to="/" >Home</Link>
            <Link onClick={toggleBurgerMenu} to="/about" >About</Link>
            <Link onClick={toggleBurgerMenu} to="/event" >Event</Link>
            <Link onClick={toggleBurgerMenu} to="/gallery" >gallery</Link>
            <Link onClick={toggleBurgerMenu} to="/team">Team</Link>
        </div>

    </>
    )
}
