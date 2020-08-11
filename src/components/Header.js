import React, { useState } from 'react';
import menuBar from "../assets/svg/bars-solid.svg";
import close from "../assets/svg/times-circle-solid.svg";
import { Link } from "react-router-dom";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu)
    }
    const menustyle = {
        left: menu ? 0 : "-100%"
    };
    return (
        <header>
            <div className="logo" onClick={toggleMenu}>
                <h1><Link to="/">Magazine</Link></h1>
            </div>
            <ul style={menustyle}>
                <li onClick={toggleMenu}><Link to="/">Home</Link></li>
                <li onClick={toggleMenu}><Link to="/article">Search Articles</Link></li>
                <li onClick={toggleMenu}><Link to="/contact">Contact Us</Link></li>
                <li onClick={toggleMenu}>
                    <img src={close} alt="" width="30px" className="menu"></img>
                </li>
            </ul>
            <div className="menu" onClick={toggleMenu}>
                <img src={menuBar} alt="" width="30px"></img>
            </div>
        </header>
    )
}