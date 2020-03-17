import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import BusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';

const useStyles = makeStyles({
    section: {
        minHeight: '100vh',
        padding: '0px 50px 0px 50px'
    },
    sectionMobile: {
        minHeight: '100vh',
        padding: '0px 15px 0px 15px'
    },
})

function About(props){
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const checkScroll = (scroll, element) => {
        if(scroll === true) {
            document.getElementById(element).scrollIntoView({behavior: "smooth"});
        }
    }

    useEffect(() => {
        checkScroll(props.scrolled, "about");
        props.resetScroll();
    }, [props.scrolled])

    return(
        
            <Grid container alignItems="center" id="about" className={matches ? classes.section : classes.sectionMobile} >
                <Grid container item xs={12}>
                    <Grid item sm={6} xs={12}>
                        <Typography variant='h5' className={classes.title}> A little more about me</Typography>
                        <p>I'm a law graduate turned web developer based in London, England. My focus is on writing clean, 
                            elegant and efficient code, to help turn your ideas into a finished product.</p>
                    </Grid>
                    <Grid item container sm={6} xs={12} justify="center" alignItems="center">
                        <AccountCircleSharpIcon fontSize="large" />
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item container sm={6} xs={12} justify="center" alignItems="center">
                        <BusinessCenterSharpIcon fontSize="large" />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Typography variant='h5'>Skills & Experience</Typography>
                        <p className={classes.description}>My greatest expertise is in Front end Development. HTML, CSS, 
                        JS, with my greatest passion being building interactive web apps using the React.JS framework. I also 
                        have experience working Full stack, utilising Ruby on Rails on the server side and PostgreSQL as a relational 
                        database</p>
                    </Grid>
                </Grid>
            </Grid>
        
    )
}

export default About;