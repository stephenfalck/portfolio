import React from 'react';
import { makeStyles } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Background from '../images/photography-of-macbook-half-opened-on-white-wooden-surface-633409.jpg';
import Background3 from '../images/blur.jpg';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
        height: '100vh',
        backgroundImage: `url(${Background3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    header: {
        marginTop: '20%',
    },
    name: {
        fontSize:'50px',
        color: 'pink'
    },
    learnMore: {
        fontSize: 60,

    }
})    

function LandingPage(props){
    const classes = useStyles()

    return(
        <Grid container direction="row" wrap='wrap' justify="center" alignItems="center" className={classes.container}>
            <Grid item container justify='center' className={classes.header}>
                <Fade in={true} timeout={3000}>
                    <Typography  variant="h4">
                        <span className={classes.name}>Stephen Falck</span><br></br>Full-stack web developer
                    </Typography>
                </Fade>
            </Grid>
            <Grid item container justify='center' >
                <Fade in={true} timeout={6000}>
                    <ExpandMoreRoundedIcon onClick={props.scroll} className={classes.learnMore} fontSize='large'/>
                </Fade>
            </Grid>
        </Grid>
    )
}

export default LandingPage;