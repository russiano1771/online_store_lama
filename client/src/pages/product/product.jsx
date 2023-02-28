import React, {useState} from 'react';
import './product.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from "../../hooks/useFetch2";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/cartReducer";


const Product = () => {
    const id = useParams().id
    const [selectedImg, setSelectedImg] = useState("img")
    const [quantity, setQuantity] = useState(1)
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`); /// populate = заселяет фотографии
    const dispatch = useDispatch()
    return (
        <div className={'product'}>
            {loading ? ("Loading, please Wait") : (<>
                <div className="left">
                <div className="images">
                    <img
                        src={
                            process.env.REACT_APP_UPLOAD_URL +
                            data?.attributes?.img?.data?.attributes?.url
                        }
                        alt=""
                        onClick={(e) => setSelectedImg("img")}
                    />
                    <img
                        src={
                            process.env.REACT_APP_UPLOAD_URL +
                            data?.attributes?.img2?.data?.attributes?.url
                        }
                        alt=""
                        onClick={(e) => setSelectedImg("img2")}
                    />
                </div>
                <div className="mainImage">
                    <img
                        src={
                            process.env.REACT_APP_UPLOAD_URL +
                            data?.attributes[selectedImg]?.data?.attributes?.url
                        }
                        alt=""
                    />                </div>
            </div>
                <div className="right">
                <h1>{data?.attributes?.title}</h1>
                <span className={'price'}>RUB {data?.attributes?.price}</span>
                <p>{data?.attributes?.desc}</p>
                <div className="quantity">
                <button disabled={quantity === 0} onClick={() => setQuantity(prev => prev - 1)}>-</button>
                {quantity}
                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className="add" onClick={() => dispatch(addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity
                }))}>
                <AddShoppingCartIcon/> ADD TO BASKET
                </button>
                <div className="link">
                <div className="item">
                <FavoriteBorderIcon/>ADD  WISH LIST
                </div>
                <div className="item">
                <BalanceIcon/>ADD TO COMPARE
                </div>
                </div>
                <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-shirt</span>
                <span>Tag: T-shirt, Women, Top</span>
                </div>
                <div className="info">
                <span>DESCRIPTION</span>
                <hr/>
                <span>ADDITIONAL INFO</span>
                <hr/>
                <span>F.A.Q</span>
                </div>
                </div>
                </>
                )}
        </div>
    );
};

export default Product;