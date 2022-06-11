import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import {ShoppingCart, SportsBar} from "@mui/icons-material";
import './Navbar.scss';

const Navbar = () => {
    return (
        <>
            <AppBar position="relative" className={'appbar'} color="inherit">
                <Toolbar className={'toolbar'}>
                    <Typography variant="h6" className={'title'}>
                        <SportsBar/>
                        STUDENT PIWO
                    </Typography>
                    <div>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default Navbar;
