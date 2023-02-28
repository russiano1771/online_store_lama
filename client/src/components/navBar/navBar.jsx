import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './navbar.scss'
import flag from '../image/flag.png'
import {Link} from "react-router-dom";
import Cart from "../cart/cart";
import {useSelector} from "react-redux";
const NavBar = () => {

    const [cartOpen, setCartOpen] = useState(false)
    const products = useSelector((state) => state.cart.products)

    return (
        <div className={'navbar'}>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src={flag} alt={'flag'}/>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <Link className={'link'} to={'/products/1'}>Women</Link>
                    </div>
                    <div className="item">
                        <Link className={'link'} to={'/products/2'}>Men</Link>
                    </div>
                    <div className="item">
                        <Link className={'link'} to={'/products/3'}>Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className={'link'} to={'/'}>ERIC ROSS</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className={'link'} to={'/'}>Home Page</Link>
                    </div>

                    <div className="item">
                        <Link className={'link'} to={'/'}>Contacts</Link>
                    </div>

                    <div className="item">
                        <Link className={'link'} to={'/'}>About Us</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>
                        <PersonOutlineIcon/>
                        <FavoriteBorderIcon/>
                       <div onClick={() => setCartOpen(!cartOpen)}
                           className="shoppingCart">
                           <ShoppingCartOutlinedIcon/>
                           <span>{products.length}</span>
                       </div>
                    </div>
                </div>
            </div>
            {cartOpen && <Cart/>}
        </div>
    );
};

export default NavBar;