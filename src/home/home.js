import React from 'react';
import LandingPage from './landing_page';
import About from './about';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        width: '100vw',
        minHeight: '200vh',
        background: 'rgb(25,25,25)',
    }
})

function Home() {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <LandingPage className={classes.section}></LandingPage>
            <About className={classes.section}></About>
        </div>
    )
}

export default Home;