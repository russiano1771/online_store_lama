import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import List from "../../components/list/list";
import './products.scss'
import useFetch from "../../hooks/useFetch";


    const Products = () => {
    const catId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000000)
    const [sort, setSort] = useState(null)
    const [selectedSubCats, setSelectedSubCats] = useState([])
        const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

    const handleChange = (e) => {
        const value = e.target.value
        const isChecked = e.target.checked

        setSelectedSubCats( isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value))
    }

    return (
        <div className={'products'}>
            <div className="left">
                <div className="filterItem">
                    <h2>Категории:</h2>
                    {data.map( (item) => (
                        <div className="inputItem" key={item.id}>
                            <input type={'checkbox'} id={item.id} value={item.id} onChange={handleChange}/>
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    ))}
                </div>
                <hr style={{width:200}}/>
                <div className="filterItem">
                    <h2>Сортировать по цене:</h2>
                    <div className="inputItem">
                            <span>0 RUB</span>
                        <input
                            onChange={(e) => setMaxPrice( e.target.value)}
                            type={"range"} min={6.99} max={300000}/>
                        <span>{maxPrice} RUB</span>
                    </div>
                </div>
                <hr style={{width:200}}/>
                <div className="filterItem">
                    <h2>Сортировать по:</h2>
                    <div className="inputItem">
                        <input type={'radio'} id="asc" value={"asc"} name={"price"} onChange={e => setSort("asc")}/>
                        <label htmlFor="asc">Сначала дешевые</label>
                    </div>
                    <div className="inputItem">
                        <input type={'radio'} id="desc" value={"desc"} name={"price"} onChange={e => setSort("desc")}/>
                        <label htmlFor="desc">Сначала дорогие</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className={'catImg'} src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/home-landing-web/Homepage-banner-Ajio.jpg?format=webp&w=1440&dpr=1.0" alt=""/>
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
            </div>
        </div>
    );
};

export default Products;