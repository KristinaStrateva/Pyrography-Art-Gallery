import styles from './EditPage.module.css';
import mainStyle from '../../../App.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as itemsService from '../../../services/itemsService';

export default function EditPage() {
    const [item, setItem] = useState({});

    const { collectionName, itemId } = useParams();
    const navigation = useNavigate();

    useEffect(() => {
        itemsService.getItemById(collectionName, itemId)
            .then(setItem)
            .catch(err => console.log(err));
    }, [itemId]);

    const updateItemSubmitHandler = (e) => {
        e.preventDefault();

        const itemData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            itemsService.updateItem(collectionName, itemId, itemData);

            navigation(`/${collectionName}/${itemId}/details`);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={styles.edit}>
            <div className={styles.form}>
                <h2>Edit item</h2>
                <form className={styles["edit-form"]} onSubmit={updateItemSubmitHandler}>
                    <select name="collectionName">
                        <option defaultValue="Home Decorations" selected={collectionName === 'homeDecorations'} >Home Decorations</option>
                        <option defaultValue="Gift Sets" selected={collectionName === 'giftSets'} >Gift Sets</option>
                        <option defaultValue="Custom Text On Wood" selected={collectionName === 'customTextOnWood'} >Custom Text On Wood</option>
                    </select>
                    <input type="text" name="name" placeholder="Name" defaultValue={item.name} />
                    <input type="text" name="price" placeholder="Price" defaultValue={item.price} />
                    <input type="text" name="imageUrl" placeholder="Image url starting with http:// or https://" defaultValue={item.imageUrl} />
                    <textarea name="description" placeholder="Description...">{item.description}</textarea>

                    <button type="submit" className={mainStyle.button}>Edit</button>
                </form>
            </div>
        </section>
    );
}