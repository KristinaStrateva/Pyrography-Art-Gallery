import { useEffect, useState } from 'react';

import * as itemsService from '../../services/itemsService';

import LastThreeAdded from "./LastThreeAdded/LastThreeAdded";
import HomeBanner from "./HomeBanner/HomeBanner";

import mainStyle from '../../App.module.css';
import Spinner from '../Spinner/Spinner';

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [lastItems, setLastItems] = useState([]);

    console.log(isLoading);

    useEffect(() => {
        itemsService.getLastThreeItems()
            .then(items => {
                setIsLoading(false);
                setLastItems(state => state = [...items]);
            })
            .catch(err => {
                // setIsLoading = (state => state = false);

                throw err
            });
    }, []);

    return (
        <div className={mainStyle["home-main"]}>

            {isLoading && <Spinner />}

            {!isLoading && lastItems.length > 0 && (<LastThreeAdded lastItems={lastItems} />)}

            {!isLoading && lastItems.length === 0 && (<p className={mainStyle["home-paragraph"]}>There are no items yet, but you can add the first one!</p>)}

            <HomeBanner />
            
        </div>
    );
}