import {useContext} from 'react';
import {ToastContainer} from 'react-toastify';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CartContext from 'context/CartContext';

import CartBody from './CartBody';

import './Cart.css';

const Cart=()=>{
    const {carts,clearCarts}=useContext(CartContext);

    const submitHandler=()=>{
        toast.success("call api",{position: toast.POSITION.TOP_CENTER,autoClose: 2000});

        setTimeout(()=>{
            clearCarts();
        },2000);
    };

    return (
        <div className="cart">
            <h2 className="cart-title">購物車</h2>
            {carts.length>0?<CartBody submitHandler={submitHandler} />:<h1 className="cart-empty">歡迎選購</h1>}
            <ToastContainer />
        </div>
    );
}

export default Cart;