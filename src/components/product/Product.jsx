import React, {useEffect, useState} from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {Add, Remove} from '@mui/icons-material';
import './Product.scss';
import {connect} from 'react-redux';
import {addToCart, adjustQuantity} from "../../redux/shopping/shopping-actions";
import {Link} from "react-router-dom";

const Product = ({product, addToCart, adjustQuantity, cart}) => {

    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        const item = cart.find(item => item.id === product.id);
        let count = 0;

        if (item) {
            count = item.quantity;
        }

        setItemCount(count);
    }, [cart, itemCount])

    return (
        <Card className={'root'}>
            <CardMedia className={'card-media'} image={product.image} title={product.name}/>
            <CardContent className={'card-content'}>
                <div className={'product'}>
                    <Link to={`/product/${product.id}`}>
                        <Typography className={'product-title'} variant="h5" gutterBottom>
                            {product.name} {itemCount > 0 ? <>({itemCount})</> : null}
                        </Typography>
                    </Link>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions className={'card-actions'} disableSpacing>
                <IconButton aria-label="Remove from cart"
                            onClick={() => adjustQuantity(product.id, itemCount - 1)}>
                    <Remove/>
                </IconButton>
                <IconButton aria-label="Add to Cart" onClick={() => addToCart(product.id)}>
                    <Add/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
