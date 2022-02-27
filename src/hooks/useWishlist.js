import { useEffect, useState } from "react";
import useProducts from "./useProducts";
import useStorage from "./useStorage";

const useWishlist = () => {

    const [wishlist, setWishlist] = useState([]);
    const { addToWishlistDb, getStoredWishlist } = useStorage();

    const { data } = useProducts();
    useEffect(()=>{

        
        if(data?.length){
            const storedWishlist = [];
            const saveWishlist = getStoredWishlist();
            for(const key in saveWishlist){
                const addedProduct = data.find(pd => pd._id == key);
                if(addedProduct){
                    const cartQty = saveWishlist[key];
                    addedProduct['cartQty'] = cartQty;
                    storedWishlist.push(addedProduct);
                }
            }
            setWishlist(storedWishlist);
        }
    },[data])

    const addToWishlist = (product) => {

        const exist = wishlist.find( pd => pd._id === product._id );
        let newWishlistAdd = [];

        if(!exist){
            newWishlistAdd = [...wishlist, product];
        }else{
            newWishlistAdd = [...wishlist];
        }
        setWishlist(newWishlistAdd);
        addToWishlistDb(product._id)
    }

    return {
        addToWishlist,
        wishlist
    };
};

export default useWishlist;