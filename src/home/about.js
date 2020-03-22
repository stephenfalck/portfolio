import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import BusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import Collapse from '@material-ui/core/Collapse';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(theme =>({
    section: {
        minHeight: '100vh',
        padding: '0px 50px 0px 50px',
        [theme.breakpoints.down('xs')]: {
            padding: '0px 15px 0px 15px'
        }
    },
    icons: {
        fontSize: '5rem',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '15px'
        },
        color: '#f06292'
    },
    icon1: {
        [theme.breakpoints.down('xs')]: {
            order: -1
        }
    }
}))

function About(props){
    const classes = useStyles();
    //const theme = useTheme();
    //const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const {scrolled, resetScroll} = props
    const [aboutAnimations, setAboutAnimations] = React.useState({
        title1: false,
        title2: false,
        paragraph1: false,
        paragraph2: false,
        icon1: false,
        icon2: false
    })
    

    const checkScroll = (scroll, element) => {
        if(scroll === true) {
            document.getElementById(element).scrollIntoView({behavior: "smooth"});
        }
    }

    
    const checkPositions = () => {
        let elements = document.querySelectorAll('.hiddenAboutAnimations');
        let obj= {};

        for (let i=0; i<elements.length; i++) {
            let element = elements[i].id;
            let positionFromTop = elements[i].getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if(positionFromTop - windowHeight <= 0) {
                obj[element] = true
            }
            
        }
        setAboutAnimations(obj)
    }

    useEffect(() => {
        checkScroll(scrolled, "about");
        resetScroll();
        window.addEventListener('scroll', checkPositions);
        return ()=> {
            window.removeEventListener('scroll', checkPositions)
        }
    }, [scrolled, resetScroll])

    return(
        
            <Grid container alignItems="center" id="about" className={classes.section} >
                <Grid container item xs={12}>
                    <Grid item sm={6} xs={12}>
                        <Collapse in={aboutAnimations['title1']} unmountOnExit={false} timeout={2000}>
                            <Typography variant='h5' className="hiddenAboutAnimations" id="title1"> A little more about me</Typography>
                        </Collapse>
                        <Collapse in={aboutAnimations['paragraph1']} unmountOnExit={false} timeout={2000}>
                            <p className="hiddenAboutAnimations" id="paragraph1">I'm a law graduate turned web developer based in London. My focus is on writing clean, 
                                elegant and efficient code, to help turn your ideas into a finished product.</p>
                        </Collapse>   
                    </Grid>
                    <Grid item container sm={6} xs={12} justify="center" alignItems="center" className={classes.icon1}>
                    <Zoom in={aboutAnimations['icon1']} >
                            <AccountCircleSharpIcon className={classes.icons + " hiddenAboutAnimations"} id="icon1" />
                    </Zoom>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item container sm={6} xs={12} justify="center" alignItems="center">
                        <Zoom direction="right" in={aboutAnimations['icon2']} timeout={1000}>
                            <BusinessCenterSharpIcon className={classes.icons + " hiddenAboutAnimations"} id="icon2" />
                        </Zoom>
                        
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Collapse direction="right" in={aboutAnimations['title2']} timeout={2000}>
                            <Typography variant='h5' className="hiddenAboutAnimations" id="title2">Skills & Experience</Typography>
                            </Collapse>
                        <Collapse direction="right" in={aboutAnimations['paragraph2']} timeout={2000}>
                            <p className="hiddenAboutAnimations" id="paragraph2">My greatest strength is Front end Development. HTML, CSS, 
                            JS, with my greatest passion being building interactive web apps using the React.JS framework. I also 
                            have experience working Full stack, utilising Ruby on Rails on the server side and PostgreSQL as a relational 
                            database</p>
                            </Collapse>
                    </Grid>
                </Grid>
            </Grid>
        
    )
}

export default About;