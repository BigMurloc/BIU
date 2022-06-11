import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import { AddShoppingCart } from '@mui/icons-material';
import './Product.scss';

const Product = ({product}) => {

    return (
        <Card className={'root'} >
            <CardMedia className={'card-media'} image={product.image} title={product.name}/>
            <CardContent className={'card-content'}>
                <div className={'product'}>
                    <Typography className={'product-title'} variant="h5" href={`/product/${product.id}`} gutterBottom>
                        <a href={`/product/${product.id}`}>{product.name}</a>
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions className={'card-actions'}  disableSpacing >
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
