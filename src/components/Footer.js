import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="logo">
                    <div className="mainLogo">
                        <img src="https://www.apkmirror.com/wp-content/uploads/2018/03/5aac362849758.png" alt="ImgSplash" width="68" height="68" style={{ marginLeft: "20px", marginBottom: "-10px" }} />
                        <NavLink className="nameLogo" to="/" style={{ marginBottom: "-10px" }}>&nbsp;ImgSplash</NavLink>
                    </div>
                    <div className="moreContent">
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/about">
                            About
                        </NavLink>
                        <NavLink to="/explore">
                            Explore
                        </NavLink>
                        <NavLink to="/license">
                            License
                        </NavLink>
                    </div>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/aryan-garg-661552198/">
                        <AiFillLinkedin style={{ color: "#0077b5" }} />
                    </a>
                    <a href="https://www.instagram.com/aryan_garg_08/?hl=en">
                        <AiFillInstagram style={{ color: "#DD2A7B" }} />
                    </a>
                    <a href="https://www.facebook.com/aryan.garg.9022662/">
                        <AiFillFacebook style={{ color: "#4267B2" }} />
                    </a>
                    <a href="https://github.com/code08-ind">
                        <AiFillGithub style={{ color: "white" }} />
                    </a>
                </div>
                <p>All Rights Reserved &copy; <span>Aryan Garg</span> @2021</p>
            </footer>
        </>
    );
}

export default Footer;
