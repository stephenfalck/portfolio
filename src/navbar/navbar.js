import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    appBar: {
        //boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        boxShadow: 'none',
        //transition: "box-shadow .5s ease-in-out;"
        maxWidth: '100vw',
        left: 0,
    },
    appBarMobile: {
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'rgb(25,25,25)'
        }
    },
    appBarScrolled: {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        transition: "box-shadow .5s ease-in-out;",
        maxWidth: '100vw',
        left: 0
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '8px',
        paddingBottom: '8px',
        transition: "background-color .5s ease-in-out, padding .5s ease-in-out;",
    },
    list: {
        display: 'flex',
        listStyleType: 'none',
        width: '30%',
        justifyContent: 'space-around',
    },
    listMobile: {
        display: 'flex',
        listStyleType: 'none',
        width: '100%',
        justifyContent: 'space-around',
        padding: 0
    },
    links: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            fontWeight: 'bold'
        }
    },
    activeLink: {
        fontWeight: 'bold',
        color: theme.palette.primary.main
    }, 
    scrolled: {
        backgroundColor: 'rgb(25,25,25)',
        paddingTop: '5px',
        paddingBottom: '5px',
    }

  }));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [isTop, setIsTop] = React.useState(true)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const currentTop = window.scrollY < 64

            if (currentTop !== isTop) {
                setIsTop(currentTop)
            }
        })
    })

    const handleScroll = () => {
        return isTop ? "not-scrolled" : classes.scrolled;
    }

    return(
        <div className={classes.root}>
            <AppBar className={isTop ? classes.appBar : classes.appBarScrolled} classes={{root: classes.appBarMobile}} position={matches ? "fixed" : "absolute"} color={matches ? 'transparent' : 'default'}>
                <Toolbar className={classes.toolbar + " " +  handleScroll() }>
                    <ul className={matches ? classes.list : classes.listMobile}>
                        <li>
                        <NavLink exact to="/" activeClassName={classes.activeLink} className={classes.links}>Home</NavLink>
                        </li>
                        <li>
                        <NavLink exact to="/portfolio" activeClassName={classes.activeLink} className={classes.links}>Portfolio</NavLink>
                        </li>
                        <li>
                        <NavLink exact to="/contact" activeClassName={classes.activeLink} className={classes.links}>Contact</NavLink>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;