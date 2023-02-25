import React, {useState} from 'react';
import './list.scss'
import Card from "../card/card";
import {useParams} from "react-router-dom";


const List = () => {
    const data = [
        {
            id: 1,
            img:'https://images.asos-media.com/products/asos-design-halloween-choker-mesh-top-with-ruching-in-flame-print/203552421-1-flameprint?$n_640w$&wid=513&fit=constrain',
            img2:'https://ae01.alicdn.com/kf/Hb175c778fa2b4e3388cb7f5534770da2m/NEW-Summer-Autumn-Women-Fashion-Sexy-Print-Backless-Slim-Fit-Cropped-Top-Vintage-Turtleneck-Lace-up.jpg_640x640.jpg',
            title:'Платье Luis Vuitton',
            isNew: true,
            oldPrice:55.90,
            price:35.00
        },
        {
            id: 2,
            img:'https://images.asos-media.com/products/asos-design-embellished-mini-bandeau-dress-with-diamante-and-disc-sequin-detail-in-silver/203207307-1-silver?$n_480w$&wid=476&fit=constrain',
            img2:'https://ae01.alicdn.com/kf/Hb175c778fa2b4e3388cb7f5534770da2m/NEW-Summer-Autumn-Women-Fashion-Sexy-Print-Backless-Slim-Fit-Cropped-Top-Vintage-Turtleneck-Lace-up.jpg_640x640.jpg',
            title:'Платье Luis Vuitton',
            isNew: true,
            oldPrice:78.00,
            price:52.00
        },
        {
            id: 3,
            img:'https://images.asos-media.com/products/asos-design-strappy-embellished-fringe-mini-dress-with-beaded-fringe-in-grey/203382118-1-grey?$n_480w$&wid=476&fit=constrain',
            img2:'https://ae01.alicdn.com/kf/Hb175c778fa2b4e3388cb7f5534770da2m/NEW-Summer-Autumn-Women-Fashion-Sexy-Print-Backless-Slim-Fit-Cropped-Top-Vintage-Turtleneck-Lace-up.jpg_640x640.jpg',
            title:'Платье Luis Vuitton',
            isNew: true,
            oldPrice:95.90,
            price:64.50
        },
        {
            id: 4,
            img:'https://images.asos-media.com/products/asos-design-batwing-sleeve-mini-dress-in-satin-with-wrap-waist-in-terracotta/202464255-1-terracotta?$n_480w$&wid=476&fit=constrain',
            img2:'https://ae01.alicdn.com/kf/Hb175c778fa2b4e3388cb7f5534770da2m/NEW-Summer-Autumn-Women-Fashion-Sexy-Print-Backless-Slim-Fit-Cropped-Top-Vintage-Turtleneck-Lace-up.jpg_640x640.jpg',
            title:'Платье Luis Vuitton',
            isNew: true,
            oldPrice:64.00,
            price:42.90
        },
    ]
    return (
        <div className={'list'}>
            {data?.map( data =>
            <Card
            key={data.id}
            item={data}
            />
            )}
        </div>
    );
};

export default List;