import React from 'react';
import { makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    footerContainer: {
        minHeight: '75px',
        background: 'rgb(25,25,25)',
        padding: '0px 20px 0px 20px',
    },
    footerItems: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        padding: '0px 5px 0px 5px',
        minHeight: 'inherit'
    },
    icons: {
        display: 'flex',
        width: '75px',
        justifyContent: 'space-around',
    },
    footerLinks: {
        color: 'white',
        '&:hover': {
            transform: 'translateY(-5px)'
        }
    }
})

function Footer(){
    const classes = useStyles()

    return(
        <div className={classes.footerContainer}>
            <div className={classes.footerItems}>
                <p>Stephen Falck © 2020</p>
                <div className={classes.icons}>
                    <a href="https://github.com/stephenfalck" rel="noopener noreferrer" target="_blank" className={classes.footerLinks}>
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/stephen-falck/" rel="noopener noreferrer" target='_blank' className={classes.footerLinks}>
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;