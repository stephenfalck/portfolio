import React, { useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioCarousel from './portfolio_carousel';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CancelIcon from '@material-ui/icons/Cancel';


const useStyles = makeStyles({
    tile: {
        maxWidth: '100vw',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
})


function PortfolioItem(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const openModal = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
      };

    return (
        <Fragment>
            <GridListTileBar
                title={props.title}
                subtitle={<span>Stack: {props.stack}</span>}
                actionIcon={
                    <IconButton aria-label={`info about ${props.title}`} className={classes.icon} onClick={openModal}>
                        <InfoIcon />
                    </IconButton>
            }
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
                <PortfolioCarousel />
                <DialogContent>
                    <DialogContentText>
                        <a href={props.github} target='blank_'>Github</a>
                    </DialogContentText>
                    <DialogContentText>
                        {props.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        <CancelIcon />  
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )}


export default PortfolioItem;