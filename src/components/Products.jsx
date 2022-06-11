import React from 'react';
import {Grid} from '@mui/material'
import Product from "./product/Product";

const products = [
    {id: 1, name: 'Perła', description: 'Perła export a nie import', price:'2.99 zł', image: 'https://sklep.spolemkielce.pl/wp-content/uploads/2020/04/perla_perla-export_piwo-56-procent-butelka-bzw_500ml.png'},
    {id: 2, name: 'Harnaś', description: 'Harnaś, bo czemu by nie', price: '1.99 zł', image: 'https://sklep.spolemkielce.pl/wp-content/uploads/2020/04/perla_perla-export_piwo-56-procent-butelka-bzw_500ml.png'}
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
