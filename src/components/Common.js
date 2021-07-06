import useStyles from '../styles.js';
import MainNav from './MainNav';
import Loader from './Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grow, Grid } from '@material-ui/core';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import React, { useEffect, useState } from 'react';

const Common = ({ type }) => {
    document.title = type.charAt(0).toUpperCase() + type.slice(1);
    const classes = useStyles();
    const [number, setNumber] = useState(1);
    const [view, setView] = useState('landscape');
    const [small, setSmall] = useState(12);
    const [large, setLarge] = useState(4);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const API_KEY = '<API Key>';
            const url = `https://api.pexels.com/v1/search/?query=${type}&page=${number}&per_page=60`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: API_KEY
                }
            });
            const data = await response.json();
            setLoading(false);
            console.log(data);
            setImages(data.photos);
        }
        getData();
        AOS.init({
            delay: 200,
            duration: 2000,
        });
    }, [number, type]);

    const changeNumber = () => {
        let finalNumber = number + 1;
        setNumber(finalNumber);
    }

    const decreasedNumber = () => {
        let decreasedNumber = number - 1;
        if (decreasedNumber >= 1) {
            setNumber(decreasedNumber);
        }
    }

    const changeToPortrait = () => {
        setView('portrait');
        setSmall(4);
        setLarge(3);
    }

    const changeToLandscape = () => {
        setView('landscape');
        setSmall(12);
        setLarge(4);
    }

    if (loading) {
        return (
            <>
                <MainNav />
                <br />
                <br />
                <h1 className="heading">{type}</h1>
                <div className="buttons">
                    <button onClick={changeToPortrait} className="btns">Portrait View</button>
                    <button onClick={changeToLandscape} className="btns">Landscape View</button>
                </div>
                <br />
                <Loader />
                <br />
            </>
        );
    }

    return (
        <>
            <MainNav />
            <br />
            <br />
            <h1 className="heading">{type}</h1>
            <div className="buttons">
                <button onClick={changeToPortrait} className="btns">Portrait View</button>
                <button onClick={changeToLandscape} className="btns">Landscape View</button>
            </div>
            <br />
            <br />
            {images !== [] ? (
                <Grow in>
                    <Grid className={classes.container} container alignItems="stretch" spacing={2}>
                        {images.map((image, index) => (
                            <Grid item xs={12} data-aos="flip-left" sm={`${small}`} lg={`${large}`} style={{ display: 'flex' }}>
                                <a href={image.src[`${view}`]} download target="_blank" rel="noreferrer">
                                    <img className="images" data-aos="flip-left" src={image.src[`${view}`]} key={index} alt="pics" />
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </Grow>
            ) : (
                <h1 style={{ textAlign: 'center', color: "black", fontFamily: '"Montserrat", sans-serif' }}>Error Loading Images Kindly Go to Home Page And Enter Correct Image Type.</h1>
            )}
            <div className="container">
                {images ? (
                    <>
                        <button className="btns" onClick={changeNumber}>Load More</button>
                        <button className="btns" onClick={decreasedNumber}>Load Previous</button>
                    </>
                )
                    : (
                        <button className="btns" disabled>No More Images</button>
                    )}
            </div>
        </>
    );
}

export default Common;

