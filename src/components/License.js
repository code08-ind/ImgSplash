import React from 'react';
import MainNav from './MainNav';
import useStyles from '../styles.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { Grow, Grid } from '@material-ui/core';
import Types from '../Types.js';
import { FcCheckmark, FcCancel } from "react-icons/fc";
import Footer from './Footer';

const License = () => {
    const classes = useStyles();
    return (
        <>
            <MainNav />
            <div className="heros">
                <h1>Legal Simplicity</h1>
                <h6>All photos on ImgSplash can be downloaded and used for free.</h6>
            </div>

            <div className="allowed">
                <h1>What is allowed?</h1>
                <p>We tried to keep the ImgSplash License as simple as possible. Keep reading to find out more.</p>
                <ul>
                    <li> <FcCheckmark style={{ width: "2em", height: "2em" }} />&nbsp;&nbsp;  All photos on ImgSplash are free to use.</li>
                    <li> <FcCheckmark style={{ width: "2em", height: "2em" }} />&nbsp;&nbsp;  ImgSplash Is Not An Competing Website Or Authority</li>
                    <li> <FcCheckmark style={{ width: "2em", height: "2em" }} />&nbsp;&nbsp;  It Is just a project that fetches images from API.</li>
                    <li> <FcCheckmark style={{ width: "2em", height: "2em" }} />&nbsp;&nbsp;  The content in ImgSplash is not targeted to compete with any authority or organization which provides free images to use.</li>
                    <li> <FcCheckmark style={{ width: "2em", height: "2em" }} />&nbsp;&nbsp;  You can modify the photos and videos from ImgSplash. Be creative and edit them as you like.</li>
                </ul>
            </div>

            <div className="imagery">
                <h1>Tell your story with ImgSplash</h1>
                <p>Some of the use cases for which you can use photos from ImgSplash.</p>
            </div>
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {Types.map((type) => (
                        <Grid item xs={12} sm={6} lg={3} style={{ display: 'flex' }}>
                            <Card className={classes.root} key={type.id}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={type.imgLink}
                                        alt={type.alt}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}>
                                            {type.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" style={{ textTransform: "capitalize", fontFamily: "'Quicksand', sans-serif", color: "grey", fontWeight: "bold" }}>
                                            {type.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <br />
                        </Grid>
                    ))}
                </Grid>
            </Grow>

            <div className="allowed">
                <h1>What is Not allowed?</h1>
                <p>Respect the hard work of our contributors and keep these restrictions in mind.</p>
                <ul>
                    <li> <FcCancel style={{ width: "2em", height: "2em" }} />&nbsp;&nbsp;   Identifiable people may not appear in a bad light or in a way that is offensive.</li>
                    <li> <FcCancel style={{ width: "2em", height: "2em" }} />&nbsp;&nbsp;   Don't sell unaltered copies of a photo such as a poster, print or on a physical product without modifying it first.</li>
                    <li> <FcCancel style={{ width: "2em", height: "2em" }} />&nbsp;&nbsp;  Don't imply endorsement of your product by people or brands on the imagery.</li>
                    <li> <FcCancel style={{ width: "2em", height: "2em" }} />&nbsp;&nbsp;  Don't redistribute or sell the photos and videos on other stock photo or wallpaper platforms.</li>
                    <li> <FcCancel style={{ width: "2em", height: "2em" }} />&nbsp;&nbsp;  The photos are collected from an API. So there is no chance of copying of content and now working in to compete with any of the websites or authorities.</li>
                </ul>
            </div>
            <br />
            <Footer />
        </>
    );
}

export default License;
