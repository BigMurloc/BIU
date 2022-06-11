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
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions className={'card-actions'} disableSpacing >
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
