import { useEffect, useState } from 'react';

import * as itemsService from '../../services/itemsService';

import LastThreeAdded from "./LastThreeAdded/LastThreeAdded";
import HomeBanner from "./HomeBanner/HomeBanner";

import mainStyle from '../../App.module.css';
import Spinner from '../Spinner/Spinner';

export default function HomePage() {
    const [lastItems, setLastItems] = useState([]);
    let isLoading = true;

    useEffect(() => {
        itemsService.getLastThreeItems()
            .then(items => {
                isLoading = false;
                setLastItems(state => state = [...items]);
            })
            .catch(err => {
                isLoading = false;

                throw err;
            });
    }, []);

    return (
        <div className={mainStyle["home-main"]}>

            {isLoading && <Spinner />}

            {!isLoading && lastItems.length > 0 ?
                (<LastThreeAdded lastItems={lastItems} />) :

                (<p className={mainStyle["home-paragraph"]}>There are no items yet, but you can add the first one!</p>)
            }

            <HomeBanner />

        </div>
    );
}