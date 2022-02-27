import React from 'react';
import './Filter.css';

const Filter = () => {

    const category = ['sun glass', 'watch', 'shoes'];

    return (
        <>
            <div className="product__search mb-4">
                <span className="form__label">Search Product</span>
                <input type="text" className='product__search--input' placeholder='Search now...' />
            </div>


            <div className="category__filter mb-4">
                <h4 className="sidebar__title">Categories</h4>
                {
                    category.map(ct=> <div className="form__checkbox--group">
                        <input className='checkbox__filter' type="checkbox" name={ct} id={ct} />
                        <label htmlFor={ct}>
                            <span className='checked__style'></span> {ct}
                        </label>
                    </div>)
                }
            </div>


            <div className="price__filter mb-4">
                <h4 className="sidebar__title">Price Range</h4>

                <div className="price__filter--group">
                    <input className="price__filter--from" type="number" min={1} max={1000} />
                    <span className="dashed"> - </span>
                    <input className="price__filter--to" type="number" min={1} max={1000} />
                </div>
            </div>


            <div className="brand__filter">
                <h4 className="sidebar__title">Brand</h4>
                <div className="form__checkbox--group">
                    <input className='checkbox__filter' type="checkbox" name="Maccs" id="maccs" />
                    <label htmlFor="maccs">
                        <span className='checked__style'></span> Maccs
                    </label>
                </div>
                <div className="form__checkbox--group">
                    <input className='checkbox__filter' type="checkbox" name="Karts" id="karts" />
                    <label htmlFor="karts">
                        <span className='checked__style'></span> Karts
                    </label>
                </div>
                <div className="form__checkbox--group">
                    <input className='checkbox__filter' type="checkbox" name="Baars" id="baars" />
                    <label htmlFor="baars">
                        <span className='checked__style'></span> Baars
                    </label>
                </div>
                <div className="form__checkbox--group">
                    <input className='checkbox__filter' type="checkbox" name="Bukks" id="bukks" />
                    <label htmlFor="bukks">
                        <span className='checked__style'></span> Bukks
                    </label>
                </div>
            </div>
        </>
    );
};

export default Filter;