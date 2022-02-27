import {  useEffect, useState } from "react";
import useProducts from "./useProducts";
import useStorage from "./useStorage";

const useCart = () => {

    const [cart, setCart] = useState([]);
    
    const { addToDb, handleDbQty, removeFromDb, getStoredCart } = useStorage();
    const { data } = useProducts();

    // load data from the local storage
    // load data from local storage
    useEffect(()=>{

        
        if(data?.length){
            const storedCart = [];
            const saveCart = getStoredCart();
            for(const key in saveCart){
                const addedProduct = data.find(pd => pd._id == key);
                if(addedProduct){
                    const cartQty = saveCart[key];
                    addedProduct['cartQty'] = cartQty;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[data])


    const handleAddCart = product =>{

        const exist = cart.find( pd => pd._id === product._id );
        let newAdd = [];

        if(!exist){
            product['cartQty'] = 1;
            newAdd = [...cart, product];
        }else{

            const rest = cart.filter(pd => pd.id !== product.id);
            product['cartQty'] = parseInt(exist['cartQty']) + 1;
            newAdd = [...rest, product];
        }
        setCart(newAdd);
        addToDb(product._id)
    }

    const handleRemoveCart = product =>{

        const exist = cart.find( pd => pd._id === product._id );

        if(exist.cartQty >= 1){

            product['cartQty'] = exist['cartQty'] - 1;
            let newCount = [];
            
            if(product.cartQty === 0){
                product['cartQty'] = 0;
                const removeEmptyQty = cart.filter(pd => pd._id !==product._id);
                newCount = [...removeEmptyQty];
                removeFromDb(product.id)
                
            }else{
                const remainQtyProduct = cart.filter(pd => pd._id !== product._id)
                newCount = [...remainQtyProduct, product];
                setCart(newCount);
            }
            setCart(newCount);
            handleDbQty(product._id)
        }
    }

    const deleteCartItem = product =>{
        const newCartItem = cart.filter(item=> item._id !== product._id);
        setCart(newCartItem);
        removeFromDb(product._id)
    }

    // handle shipping details
    const [shipping, setShipping] = useState([]);
    const handleShippingDetails = (data) =>{
        setShipping(data);
    }

    let cartTotal = 0;
    for(const cartItem of cart){
        cartTotal = (cartItem.salePrice * cartItem.cartQty) + cartTotal;
    }
 
    return{
        handleAddCart,
        cart,
        handleRemoveCart,
        deleteCartItem,
        cartTotal,
        shipping,
        handleShippingDetails,
        setCart
    }
};

export default useCart;