import { useEffect, useState } from "react";
import BestOffer from "./BestOffer";
import * as itemsService from '../../services/itemsService';
import LastThreeAdded from "./LastThreeAdded";
import HomeBanner from "./HomeBanner";
import mainStyle from '../../App.module.css';

export default function HomePage() {
    const [bestItem, setBestItem] = useState(null);

    useEffect(() => {
        itemsService.getAllItems()
            .then(items => {
                if (items) {
                    const currBestItemPrice = Math.max(...items.map(item => item.purchasesAmount));
                    const currBestItem = items.find(item => item.purchasesAmount === currBestItemPrice);

                    setBestItem(currBestItem);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={mainStyle["home-main"]}>

            <HomeBanner />

            <LastThreeAdded />

        </div>
    );
}