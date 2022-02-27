import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { MyContext } from '../../../App';
import Filter from '../../../shared/Filter/Filter';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
import './Shop.css';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Spinner } from 'react-bootstrap';

const Shop = () => {

    // const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [shopLoading, setShopLoading] = useState(true);

    useEffect(()=>{

        const shopProduct = fetch('https://damp-fortress-84268.herokuapp.com/products')
            .then(res=> res.json())
            .then(data => {
                setFilter(data)
                setShopLoading(false)
        });
        
        return () => shopProduct
    }, [])

    const { handleAddCart, cart, handleRemoveCart, addToWishlist } = useContext(MyContext);

    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = 6;
    const pagesVisited = pageNumber * productPerPage;
    const pageCount = Math.ceil(filter.length / productPerPage);

    const handlePageClick = ({selected}) =>{
        setPageNumber(selected);
    }

    const displayProduct = filter.slice(pagesVisited, pagesVisited + productPerPage).map(product => <DisplayProduct
            key = {product.id}
            products = {product}
            handleAddCart = {handleAddCart}
            handleRemoveCart = {handleRemoveCart}
            cart = {cart}
            addToWishlist = {addToWishlist}
        >
        </DisplayProduct>
    )

    return (
        <>
            {
                shopLoading ? 
                <div id="spinner__section">
                    <div className="container">
                        <div className="spinner__inner">
                            <Spinner animation="border" className='spinner__color' />
                        </div>
                    </div>
                </div>
                :
                <div id="shop__section">
                    <div className="container">
                        <div className="products">
                            <div className="row gy-4">
                                <div className="col-lg-3 col-md-12 col-12">
                                    <div className="shop__sidebar">
                                        <Filter/>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-12 col-12">
                                    <div className="shop__products--wrapper">
                                        <div className="row gy-4">
                                            {displayProduct}
                                            <ReactPaginate
                                                breakLabel="..."
                                                nextLabel={<BsChevronDoubleRight/>}
                                                previousLabel={<BsChevronDoubleLeft/>}
                                                onPageChange={handlePageClick}
                                                pageRangeDisplayed={5}
                                                pageCount={pageCount}
                                                renderOnZeroPageCount={null}
                                                containerClassName={'paginationContainer'}
                                                activeClassName={'activePage'}
                                                pageClassName={'pageItem'}
                                                pageLinkClassName={'pageLink'}
                                                disabledClassName={'disabled'}
                                                previousClassName={"previousPage"}
                                                nextClassName={"nextPage"}
                                                previousLinkClassName={"previousPageLink"}
                                                nextLinkClassName={"nextPageLink"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Shop;