import {useEffect,useContext} from 'react';

import CartContext from 'context/CartContext';

import CartItem from './CartItem';

import './Cart.css';

const CartBody=({submitHandler})=>{
    const {carts,totalPrice,getPrice}=useContext(CartContext);

    useEffect(()=>{
        getPrice();
    },[carts]);

    return (
        <>
            {carts && carts.map(cartItem=>(
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="cart-checkout">
                <div className="underline"></div>
                <div className="cart-checkout-flex">
                    <div>總計</div>
                    <div className="cart-checkout-price">NT$ {totalPrice}元</div>
                </div>
                <button className="btn-order" onClick={submitHandler}>送單</button>
            </div>
        </>
    );
}

export default CartBody;