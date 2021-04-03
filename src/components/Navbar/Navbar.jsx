import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom'

import logo from '../../assets/logoDI.png'
import useStyles from './styles'


const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    

	return (
        <>
        <AppBar position="fixed" className={classes.appbar} color="inherit" >
            <Toolbar>
                <Typography component={Link} to="/">
                    <img src={logo} alt="Dejalo Ir" height="25px" className={classes.image}/>
                    
                </Typography>
                <Typography>DEJALO.IR 👌</Typography>
                <div className={classes.grow}/>
                {location.pathname === '/' && (
                <div className={classes.button}>

                    <IconButton component={Link} to="/cart" arial-label="mostrar items del carrito" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton> 
                </div> )}
            </Toolbar>
        </AppBar>
        </>
        
    );
};

export default Navbar;
