import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import {ShoppingCart, SportsBar} from "@mui/icons-material";
import './Navbar.scss';

const Navbar = () => {
    return (
        <>
            <AppBar position="relative" className={'appbar'} color="inherit">
                <Toolbar className={'toolbar'}>
                    <a href={"/"}>
                        <Typography variant="h6" className={'title'}>
                            <SportsBar/>
                            STUDENT PIWO
                        </Typography>
                    </a>
                    <div>
                        <IconButton aria-label="Show cart items" color="inherit" href={"/checkout"}>
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
