import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './cart.scss'
import {useNavigate} from "react-router-dom";
const Cart = () => {
    const data = [
        {
            id: 1,
            img:'https://images.asos-media.com/products/asos-design-halloween-choker-mesh-top-with-ruching-in-flame-print/203552421-1-flameprint?$n_640w$&wid=513&fit=constrain',
            img2:'https://ae01.alicdn.com/kf/Hb175c778fa2b4e3388cb7f5534770da2m/NEW-Summer-Autumn-Women-Fashion-Sexy-Print-Backless-Slim-Fit-Cropped-Top-Vintage-Turtleneck-Lace-up.jpg_640x640.jpg',
            title:'Платье Luis Vuitton',
            desc:'description ......',
            isNew: true,
            oldPrice:55.90,
            price:35.00
        },
        {
            id: 2,
            img:'https://images.asos-media.com/products/asos-design-embellished-mini-bandeau-dress-with-diamante-and-disc-sequin-detail-in-silver/203207307-1-silver?$n_480w$&wid=476&fit=constrain',
            img2:'https://ae01.alicdn.com/kf/Hb175c778fa2b4e3388cb7f5534770da2m/NEW-Summer-Autumn-Women-Fashion-Sexy-Print-Backless-Slim-Fit-Cropped-Top-Vintage-Turtleneck-Lace-up.jpg_640x640.jpg',
            title:'Платье Luis Vuitton',
            desc:'description ......',
            isNew: true,
            oldPrice:78.00,
            price:52.00
        }
    ]
    const navigate = useNavigate()
    return (
        <div className={'cart'}>
            <h1>Products in Your Basket</h1>
            {data.map( data =>
                <div
                    onClick={() => navigate('/product/' + data.id)}
                    className={'item'} key={data.id}>
                    <img src={data.img} alt=""/>
                    <div className="details">
                        <h1>{data.title}</h1>
                        <p>{data.desc.substring(0, 100)}</p>
                        <div className="price">
                            1 X ${data.price}
                        </div>
                    </div>
                    <DeleteOutlineOutlinedIcon
                        onClick={e => e.stopPropagation()}
                        className={'delete'}/>
                </div>
            )}
            <div className="total">
                <span>SUBTOTAL :</span>
                <span>$123.99</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">RESET CART</span>
        </div>
    );
};

export default Cart;