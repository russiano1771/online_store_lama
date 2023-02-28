import React, {useState} from 'react';
import './list.scss'
import Card from "../card/card";
import {useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch";


const List = ({subCats, maxPrice, sort, catId}) => {
    const {data, loading, error}
    = useFetch
    (`/products?populate=*&[filters][categories][id]=${catId}
    ${subCats.map( item => `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)
    return (
        <div className={'list'}>
            {loading ? "Loading, please wait" : data?.map( data =>
            <Card
            key={data.id}
            item={data}
            />
            )}
        </div>
    );
};

export default List;