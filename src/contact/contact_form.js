import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';


const styles = {
    formContainer: {
        //paddingTop: '50px'
        margin: '30px 10px 20px 10px'
    },
    formContainerMobile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '76%',
        padding: '30px 10px 20px 10px',
    },
    subHeading: {
        color: '#f06292',
        margin: '0px 10px 0px 10px'
        //color: '#f50057'
    },
    input: {
        backgroundColor: '#424242',
        marginBottom: '5px',
        '& label':{
            color: '#e0e0e0'
        },
        '& div':{
        color: 'white'
        },
    },
    submitButton: {
        marginTop: '5px',
        //backgroundColor: '#f50057'
    }
}

class ContactForm extends React.Component {
    state = {
        name:'',
        email:'',
        message:'',
        transition: false
    }

    componentDidMount = () => {
        this.setState({
            transition: true
        })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };



    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)

        const template = process.env.REACT_APP_EMAILJS_TEMPLATEID

        this.props.submitForm();

        this.sendEmail(template, this.state)
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    sendEmail = (template, templateParams) => {
        window.emailjs.send('default_service', template, templateParams )
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            if (response.status === 201) {
                this.setState({
                    submitted: true
                })
            }
        }, function(error) {
            console.log('FAILED...', error);
        })
    }

    render() {
        const { classes } = this.props
        
        return(
            <Fragment>
                    <Grid item container justify="center" className={classes.subHeading}>
                        <Fade in={this.state.transition} timeout={3000}>
                            <Typography variant="h6" align='center'>Have a question or want to work together?</Typography>
                        </Fade>
                    </Grid>
                    <Grid item container justify="center" className={classes.formContainer}>
                        <Collapse in={this.state.transition} timeout={3000}>
                            <form id='contact-form' onSubmit={this.handleSubmit}>
                                <TextField 
                                classes={{root: classes.input}} 
                                id="name" 
                                label="Name" 
                                value={this.state.name}
                                required 
                                fullWidth 
                                variant="filled"
                                onChange={this.handleChange('name')}
                                color="primary"
                                />
                                <TextField 
                                classes={{root: classes.input}} 
                                id="email" 
                                label="Email" 
                                value={this.state.email}
                                required 
                                fullWidth 
                                variant="filled" 
                                type='email'
                                onChange={this.handleChange('email')}
                                color="primary"
                                />
                                <TextField 
                                classes={{root: classes.input}} 
                                id="message" 
                                label="Message"
                                value={this.state.message}
                                required 
                                fullWidth 
                                variant="filled" 
                                multiline 
                                rows="5"
                                onChange={this.handleChange('message')}
                                color="primary"
                                />
                                <Button variant="contained" color="secondary" type='submit' form="contact-form" className={classes.submitButton}>
                                    Submit
                                </Button>
                            </form>
                        </Collapse>
                    </Grid>
            
            </Fragment>
        )
    }

}

export default withStyles(styles)(ContactForm);