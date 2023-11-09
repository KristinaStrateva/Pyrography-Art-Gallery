import { useEffect, useState } from "react";
import BestOffer from "./BestOffer";
import * as itemsService from '../services/itemsService';
import ShopByCategories from "./ShopByCategories";
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

            <BestOffer item={{ ...bestItem }} />

            <HomeBanner />

            <ShopByCategories />
            
        </div>
    );
}