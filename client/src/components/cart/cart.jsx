import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './cart.scss'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeItem, resetCart} from "../../redux/cartReducer";



        const Cart = () => {
            const dispatch = useDispatch()
        const navigate = useNavigate()
        const products = useSelector((state) => state.cart.products)
        const totalPrice = () => {
            let total = 0
            products.forEach((item) => {total += item.quantity * item.price} )
            return total.toFixed(2)

        }

        return (
        <div className={'cart'}>
            <h1>Products in Your Basket</h1>
            {products?.map( data =>
                <div
                    onClick={() => navigate('/product/' + data.id)}
                    className={'item'} key={data.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + data.img} alt=""/>
                    <div className="details">
                        <h1>{data.title}</h1>
                        <p>{data.desc.substring(0, 100)}</p>
                        <div className="price">
                            {data.quantity} X ${data.price}
                        </div>
                    </div>
                    <DeleteOutlineOutlinedIcon
                        onClick={() => dispatch(removeItem(data.id))}
                        className={'delete'}/>
                </div>
            )}
            <div className="total">
                <span>SUBTOTAL :</span>
                <span>RUB {totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>RESET CART</span>
        </div>
    );
};

export default Cart;