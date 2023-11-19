import styles from './AddItemPage.module.css';
import mainStyle from '../../App.module.css';
import { formCollectionName } from './utils';
import * as itemsService from '../../services/itemsService';
import { useNavigate } from 'react-router-dom';

export default function AddItemPage() {
    const navigate = useNavigate();

    const addItemSubmitHandler = async (e) => {
        e.preventDefault();

        const itemData = Object.fromEntries(new FormData(e.currentTarget));

        const collectionName = formCollectionName(itemData.collectionName);

        try {
            await itemsService.addItem(collectionName, itemData);
    
            navigate(`/${collectionName}`);
            
        } catch (error) {
            //Error notification

            console.log(error);
        }
    }
    return (
        <section className={styles.create}>
            <div className={styles.form}>
                <h2>Add item</h2>
                <form className={styles["create-form"]} onSubmit={addItemSubmitHandler}>
                    <select name="collectionName">
                        <option value="Home Decorations">Home Decorations</option>
                        <option value="Gift Sets">Gift Sets</option>
                        <option value="Custom Text On Wood">Custom Text On Wood</option>
                    </select>
                    <input type="text" name="name" placeholder="Name" defaultValue="" />
                    <input type="text" name="price" placeholder="Price" defaultValue="" />
                    <input type="text" name="imageUrl" placeholder="Image url starting with http:// or https://" defaultValue="" />
                    <textarea name="description" placeholder="Description..."></textarea>

                    <button type="submit" className={mainStyle.button}>Add</button>
                </form>
            </div>
        </section>
    );
}