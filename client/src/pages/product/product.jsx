import React, {useState} from 'react';
import './product.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const data = [
        'https://images.asos-media.com/products/daisy-street-90s-blazer-in-brown-croc-co-ord/203052754-1-browncroc?$n_480w$&wid=476&fit=constrain',
        'https://images.asos-media.com/products/heartbreak-tall-halter-neck-cropped-waistcoat-co-ord-in-purple-check/202065906-1-purplecheck?$n_480w$&wid=476&fit=constrain',
        'https://images.asos-media.com/products/yas-linen-mix-tailored-blazer-co-ord-in-yellow/202805733-1-yellow?$n_480w$&wid=476&fit=constrain'
    ]
    return (
        <div className={'product'}>
            <div className="left">
                <div className="images">
                    <img src={data[0]} alt={''} onClick={e => setSelectedImg(0)}/>
                    <img src={data[1]} alt={''} onClick={e => setSelectedImg(1)}/>
                    <img src={data[2]} alt={''} onClick={e => setSelectedImg(2)}/>
                </div>
                <div className="mainImage">
                    <img src={data[selectedImg]} alt={''}/>
                </div>
            </div>
            <div className="right">
                <h1>Product Name</h1>
                <span className={'price'}>$199.00</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloribus eius fugit hic impedit itaque, iure iusto minus odit pariatur provident quidem tempore veritatis! Ad aliquam amet assumenda aut blanditiis consectetur dolorem dolores eveniet expedita fugiat impedit inventore itaque minima molestiae nostrum placeat quae quibusdam repellat sequi ut, voluptas voluptates?</p>
                <div className="quantity">
                    <button disabled={quantity === 0} onClick={() => setQuantity(prev => prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                    <button className="add">
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
        </div>
    );
};

export default Product;