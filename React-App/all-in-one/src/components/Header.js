import React from 'react';
import './Header.css';

function Header({ onhandlereference, reference }) {
    
    return (
        <nav>
        <div className="nav-bar">
            <i className='bx bx-menu sidebarOpen' ></i>
            <span className="logo navLogo">
            <i className="fab fa-slack" style={{color: "#fff", fontSize: "30px"}}></i>
            <a href="#">ALLiNSET</a>
            </span>

            <div className="menu">
                <div className="logo-toggle">
                    <span className="logo"><a href="#">CodingLab</a></span>
                    <i className='bx bx-x siderbarClose'></i>
                </div>

                <ul className="nav-links">
                    <li onClick={() => onhandlereference('home')}><a href="#" style={{color: reference==='home' ? 'black' : ''}} >Home</a></li>
                    <li onClick={() => onhandlereference('about')}><a href="#" style={{color: reference==='about' ? 'black' : ''}} >About</a></li>
                    <li onClick={() => onhandlereference('port')}><a href="#" style={{color: reference==='port' ? 'black' : ''}}>Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            {/* <span className='reglog'>Register</span>
            <span className='reglog'>Register</span> */}
            {/* <div className="darkLight-searchBox">
                <div className="dark-light">
                    <i className='bx bx-moon moon'></i>
                    <i className='bx bx-sun sun'></i>
                    <span className='reglog'>Register</span>
                </div>

                <div className="searchBox">
                   <div className="searchToggle">
                    <i className='bx bx-x cancel'></i>
                    <i className='bx bx-search search'></i>
                    <span className='reglog'>Login</span>
                   </div>

                    <div className="search-field">
                        <input type="text" placeholder="Search..."/>
                        <i className='bx bx-search'></i>
                    </div>
                </div>
            </div> */}
        </div>
        <script src="./script.js"></script>
    </nav>

    )
}

// https://www.avanse.com/viewPagesAssets/img/estimate-of-your-education-loan.webp

export default Header
