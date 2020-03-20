import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContactForm from './contact_form';
import MessageSubmitted from './message_submitted';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Collapse from '@material-ui/core/Collapse';

const styles = {
    container: {
        //minHeight: 'calc(100vh - 75px)',
        minHeight: '100vh',
        background: '#212121',
    },
    heading: {
        marginTop: '100px',
    },
    hr: {
        width: '10%',
        marginBottom: '30px'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '76%',
    },
    input: {
        backgroundColor: 'white',
        marginBottom: '5px',
    },
    label: {
        color: 'white'
    },
}

class Contact extends React.Component {
    state = {
        submitted: false,
        transition: false
    }

    componentDidMount = () => {
        this.setState({
            transition: true
        })
    }

    submitForm = () => {
        this.setState({
            submitted: true
        })
    }

    renderComponent = (submitted) => {
        if (submitted === false) {
            return <ContactForm submitted={this.state.submitted} submitForm={this.submitForm}/>
        } else {
            return <MessageSubmitted />
        }
    }

  
    render() {
        const { classes } = this.props

        return(
            <Grid container className={classes.container} alignContent="flex-start" >
                <Grid item container justify="center" alignItems="center" direction="column" className={classes.heading}>
                    <Slide direction="right" in={this.state.transition} timeout={500} mountOnEnter>
                        <Typography variant="h2">Contact</Typography>
                    </Slide>
                    <Slide direction="left" in={this.state.transition} timeout={1000} mountOnEnter>
                        <hr className={classes.hr}></hr>
                    </Slide>
                </Grid>
                {this.renderComponent(this.state.submitted)}
            </Grid>
        )
    }
}

export default withStyles(styles)(Contact);