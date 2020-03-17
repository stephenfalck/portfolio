import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    section: {
        minHeight: 'calc(100vh - 76px)',
        background: 'rgb(25,25,25)',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    container: {
        minHeight: 'calc(100vh - 76px)',
        background: 'rgb(25,25,25)',
    },
    heading: {
        marginTop: '80px',
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
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };



    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)

        //const {
            //REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            //REACT_APP_EMAILJS_TEMPLATEID: template,
            //REACT_APP_EMAILJS_USERID: user
        //} = this.props.env
        const template = 'template_e464IIMb'
        

        this.sendEmail(template, this.state)
    }

    sendEmail = (template, templateParams) => {
        window.emailjs.send('default_service', template, templateParams )
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        })
    }


    render() {
        const { classes } = this.props

        return(
            <Grid container className={classes.container} alignContent="flex-start">
                <Grid item container justify="center" className={classes.heading}>
                    <Typography variant="h2">Contact</Typography>
                </Grid>
                <Grid item container justify="center">
                    <Typography variant="h6">If you would like any more information or have a project you would like to discuss get in touch!</Typography>
                </Grid>
                <Grid item container justify="center">
                    <form id='contact-form' onSubmit={this.handleSubmit}>
                        <TextField 
                        classes={{root: classes.input}} 
                        id="name" 
                        label="Name" 
                        required 
                        fullWidth 
                        variant="filled" 
                        onChange={this.handleChange('name')}
                        />
                        <TextField 
                        classes={{root: classes.input}} 
                        id="email" 
                        label="Email" 
                        required 
                        fullWidth 
                        variant="filled" 
                        type='email'
                        onChange={this.handleChange('email')}
                        />
                        <TextField 
                        classes={{root: classes.input}} 
                        id="message" 
                        label="Message" 
                        required 
                        fullWidth 
                        variant="filled" 
                        multiline 
                        rows="5"
                        onChange={this.handleChange('message')}
                        />
                        <Button variant="contained" color="primary" type='submit' form="contact-form" >
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Contact);