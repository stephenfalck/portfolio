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
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '8px',
        paddingBottom: '8px',
        transition: "background-color .5s ease-in-out, padding .5s ease-in-out;",
    },
    toolbarMobile: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '8px',
        paddingBottom: '8px',
        backgroundColor: 'rgb(25,25,25)',
        transition: "padding .5s ease-in-out;"
    },
    links: {
        color: 'white',
        textDecoration: 'none',
    },
    activeLink: {
        fontWeight: 'bold',
        textDecoration: 'underline'
    }, 
    scrolled: {
        backgroundColor: 'rgb(25,25,25)',
        paddingTop: '0px',
        paddingBottom: '0px',
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
            <AppBar position="fixed" color='transparent'>
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