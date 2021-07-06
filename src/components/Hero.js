import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

let name = '';

const Hero = () => {
    const [state, setState] = useState(name);
    let history = useHistory();

    const PassValue = (e) => {
        // e.preventDefault();
        history.push('/search');
        setState('');
    }

    const ChangedOnTyping = (e) => {
        setState(e.target.value);
    }

    name = state;

    return (
        <>
            <div className="hero">
                <h1><img src="https://www.apkmirror.com/wp-content/uploads/2018/03/5aac362849758.png" alt="ImgSplash" width="88" height="88" style={{ marginLeft: "20px", marginBottom: "10px" }} /> ImgSplash</h1>
                <h6>Powered With Free Usable Images</h6>
                <p>Created With ❤️ By <b>Aryan Garg</b> &copy; 2021</p>
                <div className="form-group has-search">
                    <input type="text" className="form-control shadow-none" placeholder="Search For An Awesome Image Topic" onChange={ChangedOnTyping} value={state} />
                    <button className="btns" onClick={PassValue} name={state}>Search</button>
                </div>
            </div>
        </>
    );
}

export default Hero;
export { name };
