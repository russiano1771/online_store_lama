import React from 'react';
import Slider from "../../components/slider/slider";
import './home.scss'
import FeaturedProducts from "../../components/featuredProducts/featuredProducts";
import Categories from "../../components/categories/categories";
import Contact from "../../components/contact/contact";
const Home = () => {

    return (
        <div className={'home'}>
            <Slider/>
            <FeaturedProducts type={'featured'}/>
            <Categories/>
            <FeaturedProducts type={'trending'}/>
            <Contact/>
        </div>
    );
};

export default Home;