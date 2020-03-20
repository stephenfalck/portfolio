import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles({
    messageContainer: {
        height: '400px',
        paddingLeft: '15%',
        paddingRight: '15%'
    },
    message: {
        textAlign: "center",
        color: '#f06292'
    }
}) 

function MessageSubmitted(props) {
    const classes = useStyles();
    const [transition, setTransition] = React.useState(false);

    useEffect(() => {
        setTransition(true)
    }, [])

    return(
        <Grid item container justify="center" alignItems="center" className={classes.messageContainer}>
            <Grow in={transition} timeout={1000}>
                <Typography variant="h3" className={classes.message}>
                    Thank you for your message, I will get back to you as soon as possible!
                </Typography>
            </Grow>
        </Grid>
    )
}

export default MessageSubmitted;