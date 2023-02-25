import React, {useState} from 'react';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './slider.scss'
const Slider = () => {
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];


    const [currentSlide, setCurrentSlide] = useState(0)


    const next = () => {
        setCurrentSlide( currentSlide === 2 ? 0 : prev => prev + 1)
    }
    const back = () => {
        setCurrentSlide( currentSlide === 0 ? 2 : prev => prev - 1)
    }
    return (
        <div className={'slider'}>
            <div
                style={{transform:`translateX(-${currentSlide * 100}vw)`}}
                className={'container'}>
                <img src={data[0]} alt=""/>
                <img src={data[1]} alt=""/>
                <img src={data[2]} alt=""/>
            </div>
            <div className="icons">
                <div
                    onClick={back}
                    className="icon">
                    <WestOutlinedIcon/>
                </div>
                <div
                    onClick={next}
                    className="icon">
                    <EastOutlinedIcon/>
                </div>
            </div>
        </div>
    );
};

export default Slider;