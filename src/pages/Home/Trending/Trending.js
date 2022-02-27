import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { AiFillEye } from "react-icons/ai";
import { BiHeart, BiPlus, BiMinus } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Rating from 'react-rating';
import { MyContext } from '../../../App';
import './Trending.css';


const Trending = () => {

    const [trend, setTrend] = useState([]);
    const [trendBanner, setTrenBanner] = useState({})
    const [trendsLoading, setTrendsLoading] = useState(true);

    useEffect(()=>{
        const trendingProduct = fetch('https://damp-fortress-84268.herokuapp.com/trends')
        .then(res => res.json())
        .then(data => {
            const trendBannerLimit = data[0];
            const trendLimit = data.filter(dt => dt._id !== trendBannerLimit._id);
            setTrenBanner(trendBannerLimit);
            setTrend(trendLimit);
            setTrendsLoading(false);
        });
        
        return () => trendingProduct;

    }, []);


    const { handleAddCart, cart, handleRemoveCart, wishlist, addToWishlist } = useContext(MyContext);

    const TrendCartQtyShow = ({product}) =>{
        
        const trendSpecificProduct = cart?.find(ci => ci._id === product._id);
        
        return <span className="item__qty">{trendSpecificProduct?.cartQty}</span>;
    }

    const TrendBannerQtyShow = ({product}) =>{
        
        const trendSpecificBannerProduct = cart?.find(ci => ci._id === product._id);
        
        return <span className="item__qty">{trendSpecificBannerProduct?.cartQty}</span>;
    }

    const checkTrends = trend.length === 0;

    return (
        <>
            <div id="trends">
                <div className="container">
                    <div className="sectionHeader">
                        <h2 className="sectionHeader__title">
                            Trending Items
                        </h2>
                    </div>
                </div>
                {
                    trendsLoading ?
                    <div id="spinner__section">
                        <div className="container">
                            <div className="spinner__inner">
                                <Spinner animation="border" className='spinner__color' />
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container mt-4">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6 col-12">
                                {
                                    !checkTrends && 
                                    <div className="product__wrapper big__banner--product">
                                    {
                                        trendBanner.offer &&
                                        <div className="offer__chip">
                                            {trendBanner.offer}% off
                                        </div>
                                    }
                                    <div className="product__overly">
                                        <button className='btn__overly btn__view'>
                                            <AiFillEye/>
                                        </button>
                                        {
                                            wishlist.find(wl => wl._id === trendBanner._id) ?
                                            <button className='btn__overly btn__wishlist'>
                                                <BsFillSuitHeartFill className='wishlist__full--heart'/>
                                            </button>
                                            :
                                            <button onClick={()=>addToWishlist(trendBanner)} className='btn__overly btn__wishlist'>
                                                <BiHeart/>
                                            </button>
                                        }
                                    </div>
                                    <div className="product__thumbnail">
                                        <img src={trendBanner.image} alt="" />
                                    </div>
                                    <div className="product__info--wrapper">
                                        <div className="product__info">
                                            <h3 className="product__sm--title">{trendBanner.title}</h3>
                                            <p className="rating">
                                                <Rating
                                                    emptySymbol="fa fa-star-o fa-2x"
                                                    fullSymbol="fa fa-star fa-2x"
                                                    initialRating={trendBanner.rating}
                                                    readonly
                                                />
                                            </p>
                                            <div className="product__price--details">
                                                <span className="current__price">${trendBanner.salePrice?.toFixed(2)}</span>
                                                {
                                                    trendBanner.regularPrice && 
                                                    <span className="regular__price"><del>${trendBanner.regularPrice?.toFixed(2)}</del></span>
                                                }     
                                            </div>
                                        </div>
                                        <div className="cart__btn--wrapper">
                                            <div className={cart?.find(pd=> pd._id === trendBanner._id) ? 'btn__block':'btn__hidden'}>
                                                <button onClick={()=>handleRemoveCart(trendBanner)} className="btn__minus">
                                                    <BiMinus/>
                                                </button>
                                                <TrendBannerQtyShow key={trendBanner._id} product={trendBanner}></TrendBannerQtyShow>
                                            </div>
                                            <button onClick={()=> handleAddCart(trendBanner)} className="btn__plus">
                                                <BiPlus/>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                }
                            </div>
                            <div className="col-lg-8 col-md-6 col-12">
                                <div className="row gy-4">
                                    {
                                        trend.map(product => <div key={product._id} className="col-lg-4 col-md-6 col-12">
                                            <div className="product__wrapper">
                                                {
                                                    product.offer &&
                                                    <div className="offer__chip">
                                                        {product.offer}% off
                                                    </div>
                                                }
                                                <div className="product__overly">
                                                    <button className='btn__overly btn__view'>
                                                        <AiFillEye/>
                                                    </button>
                                                    {
                                                        wishlist.find(wl => wl._id === product._id) ?
                                                        <button className='btn__overly btn__wishlist'>
                                                            <BsFillSuitHeartFill className='wishlist__full--heart'/>
                                                        </button>
                                                        :
                                                        <button onClick={()=>addToWishlist(product)} className='btn__overly btn__wishlist'>
                                                            <BiHeart/>
                                                        </button>
                                                    }
                                                </div>
                                                <div className="product__thumbnail">
                                                    <img src={product.image} alt={product.title} />
                                                </div>
                                                <div className="product__info--wrapper">
                                                    <div className="product__info">
                                                        <h3 className="product__sm--title">{product.title}</h3>
                                                        <p className="rating">
                                                            <Rating
                                                                emptySymbol="fa fa-star-o fa-2x"
                                                                fullSymbol="fa fa-star fa-2x"
                                                                initialRating={product.rating}
                                                                readonly
                                                            />
                                                        </p>
                                                        <div className="product__price--details">
                                                            <span className="current__price">${product.salePrice?.toFixed(2)}</span>
                                                            {
                                                                product.regularPrice && <span className="regular__price"><del>${product.regularPrice?.toFixed(2)}</del></span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="cart__btn--wrapper">
                                                        <div className={cart.find(pd=> pd.id === product.id) ? 'btn__block':'btn__hidden'}>
                                                            <button onClick={()=>handleRemoveCart(product)} className="btn__minus">
                                                                <BiMinus/>
                                                            </button>
                                                            <TrendCartQtyShow key={product._id} product={product}></TrendCartQtyShow>
                                                        </div>
                                                        <button onClick={()=> handleAddCart(product)} className="btn__plus">
                                                            <BiPlus/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Trending;