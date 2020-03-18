import React from 'react';
import LandingPage from './landing_page';
import About from './about';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        width: '100vw',
        minHeight: '200vh',
        background: '#212121',
    }
})

function Home() {
    const classes = useStyles();
    const [scroll, setScroll] = React.useState(false);

    const scrollDown = () => {
        setScroll(true);
    }

    const resetScroll = () => {
        setScroll(false);
    }

    return(
        <div className={classes.container}>
            <LandingPage scroll={scrollDown}></LandingPage>
            <About scrolled={scroll} resetScroll={resetScroll}></About>
        </div>
    )
}

export default Home;