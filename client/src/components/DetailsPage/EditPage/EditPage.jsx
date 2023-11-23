import styles from './EditPage.module.css';
import mainStyle from '../../../App.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as itemsService from '../../../services/itemsService';
import useForm from '../../../hooks/useForm';

const EditFormKeys = {
    CollectionName: 'collectionName',
    Name: 'name',
    Price: 'price',
    ImageUrl: 'imageUrl',
    Description: 'description',
}

export default function EditPage() {
    const [item, setItem] = useState({});
    const navigation = useNavigate();
    
    const { collectionName, itemId } = useParams();
    
    const [currentCollectionName, setCurrentCollectionName] = useState(collectionName);

    useEffect(() => {
        itemsService.getItemById(collectionName, itemId)
            .then(itemData => {
                setItem(itemData);

                setCurrentCollectionName(collectionName);

                onChange({
                    target: {
                        name: EditFormKeys.CollectionName,
                        value: collectionName,
                    },
                });
                onChange({
                    target: {
                        name: EditFormKeys.Name,
                        value: itemData.name,
                    },
                });
                onChange({
                    target: {
                        name: EditFormKeys.Price,
                        value: itemData.price,
                    },
                });
                onChange({
                    target: {
                        name: EditFormKeys.ImageUrl,
                        value: itemData.imageUrl,
                    },
                });
                onChange({
                    target: {
                        name: EditFormKeys.Description,
                        value: itemData.description,
                    },
                });
            })
            .catch(err => console.log(err));
    }, [collectionName, itemId]);

    // useEffect(() => {
    //     itemsService.getItemById(collectionName, itemId)
    //         .then(setItem)
    //         .catch(err => console.log(err));
    // }, [itemId]);

    // useEffect(() => {
    //     if (item) {
    //       onChange({
    //         target: {
    //           name: EditFormKeys.CollectionName,
    //           value: collectionName,
    //         },
    //       });
    //       onChange({
    //         target: {
    //           name: EditFormKeys.Name,
    //           value: item.name,
    //         },
    //       });
    //       onChange({
    //         target: {
    //           name: EditFormKeys.Price,
    //           value: item.price,
    //         },
    //       });
    //       onChange({
    //         target: {
    //           name: EditFormKeys.ImageUrl,
    //           value: item.imageUrl,
    //         },
    //       });
    //       onChange({
    //         target: {
    //           name: EditFormKeys.Description,
    //           value: item.description,
    //         },
    //       });
    //     }
    //   }, [item, collectionName]);

    const updateItemSubmitHandler = async (values) => {
        try {
            await itemsService.updateItem(collectionName, itemId, values);

            navigation(`/${collectionName}/${itemId}/details`);

        } catch (error) {
            console.log(error);
        }
    };

    const { values, onChange, onSubmit } = useForm({
        [EditFormKeys.CollectionName]: item.collectionName,
        [EditFormKeys.Name]: item.name,
        [EditFormKeys.Price]: item.price,
        [EditFormKeys.ImageUrl]: item.imageUrl,
        [EditFormKeys.Description]: item.description,
    }, updateItemSubmitHandler);

    return (
        <section className={styles.edit}>
            <div className={styles.form}>
                <h2>Edit item</h2>
                <form className={styles["edit-form"]} onSubmit={onSubmit}>
                    <select name="collectionName" value={currentCollectionName} onChange={onChange}>
                        <option value="homeDecorations">Home Decorations</option>
                        <option value="giftSets">Gift Sets</option>
                        <option value="customTextOnWood">Custom Text On Wood</option>
                    </select>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        // defaultValue={item.name}
                        value={values[EditFormKeys.Name]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        // defaultValue={item.price}
                        value={values[EditFormKeys.Price]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image url starting with http:// or https://"
                        // defaultValue={item.imageUrl}
                        value={values[EditFormKeys.ImageUrl]}
                        onChange={onChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Description..."
                        // defaultValue={item.description}
                        value={values[EditFormKeys.Description]}
                        onChange={onChange}
                    ></textarea>

                    <button type="submit" className={mainStyle.button}>Edit</button>
                </form>
            </div>
        </section>
    );
}