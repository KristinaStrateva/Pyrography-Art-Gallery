import { useEffect, useState } from "react";
import BestOffer from "./BestOffer";
import * as itemsService from '../services/itemsService';
import BuyByCategories from "./BuyByCategories";
import HomeBanner from "./HomeBanner";

export default function HomeMain() {
    const [bestItem, setBestItem] = useState(null);

    useEffect(() => {
        itemsService.getAllItems()
            .then(items => {
                const currBestItemPrice = Math.max(...Object.values(items).map(item => item.purchasesAmount));
                const currBestItem = Object.values(items).find(item => item.purchasesAmount === currBestItemPrice);

                setBestItem(currBestItem);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="home-main">
            <BestOffer item={{...bestItem}} />
            <div className="section-container column">
                <BuyByCategories />

                <HomeBanner />
            </div>
            <div className="home-full-width-banner section-container">
                <div className="home-left4">
                    <div className="home-content">
                        <span className="home-text29">LOOKBOOKS</span>
                        <span className="home-text30">
                            Carefully curated furniture, well matched in style and looks
                        </span>
                    </div>
                    <div className="home-btn button">
                        <span className="home-text31">Explore now</span>
                    </div>
                </div>
                <img alt="Rectangle13271410" src="images/pic9.jpg" className="home-image6" />
            </div>      
        </div>
    );
}