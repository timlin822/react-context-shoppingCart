import {useContext} from 'react';
import {FaMinus,FaPlus,FaTrash} from 'react-icons/fa';

import CartContext from 'context/CartContext';

import './Cart.css';

const CartItem=({cartItem})=>{
    const {increaseQuantity,decreaseQuantity,deleteCart}=useContext(CartContext);

    const increaseHandler=(productId)=>{
        increaseQuantity(productId);
    };
    const decreaseHandler=(productId)=>{
        decreaseQuantity(productId);
    };
    const deleteHandler=(productId)=>{
        if(window.confirm("是否刪除?")){
            deleteCart(productId);
        }
    };

    return (
        <div className="cart-item">
            <div className="cart-item-column"><img src={cartItem.images} alt="product"/></div>
            <div className="cart-item-column">
                <div className="cart-item-title">{cartItem.title}</div>
                <div className="cart-item-quantity">
                    <FaMinus className="icon" onClick={()=>decreaseHandler(cartItem.id)} />
                    <div className="quantity">{cartItem.quantity}</div>
                    <FaPlus className="icon" onClick={()=>increaseHandler(cartItem.id)} />
                </div>
            </div>
            <div className="cart-item-column">
                <div className="cart-item-price">NT$ {cartItem.price*cartItem.quantity}元</div>
                <FaTrash className="remove-icon" onClick={()=>deleteHandler(cartItem.id)} />
            </div>
        </div>
    );
}

export default CartItem;