import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import List from "../../components/list/list";
import './products.scss'
const Products = () => {

    const catId = parseInt(useParams().id)

    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    return (
        <div className={'products'}>
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type={'checkbox'} id="1" value={1} />
                        <label htmlFor="1">Sale</label>
                    </div>

                    <div className="inputItem">
                        <input type={'checkbox'} id="2" value={1} />
                        <label htmlFor="2">New In</label>
                    </div>

                    <div className="inputItem">
                        <input type={'checkbox'} id="3" value={1} />
                        <label htmlFor="3">Clothing</label>
                    </div>

                    <div className="inputItem">
                        <input type={'checkbox'} id="4" value={1} />
                        <label htmlFor="4">Shoes</label>
                    </div>

                    <div className="inputItem">
                        <input type={'checkbox'} id="5" value={1} />
                        <label htmlFor="5">SportsWear</label>
                    </div>

                    <div className="inputItem">
                        <input type={'checkbox'} id="6" value={1} />
                        <label htmlFor="6">Accessories</label>
                    </div>

                    <div className="inputItem">
                        <input type={'checkbox'} id="7" value={1} />
                        <label htmlFor="7">Winter</label>
                    </div>

                    <div className="inputItem">
                        <input type={'checkbox'} id="8" value={1} />
                        <label htmlFor="8">TopMan</label>
                    </div>

                    <div className="inputItem">
                        <input type={'checkbox'} id="9" value={1} />
                        <label htmlFor="9">Face + Body</label>
                    </div>
                </div>
                <hr style={{width:200}}/>
                <div className="filterItem">
                    <h2>Price Filter</h2>
                    <div className="inputItem">
                        <span>6.99$</span>
                        <input
                            onChange={(e) => setMaxPrice(e.target.value)}
                            type={"range"} min={6.99} max={1600.90}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <hr style={{width:200}}/>
                <div className="filterItem">
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type={'radio'} id="asc" value={"asc"} name={"price"} onChange={e => setSort("asc")}/>
                        <label htmlFor="asc">Price (Lower First)</label>
                    </div>
                    <div className="inputItem">
                        <input type={'radio'} id="desc" value={"desc"} name={"price"} onChange={e => setSort("desc")}/>
                        <label htmlFor="desc">Price (Highest First)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className={'catImg'} src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/home-landing-web/Homepage-banner-Ajio.jpg?format=webp&w=1440&dpr=1.0" alt=""/>
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    );
};

export default Products;