import React from 'react';
import './featuredProducts.scss'
import Card from "../card/card";
import useFetch from "../../hooks/useFetch";



const FeaturedProducts = ({type}) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    return (
        <div className={'featuredProducts'}>
           <div className="top">
               <h1>{type} products</h1>
               <p style={{width:800}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam atque blanditiis, consequatur consequuntur debitis, dignissimos distinctio dolor dolores enim excepturi in ipsam laboriosam minima minus natus nisi non perferendis perspiciatis porro quidem quis quisquam quo ratione reiciendis, reprehenderit saepe sapiente sequi similique tempora velit vitae voluptatem voluptatum! Amet aspernatur cum id maiores nostrum obcaecati quas qui, rerum temporibus tenetur!</p>
           </div>

            <div className="bottom">
                {error ? "Что то пошло не так" : loading ? "Loading" : data.map( item => <Card item={item} key={item.id} />
                )}
            </div>
        </div>
    );
};

export default FeaturedProducts;