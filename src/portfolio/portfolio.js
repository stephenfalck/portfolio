import React, { useEffect } from 'react';
import PortfolioItem from './portfolio_item';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';
import Kattehaugen from '../images/portfolio_images/Screenshot 2020-03-01 at 16.44.12.png';
import Kattehaugen1 from '../images/project_screenshots/image_original_KH.jpg';
import Kattehaugen2 from '../images/project_screenshots/image_original (1)_KH.jpg';
import Kattehaugen3 from '../images/project_screenshots/image_original (2)_KH.jpg';
import Kattehaugen4 from '../images/project_screenshots/image_original (3)_KH.jpg';
import LocalAid from '../images/portfolio_images/Screenshot 2020-03-01 at 19.56.33.png';
import LocalAid1 from '../images/project_screenshots/image_original.jpg';
import LocalAid2 from '../images/project_screenshots/image_original (1).jpg';
import LocalAid3 from '../images/project_screenshots/image_original (2).jpg';
import LocalAid4 from '../images/project_screenshots/image_original (3).jpg';

const randomTransitionTime = () => {
    const min = 3
    let num = Math.random() + min
    let string = num.toString()
    return `${string}s`
}

const useStyles = makeStyles(theme => ({
    section: {
        //minHeight: 'calc(100vh - 75px)',
        minHeight: '100vh',
        background: '#212121',
        paddingBottom: '20px'
    },
    heading: {
        marginTop: '100px',
    },
    hr: {
        width: '10%',
        marginBottom: '30px'
    },
    '@keyframes fadein': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    '@keyframes grow': {
        from: {transform: 'scale(0)'},
        to: {transform: 'scale(1)'}
    },
    tile: {
        maxWidth: '100vw',
        animation: `$fadein ${randomTransitionTime()}, $grow 2s`,
    },
    gridList: {
        [theme.breakpoints.up('md')]: {
            padding: '0px 20px 0px 20px',
        },
    },
    root: {
        margin: 0,
    }
}))
 

const tileData = [
    {
        title: 'Informative website for a Cattery',
        stack: 'React.JS, MDBootstrap',
        description: 'The client required a basic informative website including: an about page, a gallery displaying relevant pictures, a conditions page and a contact page with their details. I was tasked with designing the website, as well as creating and deploying it. Using React paired with MDBootstrap for the styling, i was able to quickly create a site they were happy with and deployed it to their desired hosting platform as well as connecting their custom domain.',
        github: 'https://github.com/stephenfalck/kattehaugen',
        gallery: [
            {
                image: Kattehaugen,
                description: "Home page"
            },
            {
                image: Kattehaugen1,
                description: "An about page, displaying relevant pictures and information"
            },
            {
                image: Kattehaugen3,
                description: "Conditions page"
            },
            {
                image: Kattehaugen4,
                description: "Gallery poge, displaying tabbed gallery with two sections"
            },
            {
                image: Kattehaugen2,
                description: "Footer with relative links and other useful information, such as opening times"
            }

        ]
    },
    {
        title: 'Local Aid Platform Concept',
        stack: 'Ruby on Rails, React.JS, Material-UI, PostgreSQL',
        description: 'A concept for a  web app which allows users to sign up and post requests which other users can offer to help with. Concept includes authenticating users, a map to display the requests geographically, a chat page to allow users to communicate with each other and a page for users to manage their requests. To keep users authenticated after logging in, as they navigate the site, it uses a cookie to store an authentication token. Once logged in users are taken to a map of their area, which includes using the Google Maps API to geolocate the user as well as to display the map in the app. Here users can respond to requests or post their own, which are added to the database via an AJAX call to the server. I then created a chat page, which interacted with the database in the same way.',
        github: 'https://github.com/stephenfalck/aid-platform',
        gallery: [
            {
                image: LocalAid,
                description: 'Landing page showing a log in form'
            },
            {
                image: LocalAid1,
                description: 'Google map accessed using their API, geographically displaying user requests'
            },
            {
                image: LocalAid2,
                description: 'Form modal for users to add requests to the map'
            },
            {
                image: LocalAid3,
                description: 'Messaging page, allowing users to communicate with each other'
            },
            {
                image: LocalAid4,
                description: 'Modal allowing user to send initial response to request'
            }
        ]
    }

]

function Portfolio() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const [transition, setTransition] = React.useState(false);

    useEffect(() => {
        setTransition(true)
    }, [])

    


    return(
        <Grid container direction="column" className={classes.section}>
            <Grid container justify='center' alignItems="center" item xs={12} className={classes.heading} direction="column">
                <Slide direction="right" in={transition} timeout={500} mountOnEnter>
                    <Typography variant="h2">Projects</Typography>
                </Slide>
                <Slide direction="left" in={transition} timeout={1000} mountOnEnter>
                    <hr className={classes.hr}></hr>
                </Slide>
            </Grid>
                <GridList cellHeight={350} spacing={0} className={classes.gridList}>
                    {tileData.map(tile => (
                            <GridListTile cols={ matches ? 1 : 2 } style={{padding:'3px'}} key={tile.gallery[0].image} className={classes.tile}> 
                                <img src={tile.gallery[0].image} alt={tile.title} />
                                <PortfolioItem
                                    title={tile.title} 
                                    stack={tile.stack} 
                                    description={tile.description}
                                    github={tile.github}
                                    gallery={tile.gallery}
                                />
                            </GridListTile>
                        ))}    
                </GridList>
        </Grid>
    )
}

export default Portfolio;