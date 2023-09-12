import React from 'react';
import { FaFacebookSquare,FaBars,FaTwitter,FaLinkedin,FaSketch ,FaBehanceSquare,FaDoorClosed} from "react-icons/fa";
import {useState} from "react";

const DrawNav = () => {

    const [showFlag, setShowFlag] = useState(false);
 

    function showMenu(){
        console.log({showFlag});
        setShowFlag(!showFlag);
    }


    return (
        <div>
            <button className="sidebar-toggle" onClick={showMenu}>
                <FaBars/>
            </button>
            <aside className={showFlag? "sidebar":"sidebar show-sidebar"}>
            <div className="sidebar-header">
                <img src="logo.svg" className="logo" alt="" />
                <button className="close-btn" onClick={showMenu}><FaDoorClosed/></button>
            </div>
            <ul className="links">
                <li>
                <a href="index.html">home</a>
                </li>
                <li>
                <a href="about.html">about</a>
                </li>
                <li>
                <a href="projects.html">projects</a>
                </li>
                <li>
                <a href="contact.html">contact</a>
                </li>
            </ul>
            <ul className="social-icons">
                <li>
                <a href="https://www.twitter.com">
                    <FaFacebookSquare/>
                </a>
                </li>
                <li>
                <a href="https://www.twitter.com">
                    <FaTwitter/>
                </a>
                </li>
                <li>
                <a href="https://www.twitter.com">
                    <FaBehanceSquare/>
                </a>
                </li>
                <li>
                <a href="https://www.twitter.com">
                    <FaLinkedin/>
                </a>
                </li>
                <li>
                <a href="https://www.twitter.com">
                    <FaSketch/>
                </a>
                </li>
            </ul>
            </aside>
        </div>
    );
};

export default DrawNav;