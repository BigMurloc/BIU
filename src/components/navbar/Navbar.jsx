import React, {useState, useEffect} from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@mui/material';
import {ShoppingCart, SportsBar} from "@mui/icons-material";
import './Navbar.scss';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const Navbar = ({cart}) => {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.quantity
        });

        setCartCount(count);
    }, [cart, cartCount])

    return (
        <>
            <AppBar position="relative" className={'appbar'} color="inherit">
                <Toolbar className={'toolbar'}>
                        <Link to={"/"}>
                            <Typography variant="h6" className={'title'}>
                                <SportsBar/>
                                STUDENT PIWO
                            </Typography>
                        </Link>
                    <div>
                        <Link to={"/checkout"}>
                            <IconButton aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={cartCount} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    };
}

export default connect(mapStateToProps)(Navbar);
