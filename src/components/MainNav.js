import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

let names = '';

const MainNav = () => {
    const [state, setState] = useState(names);
    const [numberClick, setNumberClick] = useState(0);
    let history = useHistory();

    const PassValue = (e) => {
        e.preventDefault();
        history.push('/searchs');
        console.log(numberClick);
        setNumberClick(numberClick + 1);
        console.log(numberClick);
        setState('Go To Homepage And Search For Images');

        if (numberClick === 1) {
            history.push('/');
            console.log(numberClick);
            setNumberClick(0);
            console.log(numberClick);
            setState('');
        }
    }

    const ChangedOnTyping = (e) => {
        setState(e.target.value);
    }

    names = state;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid one">
                    <img src="https://www.apkmirror.com/wp-content/uploads/2018/03/5aac362849758.png" alt="ImgSplash" width="48" height="48" style={{ marginLeft: "20px", marginBottom: "-10px" }} />
                    <NavLink className="navbar-brand" to="/" style={{ marginBottom: "-10px" }}>&nbsp;ImgSplash</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginBottom: "0px" }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/license">License</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/explore">Explore</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" style={{ marginRight: "20px", marginTop: "10px" }}>
                            <input className="form-control shadow-none" type="search" placeholder="Search For Free High Resolution Images On Any Topic" aria-label="Search" onChange={ChangedOnTyping} value={state} style={{ marginRight: "10px", outline: "none", width: "600px", borderRadius: "40px", paddingLeft: "30px", fontFamily: "'Quicksand', sans-serif", border: "1px solid grey" }} />
                            <button className="btns" type="submit" onClick={PassValue} name={state} style={{
                                padding: "10px 20px",
                                outline: "none",
                                color: "white",
                                backgroundColor: "black",
                                border: "3px solid white",
                                textTransform: "uppercase",
                                fontSize: "1.1em",
                                fontFamily: "'Montserrat', sans-serif"
                            }}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginBottom: "0px" }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "20px" }} >
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" aria-current="page" to="/interiors">Interiors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/film">Film</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/sports">Sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/entertainment">Entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/nature">Nature</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/people">People</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/fashion">Fashion</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/health">Health</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/animals">Animals</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/travel">Travel</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/food">Food</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/athletics">Athletics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/spirituality">Spirituality</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/arts">Arts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/drinks">Drinks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link" to="/culture">Culture</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default MainNav;
export { names };
