import React from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import MainNav from './MainNav';

const About = () => {
    return (
        <>
            <MainNav />
            <br />
            <h1 className="about">About Us</h1>
            <br />
            <br />
            <div className="column firstSec">
                <div className="row">
                    <div className="col-lg-6 one">
                        <h1>Photos for everyone</h1>
                        <p>Over 1 million free high-resolution images brought to you by the world’s most generous community of photographers.</p>
                        <NavLink to="/"><button className="btns">Start Browsing</button></NavLink>
                    </div>
                    <div className="col-lg-6 two">
                        <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="firstPic" alt="First Pic" />
                        <img src="https://images.unsplash.com/photo-1526590847572-533c6ae9f542?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="secondPic" alt="Second Pic" />
                        <img src="https://images.unsplash.com/photo-1563618390-1194187483de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="thirdPic" alt="Third Pic" />
                        <img src="https://images.unsplash.com/photo-1623412963676-cbea28380d23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80" className="fourthPic" alt="Fourth Pic" />
                    </div>
                </div>
                <br />
            </div>
            <br />
            <div className="desc">
                <br />
                <h1>Make something awesome</h1>
                <p>ImgSplash was born from the pain we had in finding great, usable imagery. And we weren’t alone. Which is why, today—millions of creators from around the world are downloading our images free of cost.</p>
                <NavLink to="/"><button>Find The Perfect Image</button></NavLink>
                <br />
            </div>
            <div className="container free">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 first">
                        <img src="https://images.unsplash.com/photo-1545315003-c5ad6226c272?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Happy Pic" />
                    </div>
                    <div className="col-sm-12 col-lg-6 second">
                        <h1>Is it really free? Yes.</h1>
                        <p>ImgSplash is a platform powered by an amazing community that has gifted hundreds of thousands of their own photos to fuel creativity. Read more about our license and how to use our images free of cost.</p>
                        <NavLink to="/license">
                            <button className="btns">Learn More About ImgSplash License</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
