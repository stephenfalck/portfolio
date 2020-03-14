import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    section: {
        minHeight: '100vh',
        padding: '0px 50px 0px 50px'
    },
    sectionMobile: {
        minHeight: '100vh',
        padding: '0px 15px 0px 15px'
    },
    title: {
        
    },
    description: {
        
    }
})

function About(){
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))


    return(
        
            <Grid container direction='row' alignItems='center' justify='space-around' className={matches ? classes.section : classes.sectionMobile}>
                <Grid item sm={6}>
                    <Typography variant='h5' className={classes.title}> A little more about me</Typography>
                    <p>I'm a law graduate turned web developer based in London, England. My focus is on writing clean, 
                        elegant and efficient code, to help turn your ideas into a finished product.</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p>a related icon</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p>a related icon</p>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant='h5'>Skills & Experience</Typography>
                    <p className={classes.description}>The main area of my expertise is Front end Development. HTML, CSS, 
                    JS, with my greatest passion being building interactive web apps using the React.JS framework. I also 
                    have experience working Full stack, utilising Ruby on Rails on the server side and PostgreSQL as a relational 
                    database</p>
                </Grid>
            </Grid>
        
    )
}

export default About;