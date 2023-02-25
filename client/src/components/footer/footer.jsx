import React from 'react';
import payments from '../image/payment.png'
import './footer.scss'
const Footer = () => {
    return (
        <div className={'footer'}>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Children</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Info</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stories</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aspernatur, consectetur consequuntur cupiditate doloremque dolorum earum illum iusto laboriosam modi nesciunt nisi quam quo ratione rem saepe voluptatem voluptatibus?</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aspernatur, consectetur consequuntur cupiditate doloremque dolorum earum illum iusto laboriosam modi nesciunt nisi quam quo ratione rem saepe voluptatem voluptatibus?</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">
                        ERIC ROSS
                    </span>
                    <span className="copyright">
                        ©Copyright 2023. All Rights Reserved.
                    </span>
                </div>
                <div className="right">
                    <img src={payments} alt={''}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;