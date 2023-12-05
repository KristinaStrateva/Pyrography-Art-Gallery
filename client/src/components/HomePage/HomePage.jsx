import { useEffect, useState } from 'react';

import * as itemsService from '../../services/itemsService';

import LastThreeAdded from "./LastThreeAdded";
import HomeBanner from "./HomeBanner";

import mainStyle from '../../App.module.css';

export default function HomePage() {
    const [lastItems, setLastItems] = useState([]);

    useEffect(() => {
        itemsService.getAllItems()
            .then(items => {
                const sortedLastThreeItems = items.sort((a, b) => b._createdOn - a._createdOn).slice(0, 3);

                setLastItems(sortedLastThreeItems);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={mainStyle["home-main"]}>


            {lastItems.length > 0 && <LastThreeAdded lastItems={lastItems} />}

            {!lastItems.length && <p className={mainStyle["home-paragraph"]}>There are no items yet, but you can add the first one!</p>}

            <HomeBanner />

        </div>
    );
}