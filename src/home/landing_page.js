import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
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
    name: {
        fontSize:'50px',
        color: '#f06292'
    },
    learnMore: {
        fontSize: 60,
        '&:hover': {
            transform: 'translateY(5px)',
            color: '#f06292'
            //color: 'rgb(255,69,139)'
        }

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
                    <ExpandMoreRoundedIcon onClick={props.scroll}  className={classes.learnMore} fontSize='large'/>
                </Fade>
            </Grid>
            
        </Grid>
    )
}

export default LandingPage;