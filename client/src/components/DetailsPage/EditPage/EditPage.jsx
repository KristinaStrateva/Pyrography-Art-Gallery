import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AuthContext from '../../../contexts/authContext';
import * as itemsService from '../../../services/itemsService';

import validateFormValues from '../../../utils/validateFormValues';

import styles from './EditPage.module.css';
import mainStyle from '../../../App.module.css';

const EditFormKeys = {
    FromCollection: 'fromCollection',
    Name: 'name',
    ImageUrl: 'imageUrl',
    Description: 'description',
}

export default function EditPage() {
    const navigate = useNavigate();
    const { accessToken } = useContext(AuthContext);
    const { collectionName, itemId } = useParams();
    const [item, setItem] = useState({
        [EditFormKeys.FromCollection]: '',
        [EditFormKeys.Name]: '',
        [EditFormKeys.ImageUrl]: '',
        [EditFormKeys.Description]: '',
    });

    useEffect(() => {
        itemsService.getItemById(collectionName, itemId)
            .then(itemData => {
                setItem({ ...itemData });
            })
            .catch(err => { throw err });

    }, [collectionName, itemId]);

    const updateItemSubmitHandler = async (event) => {
        event.preventDefault();

        const values = Object.fromEntries(new FormData(event.currentTarget));

        try {
            validateFormValues(values);

            await itemsService.updateItem(collectionName, itemId, values, accessToken);

            navigate(`/${collectionName}/${itemId}/details`);

        } catch (error) {
            throw error;
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
                    <select name="fromCollection" value={item[EditFormKeys.FromCollection].pathName} onChange={onChange}>
                        <option value="home-decorations">Home Decorations</option>
                        <option value="gift-sets">Gift Sets</option>
                        <option value="custom-items">Custom Items</option>
                    </select>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={item[EditFormKeys.Name]}
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