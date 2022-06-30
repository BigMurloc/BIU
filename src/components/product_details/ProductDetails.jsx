import {useParams} from "react-router";
import {connect} from 'react-redux';
import {addQuantity, removeQuantity} from "../../redux/shopping/shopping-actions";
import {useEffect, useState} from "react";
import './ProductDetails.scss';
import {Button, IconButton, TextField} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";

const ProductDetails = ({products, cart, addQuantity, removeQuantity}) => {

    const {id} = useParams();

    const product = products.find(product => product.id === parseInt(id, 10));

    const [itemCount, setItemCount] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const item = cart.find(item => item.id === product.id);
        let count = 0;

        if (item) {
            count = item.quantity;
        }

        setItemCount(count);
    }, [cart, itemCount])

    return (
        <div className={'product-details-root'}>
            <div className={'product-details-wrapper'}>
                <img className={'product-details-img'} src={product.image} alt={"product photo"}/>
                <div className={'product-details-info'}>
                    <div className={'product-details-title'}><span>{product.name}</span> <span>{product.price} zł</span></div>
                    <div>{product.description}</div>
                    <div className={'product-details-input-wrapper'}>
                        <TextField type={'number'} onChange={(e) => setValue(e.target.value)}/>
                        <div className={'product-details-actions-wrapper'}>
                            <Button onClick={() => removeQuantity(product.id, value)}>Usuń</Button>
                            <Button onClick={() => addQuantity(product.id, value)}>Dodaj</Button>
                        </div>
                    </div>
                    <div>W koszyku: {itemCount}</div>
                    <div>Łączna cena: {itemCount * product.price} zł</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
        cart: state.shop.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addQuantity: (id, value) => dispatch(addQuantity(id, value)),
        removeQuantity: (id, value) => dispatch(removeQuantity(id, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
