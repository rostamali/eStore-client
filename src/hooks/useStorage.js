const useStorage = () =>{

    const getDb = () => localStorage.getItem('react_eStore_cart');
    let react_eStore_cart = {};

    // add product on local storage
    const addToDb = id => {

        const exists = getDb();

        if (!exists) {
            react_eStore_cart[id] = 1;
        }
        else {

            react_eStore_cart = JSON.parse(exists);

            if (react_eStore_cart[id]) {

                react_eStore_cart[id] = react_eStore_cart[id] + 1;
            }
            else {
                react_eStore_cart[id] = 1;
            }
        }
        updateDb(react_eStore_cart);
    }

    // decrease the db quantity
    const handleDbQty = id =>{
        const exists = getDb();
        react_eStore_cart = JSON.parse(exists);
        if(react_eStore_cart[id] >= 1){

            react_eStore_cart[id] = react_eStore_cart[id] - 1;

            if(react_eStore_cart[id] === 0){
                delete react_eStore_cart[id];
            }
            updateDb(react_eStore_cart);
        }
    }

    // remove product from local storage
    const removeFromDb = id => {
        const exists = getDb();
        const react_eStore_cart = JSON.parse(exists);
        delete react_eStore_cart[id];
        updateDb(react_eStore_cart);
    }

    const updateDb = cart => {
        localStorage.setItem('react_eStore_cart', JSON.stringify(cart));
    }

    // get data from local storage
    const getStoredCart = () => {
        const exists = getDb();
        return exists ? JSON.parse(exists) : {};
    }

    // clear the cart
    const clearTheCart = () => {
        localStorage.removeItem('react_eStore_cart');
    }

    /* ============== wishlist ============== */ 
    const getWishlistDb = () => localStorage.getItem('eStore_wishlist');
    let eStore_wishlist = {};

    const updateWishlistDb = wishlist => {
        localStorage.setItem('eStore_wishlist', JSON.stringify(wishlist));
    }

    const addToWishlistDb = id => {

        const exists = getWishlistDb();

        if (!exists) {
            eStore_wishlist[id] = 1;
        }
        else {

            eStore_wishlist = JSON.parse(exists);

            if (eStore_wishlist[id]) {

                eStore_wishlist[id] = 1;
            }
            else {
                eStore_wishlist[id] = 1;
            }
        }
        updateWishlistDb(eStore_wishlist);
    }

    const clearTheWishlist = () => {
        localStorage.removeItem('eStore_wishlist');
    }

    const getStoredWishlist = () => {
        const exists = getWishlistDb();
        return exists ? JSON.parse(exists) : {};
    }

    return{
        addToDb,
        removeFromDb,
        handleDbQty,
        getStoredCart,
        clearTheCart,
        addToWishlistDb,
        clearTheWishlist,
        getStoredWishlist
    }
}

export default useStorage;



  
  
  
  
  
//   const clearTheCart = () => {
//     localStorage.removeItem('shopping_cart');
//   }
  
//   export { addToDb, removeFromDb, clearTheCart, getStoredCart }