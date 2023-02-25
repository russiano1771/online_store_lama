import React from 'react';
import {Link} from "react-router-dom";
import './card.scss'
const Card = ({item}) => {
    return (
        <Link to={`/product/${item.id}`} className={'link'}>
            <div className={'card'}>
                <div className="image">
                    {item?.attributes.isNew && <span>New Season</span>}
                    <img src={item.img} alt="" className={'mainImg'}/>
                    <img src={item.img2} alt="" className={'secondImg'}/>
                </div>
                <h2>{item?.attributes.title}</h2>
                <hr/>
                <div className="price">
                    <h3>{item?.oldPrice && "RUB"}</h3>
                    <h3>RUB {item?.attributes.price}</h3>
                </div>
            </div>
        </Link>

    );
};

export default Card;