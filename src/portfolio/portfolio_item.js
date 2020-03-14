import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    
})

function PortfolioItem(props){
    const classes = useStyles()

    return(
        <Fragment>
            <img src={props.img} alt={props.title} />
            <GridListTileBar
            title={props.title}
            subtitle={<span>Stack: {props.stack}</span>}
            actionIcon={
                <IconButton aria-label={`info about ${props.title}`} className={classes.icon}>
                    <InfoIcon />
                </IconButton>
            }
            />
        </Fragment>
    )
}

export default PortfolioItem;