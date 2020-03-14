import React from 'react';
import { makeStyles } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Background from '../images/photography-of-macbook-half-opened-on-white-wooden-surface-633409.jpg';
import Background3 from '../images/blur.jpg';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    section: {
        height: '100vh',
        backgroundImage: `url(${Background3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        
    },
    header: {
        width: '100%',
        textAlign: 'center',
        alignSelf: 'center',
    },
    name: {
        fontSize:'50px',
        color: 'pink'
    },
    learnMore: {
        alignSelf: 'flex-end',
    }
})    

function LandingPage(){
    const classes = useStyles()

    return(
        <div className={classes.section}>
            <Fade in={true} timeout={3000}>
                <Typography className={classes.header} variant="h4">
                    Hi, I'm <span className={classes.name}>Stephen Falck</span><br></br> a Full-stack web developer
                </Typography>
            </Fade>
            <Fade in={true} timeout={6000}>
            
                <ExpandMoreRoundedIcon className={classes.learnMore} fontSize='large'/>
               
            </Fade>
        </div>
    )
}

export default LandingPage;