import React from 'react';
import './categories.scss'
import {Link} from "react-router-dom";
const Categories = () => {
    return (
        <div className={'categories'}>
            <div className="col">
                <div className="row">
                    <img alt={''} src={'https://images.asos-media.com/products/asos-design-relaxed-polo-with-rib-collar-and-side-splits-in-green/202718920-1-seacrest?$n_480w$&wid=476&fit=constrain'}/>
                    <button>
                        <Link className={'link'} to={'/products/1'}>Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img alt={''} src={'https://images.asos-media.com/products/asos-design-label-beanie-in-oatmeal/202475227-1-oatmeal?$n_480w$&wid=476&fit=constrain'}/>
                    <button>
                        <Link className={'link'} to={'/products/1'}>Women</Link>
                    </button></div>
            </div>
            <div className="col">
                <div className="row">
                    <img alt={''} src={'https://content.asos-media.com/-/media/homepages/mw/2023/january/30-prime/mw/moments/gbl/mw_au_transitional_outerwear_moment_870x1110.jpg'}/>
                    <button>
                        <Link className={'link'} to={'/products/1'}>Men</Link>
                    </button></div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img alt={''} src={'https://images.asos-media.com/products/nike-football-world-cup-2022-netherlands-unisex-crest-t-shirt-in-orange/202357630-1-orange?$n_480w$&wid=476&fit=constrain'}/>
                            <button>
                                <Link className={'link'} to={'/products/1'}>New Seasons</Link>
                            </button></div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img alt={''} src={'https://images.asos-media.com/products/asos-design-co-ord-denim-waistcoat-with-zip-details-in-red/203639052-1-oxblood?$n_480w$&wid=476&fit=constrain'}/>
                            <button>
                                <Link className={'link'} to={'/products/1'}>Accessories</Link>
                            </button></div>
                    </div>
                </div>
                <div className="row">
                    <img alt={''} src={'https://content.asos-media.com/-/media/homepages/mw/2023/january/30-prime/mw/moments/gbl/mw_trainer---vday.jpg'}/>
                    <button>
                        <Link className={'link'} to={'/products/1'}>Shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;