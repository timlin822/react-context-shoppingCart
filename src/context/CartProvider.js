import {useState,useEffect} from 'react';

import CartContext from './CartContext';

const CartProvider=({children})=>{
    const [carts,setCarts]=useState(JSON.parse(localStorage.getItem("carts")) || []);
    const [totalPrice,setTotalPrice]=useState(0);

    useEffect(()=>{
        if(carts.length>0){
            localStorage.setItem("carts",JSON.stringify(carts));
        }
    },[carts]);

    // 查詢費用
    const getPrice=()=>{
        setTotalPrice(carts.reduce((sum,item)=>sum+(item.price*item.quantity),0));
    };

    // 新增至購物車
    const addCart=(addCartProduct)=>{
        const existProduct=carts.find(cartItem=>cartItem.id===addCartProduct.id);
        if(existProduct){
            existProduct.quantity+=addCartProduct.quantity;
            setCarts(carts.map(cartItem=>cartItem.id===existProduct.id?existProduct:cartItem));
        }
        else{
            setCarts([...carts,addCartProduct]);
        }
    };

    // 數量加1
    const increaseQuantity=(productId)=>{
        const existProduct=carts.find(cartItem=>cartItem.id===productId);
        if(existProduct){
            existProduct.quantity+=1;
            setCarts(carts.map(cartItem=>cartItem.id===existProduct.id?existProduct:cartItem));
        }
    };

    // 數量減1
    const decreaseQuantity=(productId)=>{
        const existProduct=carts.find(cartItem=>cartItem.id===productId);
        if(existProduct){
            existProduct.quantity-=1;
            if(existProduct.quantity<1){
                existProduct.quantity=1;
            }
            setCarts(carts.map(cartItem=>cartItem.id===existProduct.id?existProduct:cartItem));
        }
    };

    // 從購物車刪除
    const deleteCart=(productId)=>{
        setCarts(carts.filter(cartItem=>cartItem.id!==productId));
    };

    // 清空購物車
    const clearCarts=()=>{
        setCarts([]);
        localStorage.removeItem("carts");
    };

    return(
        <CartContext.Provider value={{
            carts,
            totalPrice,
            getPrice,
            addCart,
            increaseQuantity,
            decreaseQuantity,
            deleteCart,
            clearCarts
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;