import styles from './EditPage.module.css';
import mainStyle from '../../../App.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as itemsService from '../../../services/itemsService';

const EditFormKeys = {
    CollectionName: 'collectionName',
    Name: 'name',
    Price: 'price',
    ImageUrl: 'imageUrl',
    Description: 'description',
}

export default function EditPage() {
    const navigate = useNavigate();
    const { collectionName, itemId } = useParams();
    const [currentCollectionName, setCurrentCollectionName] = useState(collectionName);
    const [item, setItem] = useState({
        [EditFormKeys.CollectionName]: '',
        [EditFormKeys.Name]: '',
        [EditFormKeys.Price]: '',
        [EditFormKeys.ImageUrl]: '',
        [EditFormKeys.Description]: '',
    });

    useEffect(() => {
        itemsService.getItemById(collectionName, itemId)
            .then(itemData => {
                setItem(itemData);

                setCurrentCollectionName(collectionName);
            })
            .catch(err => console.log(err));
    }, [collectionName, itemId]);

    const updateItemSubmitHandler = async (event) => {
        event.preventDefault();

        const values = Object.fromEntries(new FormData(event.currentTarget));

        try {
            await itemsService.updateItem(collectionName, itemId, values);

            navigate(`/${collectionName}/${itemId}/details`);

        } catch (error) {
            console.log(error);
        }
    };

    const onChange = (event) => {
        setItem(state => ({
            ...state,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <section className={styles.edit}>
            <div className={styles.form}>
                <h2>Edit item</h2>
                <form className={styles["edit-form"]} onSubmit={updateItemSubmitHandler}>
                    <select name="collectionName" value={currentCollectionName} onChange={onChange}>
                        <option value="homeDecorations">Home Decorations</option>
                        <option value="giftSets">Gift Sets</option>
                        <option value="customTextOnWood">Custom Text On Wood</option>
                    </select>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={item[EditFormKeys.Name]}
                        onChange={onChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={item[EditFormKeys.Price]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image url starting with http:// or https://"
                        value={item[EditFormKeys.ImageUrl]}
                        onChange={onChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Description..."
                        value={item[EditFormKeys.Description]}
                        onChange={onChange}
                    ></textarea>

                    <button type="submit" className={mainStyle.button}>Edit</button>
                </form>
            </div>
        </section>
    );
}