import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import transformCollecitonName from '../../utils/transformCollectionName';

import * as itemsService from '../../services/itemsService';

import styles from './AddItemPage.module.css';
import mainStyle from '../../App.module.css';
import validateFormValues from '../../utils/validateFormValues';
import AuthContext from '../../contexts/authContext';

const AddItemFormKeys = {
    FromCollection: 'fromCollection',
    Name: 'name',
    ImageUrl: 'imageUrl',
    Description: 'description',
}

export default function AddItemPage() {
    const navigate = useNavigate();
    const { accessToken } = useContext(AuthContext);

    const addItemSubmitHandler = async (values) => {
        const collectionName = transformCollecitonName(values.fromCollection);

        try {

            validateFormValues(values);

            const newItem = await itemsService.addItem(values, accessToken);

            navigate(`/${collectionName}/${newItem._id}/details`);

        } catch (error) {
            throw error;
        }
    };

    const { values, onChange, onSubmit } = useForm({
        [AddItemFormKeys.FromCollection]: 'Home Decorations',
        [AddItemFormKeys.Name]: '',
        [AddItemFormKeys.ImageUrl]: '',
        [AddItemFormKeys.Description]: '',
    }, addItemSubmitHandler);

    return (
        <section className={styles.create}>
            <div className={styles.form}>
                <h2>Add item</h2>
                <form className={styles["create-form"]} onSubmit={onSubmit}>
                    <select name={AddItemFormKeys.FromCollection} value={values[AddItemFormKeys.FromCollection]} onChange={onChange}>
                        <option value="Home Decorations">Home Decorations</option>
                        <option value="Gift Sets">Gift Sets</option>
                        <option value="Custom Items">Custom Items</option>
                    </select>
                    <input
                        type="text"
                        name={AddItemFormKeys.Name}
                        placeholder="Name"
                        value={values[AddItemFormKeys.Name]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name={AddItemFormKeys.ImageUrl}
                        placeholder="Image url starting with http:// or https://"
                        value={values[AddItemFormKeys.ImageUrl]}
                        onChange={onChange}
                    />
                    <textarea
                        name={AddItemFormKeys.Description}
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