import { FaFacebookSquare,FaBars,FaTwitter,FaLinkedin,FaSketch ,FaBehanceSquare} from "react-icons/fa";
import logo from './logo.svg';
import {useState} from "react";

function Navigation(){
    const [showFlag, setShowFlag] = useState(false);
 

    function showMenu(){
        console.log({showFlag});
        setShowFlag(!showFlag);
    }

    return(
        <nav>
            <div className="nav-center">
        
                <div className='nav-header' >
                    <img src={logo} className="logo" alt="logo" />
                    <button className="nav-toggle" onClick={showMenu}>
                        <FaBars />
                    </button>
                </div>
           
                <ul className={ showFlag ? "links show-links"  : "links" }>
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
                        <FaFacebookSquare />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.twitter.com">
                        <FaTwitter />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.twitter.com">
                        <FaBehanceSquare />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.twitter.com">
                        <FaLinkedin />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.twitter.com">
                        <FaSketch />
                    </a>
                    </li>
                </ul>
            </div>
      </nav>
    );
}

export default Navigation;