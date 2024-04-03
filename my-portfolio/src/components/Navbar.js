import React from 'react';
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/')
    };
    const navigateToAbout = () => {
        navigate('/About')
    };
    const navigateToProjects = () => {
        navigate('/Projects')
    };

    const navigateToContact = () => {
        navigate("/Contact")
    }

    const navigateToNavbar = () => {
        navigate("/Navbar")
    }

    return (
        <nav className='navbar'>
        <ul>
            <li><h1>Portfolio</h1></li>
            <li><button onClick={navigateToHome}>Home</button></li>
            <li><button onClick={navigateToAbout}>About</button></li>
            <li><button onClick={navigateToProjects}>Projects</button></li>
            <li><button onClick={navigateToContact}>Contact</button></li>
            <li><button onClick={navigateToNavbar}>Navbar</button></li>
        </ul>
    </nav>
    )
}
export default NavBar;