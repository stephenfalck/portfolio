import React from 'react';
import PortfolioItemModal from './portfolio_item_modal';
import {  makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Kattehaugen from '../images/portfolio_images/Screenshot 2020-03-01 at 16.44.12.png'
import LocalAid from '../images/portfolio_images/Screenshot 2020-03-01 at 19.56.33.png'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
    section: {
        minHeight: '100vh',
        background: 'rgb(25,25,25)',
    },
    heading: {
        marginTop: '64px',
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
        description: 'Description'
    },
    {
        img: LocalAid,
        title: 'Local Aid Platform',
        stack: 'Ruby on Rails, React.JS, Material-UI',
        description: 'Description'
    }

]

function Portfolio() {
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return(
        <div >
            <Grid container direction="column" className={classes.section}>
                <Grid container justify='center' item xs={12} className={classes.heading}>
                    <Typography variant="h2">Portfolio</Typography>
                </Grid>
                    <GridList cellHeight={200} className={matches ? classes.gridList : ""}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div">December</ListSubheader>
                        </GridListTile>
                        {tileData.map(tile => (
                            <GridListTile cols={ matches ? 1 : 2 } key={tile.img} className={classes.tile}>
                                <img src={tile.img} alt={tile.title} />
                                <PortfolioItemModal
                                    title={tile.title} 
                                    stack={tile.stack} 
                                    description={tile.description}
                                />
                            </GridListTile>
                            ))}    
                    </GridList>
            </Grid>
        </div>
    )
}

export default Portfolio;