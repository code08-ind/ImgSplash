import React from 'react';
import MainNav from './MainNav';
import { Grow, Grid, Typography } from '@material-ui/core';
import useStyles from '../styles.js';
import Content from '../Content.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Footer from './Footer';

const Explore = () => {
    document.title = 'Explore Topics';
    const classes = useStyles();
    return (
        <>
            <MainNav />
            <div className="container explore">
                <h1>Explore Topics</h1>
                <p>Explore The World Through Topics Of Beautiful Images Free Of Cost To Use By Compyling With <a href="/license" target="_blank">ImgSplash License</a> </p>
            </div>
            <br />
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {Content.map((content) => (
                        <Grid item xs={12} sm={6} lg={4} style={{ display: 'flex' }}>
                            <Card className={classes.root} key={content.id}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={content.imgLink}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="h2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}>
                                            {content.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" style={{ textTransform: "capitalize", fontFamily: "'Quicksand', sans-serif", color: "grey", fontWeight: "bold" }}>
                                            {content.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <br />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
            <br />
            <div className="container explore">
                <p>Explore More Of The Images Of Any Topic Which Is Not There Above By Just Typing In The Image Topic By Going To <a href="/">Home Page</a> </p>
            </div>
            <br />
            <Footer />
        </>
    );
}

export default Explore;
