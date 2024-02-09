import { useEffect, useState } from 'react';

import * as itemsService from '../../services/itemsService';

import LastThreeAdded from "./LastThreeAdded/LastThreeAdded";
import HomeBanner from "./HomeBanner/HomeBanner";

import mainStyle from '../../App.module.css';

export default function HomePage() {
    const [lastItems, setLastItems] = useState([]);

    useEffect(() => {
        itemsService.getLastThreeItems()
            .then(items => {
                setLastItems(state => state = [...items]);
            })
            .catch(err => {throw err});
    }, []);

    return (
        <div className={mainStyle["home-main"]}>


            {lastItems.length > 0 && <LastThreeAdded lastItems={lastItems} />}

            {!lastItems.length && <p className={mainStyle["home-paragraph"]}>There are no items yet, but you can add the first one!</p>}

            <HomeBanner />

        </div>
    );
}