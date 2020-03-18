import React from 'react';
import PortfolioItem from './portfolio_item';
import {  makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Kattehaugen from '../images/portfolio_images/Screenshot 2020-03-01 at 16.44.12.png';
import LocalAid from '../images/portfolio_images/Screenshot 2020-03-01 at 19.56.33.png';

const useStyles = makeStyles(theme => ({
    section: {
        minHeight: 'calc(100vh - 76px)',
        background: '#212121',
    },
    heading: {
        marginTop: '100px',
    },
    hr: {
        width: '10%',
        marginBottom: '30px'
    },
    tile: {
        maxWidth: '100vw',
    },
    gridList: {
        padding: '0px 20px 0px 20px'
    }
}))
 

const tileData = [
    {
        img: Kattehaugen,
        title: 'Informative website for a Cattery',
        stack: 'React.JS, MDBootstrap',
        description: 'The client required a basic informative website including: an about page, a gallery displaying relevant pictures, a conditions page and a contact page with their details. I was tasked with designing the website, as well as creating and deploying it. Using React paired with MDBootstrap for the styling, i was able to quickly create a site they were happy with and deployed it to their desired hosting platform as well as connecting their custom domain.',
        github: 'https://github.com/stephenfalck/kattehaugen'
    },
    {
        img: LocalAid,
        title: 'Local Aid Platform Concept',
        stack: 'Ruby on Rails, React.JS, Material-UI, PostgreSQL',
        description: 'A concept for a  web app which allows users to sign up and post requests which other users can offer to help with. Concept includes authenticating users, a map to display the requests geographically, a chat page to allow users to communicate with each other and a page for users to manage their requests. To keep users authenticated after logging in, as they navigate the site, it uses a cookie to store an authentication token. Once logged in users are taken to a map of their area, which includes using the Google Maps API to geolocate the user as well as to display the map in the app. Here users can respond to requests or post their own, which are added to the database via an AJAX call to the server. I then created a chat page, which interacted with the database in the same way.',
        github: 'https://github.com/stephenfalck/aid-platform'
    }

]

function Portfolio() {
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return(
        <Grid container direction="column" className={classes.section}>
            <Grid container justify='center' alignItems="center" item xs={12} className={classes.heading} direction="column">
                <Typography variant="h2">Portfolio</Typography>
                <hr className={classes.hr}></hr>
            </Grid>
                <GridList cellHeight={200} className={matches ? classes.gridList : ""}>
                    {tileData.map(tile => (
                        <GridListTile cols={ matches ? 1 : 2 } key={tile.img} className={classes.tile}>
                            <img src={tile.img} alt={tile.title} />
                            <PortfolioItem
                                title={tile.title} 
                                stack={tile.stack} 
                                description={tile.description}
                                github={tile.github}
                            />
                        </GridListTile>
                        ))}    
                </GridList>
        </Grid>
    )
}

export default Portfolio;