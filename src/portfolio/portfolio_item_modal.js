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


const useStyles = makeStyles({
    tile: {
        maxWidth: '100vw',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
})


function PortfolioItemModal(props) {
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
                <DialogContent>
                    <PortfolioCarousel />
                    <DialogContentText>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )}


export default PortfolioItemModal;