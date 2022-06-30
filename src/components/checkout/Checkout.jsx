import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import './Checkout.scss'
import {Button, List, ListItem} from "@mui/material";
import {removeFromCart} from "../../redux/shopping/shopping-actions";


const Checkout = ({ cart, removeFromCart }) => {

    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        let totalValue = 0;
        cart.forEach(product => {
            const value = product.price * product.quantity;
            totalValue += value;
        })
        setTotalValue(totalValue);
    })

    return (
        <div className={'root-checkout'}>
            <List>
                {
                    cart.map(product => (
                        <ListItem>
                            <span>{product.name}</span>&nbsp;
                            <span>Cena: {product.price} zł</span>&nbsp;
                            <span>Ilość: {product.quantity}</span>&nbsp;
                            <span>Łącznie: {product.price * product.quantity} zł</span>
                            <Button onClick={() => removeFromCart(product.id)}>Usuń</Button>
                        </ListItem>
                ))
                }
            </List>
            <div>Do zapłaty {totalValue} zł</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
