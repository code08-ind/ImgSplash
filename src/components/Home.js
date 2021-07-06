import useStyles from '../styles.js';
import MainNav from './MainNav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grow, Grid } from '@material-ui/core';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import React, { useEffect, useState } from 'react';
import Hero from './Hero.js';

const Home = () => {
    document.title = 'ImgSplash'
    const classes = useStyles();
    const [number, setNumber] = useState(1);
    const [images, setImages] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const API_KEY = '563492ad6f917000010000010b7199b4104247e6b8e56dcdc4bb02e4';
            const url = `https://api.pexels.com/v1/curated/?page=${number}&per_page=60`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: API_KEY
                }
            });
            const data = await response.json();
            console.log(data);
            setImages(data.photos);
        }
        getData();
        AOS.init({
            delay: 200,
            duration: 2000,
        });
    }, [number]);

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

    return (
        <>
            <MainNav />
            <Hero />
            <br />
            <br />
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={2}>
                    {images.map((image, index) => (
                        <Grid item xs={12} sm={6} lg={4} data-aos="flip-right" style={{ display: 'flex' }}>
                            <a href={image.src.landscape} download>
                                <img className="images" data-aos="flip-right" src={image.src["portrait"]} key={image.id} alt="pics" />
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
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

export default Home;

