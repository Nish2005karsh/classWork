// Create a normal header with 4 hyperlinks
import React from "react";
const Header=()=>{
    return (
        <div>
            <ul style={{listStyleType:"none", display:"flex", gap:"20px",backgroundColor:"#f0f0f0", padding:"10px"}}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

        </div>
    )
}
export default Header;