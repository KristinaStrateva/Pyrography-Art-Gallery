import { useNavigate } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import formCollectionName from '../../utils/formCollectionName';

import * as itemsService from '../../services/itemsService';

import styles from './AddItemPage.module.css';
import mainStyle from '../../App.module.css';

const AddItemFormKeys = {
    CollectionName: 'collectionName',
    Name: 'name',
    Price: 'price',
    ImageUrl: 'imageUrl',
    Description: 'description',
}

export default function AddItemPage() {
    const navigate = useNavigate();

    const addItemSubmitHandler = async (values) => {
        const collectionName = formCollectionName(values.collectionName);

        try {
            await itemsService.addItem(collectionName, values);

            navigate(`/${collectionName}`);

        } catch (error) {
            //Error notification

            console.log(error);
        }
    };

    const { values, onChange, onSubmit } = useForm({
        [AddItemFormKeys.CollectionName]: 'Home Decorations',
        [AddItemFormKeys.Name]: '',
        [AddItemFormKeys.Price]: '',
        [AddItemFormKeys.ImageUrl]: '',
        [AddItemFormKeys.Description]: '',
    }, addItemSubmitHandler);

    return (
        <section className={styles.create}>
            <div className={styles.form}>
                <h2>Add item</h2>
                <form className={styles["create-form"]} onSubmit={onSubmit}>
                    <select name="collectionName" value={values[AddItemFormKeys.CollectionName]} onChange={onChange}>
                        <option value="Home Decorations">Home Decorations</option>
                        <option value="Gift Sets">Gift Sets</option>
                        <option value="Custom Text On Wood">Custom Text On Wood</option>
                    </select>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={values[AddItemFormKeys.Name]}
                        onChange={onChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={values[AddItemFormKeys.Price]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image url starting with http:// or https://"
                        value={values[AddItemFormKeys.ImageUrl]}
                        onChange={onChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Description..."
                        value={values[AddItemFormKeys.Description]}
                        onChange={onChange}
                    ></textarea>

                    <button type="submit" className={mainStyle.button}>Add</button>
                </form>
            </div>
        </section>
    );
}