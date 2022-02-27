import React, { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import useCart from './hooks/useCart';
import useFirebase from './hooks/useFirebase';
import useProducts from './hooks/useProducts';
import useWishlist from './hooks/useWishlist';
import Cart from './pages/Cart/Cart/Cart';
import Checkout from './pages/Checkout/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Orders from './pages/Dashboard/Orders/Orders';
import Profile from './pages/Dashboard/Profile/Profile';
import Wishlist from './pages/Dashboard/Wishlist/Wishlist';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Payment from './pages/Payment/Payment';
import Register from './pages/Register/Register';
import Shop from './pages/Shop/Shop/Shop';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import UserRoute from './shared/UserRoute/UserRoute';

export const MyContext = createContext();

const App = () => {

    const {handleAddCart, cart, handleRemoveCart, deleteCartItem, cartTotal, setCart} = useCart();
    const { data } = useProducts();
    const { newUser, loading } = useFirebase();
    const { wishlist, addToWishlist } = useWishlist();

    return (
        <>  
            <MyContext.Provider value={{handleAddCart, cart, data, handleRemoveCart, deleteCartItem, cartTotal, newUser, loading, setCart, wishlist, addToWishlist}}>
                <BrowserRouter>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/cart" element={<UserRoute><Cart /></UserRoute>} />
                        <Route path="/checkout" element={<UserRoute><Checkout /></UserRoute>} />
                        <Route path="/payment" element={<UserRoute><Payment /></UserRoute>} />
                        <Route path="/dashboard" element={<UserRoute><Dashboard /></UserRoute>}>
                            <Route path="order" element={<UserRoute><Orders /></UserRoute>} />
                            <Route path="wishlist" element={<UserRoute><Wishlist /></UserRoute>} />
                            <Route path="profile" element={<UserRoute><Profile /></UserRoute>} />
                        </Route>
                        <Route path="/contact-us" element={<Contact />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
            </MyContext.Provider>
        </>
    );
};

export default App;