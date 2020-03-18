import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContactForm from './contact_form';
import MessageSubmitted from './message_submitted';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    container: {
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
        submitted: false
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
                    <Typography variant="h2">Contact</Typography>
                    <hr className={classes.hr}></hr>
                </Grid>
                {this.renderComponent(this.state.submitted)}
            </Grid>
        )
    }
}

export default withStyles(styles)(Contact);