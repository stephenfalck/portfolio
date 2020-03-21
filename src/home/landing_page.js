import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Background2 from '../images/jc-gellidon-EH9f0TI5wco-unsplash_cropped.jpg'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    backgroundContainer: {
        height: '100vh',
        backgroundImage: `url(${Background2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(3px)',
    },
    container: {
        height: '100vh',
        backgroundImage: `url(${Background2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    header: {
        marginTop: '20%',
    },
    headerMobile: {
        marginTop: '20%',
        padding: '10px',
        textAlign: 'center',
    },
    name: {
        fontSize:'50px',
        color: '#f06292'
    },
    learnMore: {
        fontSize: 60,
        '&:hover': {
            transform: 'translateY(5px)',
            color: '#f06292'
        }

    }
})    

function LandingPage(props){
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return(
        <Grid container direction="row" wrap='wrap' justify="center" alignItems="center" className={classes.container}>
            <Grid item container justify='center' className={matches ? classes.header : classes.headerMobile}>
                <Fade in={true} timeout={3000}>
                    <Typography  variant="h4">
                        <span className={classes.name}>Stephen Falck</span><br></br>Full-stack web developer
                    </Typography>
                </Fade>
            </Grid>
            <Grid item container justify='center' >
                <Fade in={true} timeout={6000}>
                    <ExpandMoreRoundedIcon onClick={props.scroll}  className={classes.learnMore} fontSize='large'/>
                </Fade>
            </Grid>
        </Grid>
    )
}

export default LandingPage;