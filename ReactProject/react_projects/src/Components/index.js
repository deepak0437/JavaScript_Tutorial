import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

 
const Navbar = () => {
    return (
        <>
            
                    <a href="/bmicalc" activeStyle>
                        About
                    </a>
                    <a href="/marksheet" activeStyle>
                        Contact Us
                    </a>
                    <a href="/todolist" activeStyle>
                        Blogs
                    </a>
                    <a href="/form" activeStyle>
                        Sign Up
                    </a>
               
        </>
    );
};
 
export default Navbar;