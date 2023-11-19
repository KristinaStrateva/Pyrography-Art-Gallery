import styles from './AddItemPage.module.css';
import mainStyle from '../../App.module.css';

export default function AddItemPage() {
    return (
        <section className={styles.create}>
            <div className={styles.form}>
                <h2>Add item</h2>
                <form className={styles["create-form"]} method="POST">
                    <select name="collectionName" placeholder="Select from collection">
                        <option value="Home Decorations">Home Decorations</option>
                        <option value="Gift Items">Gift Items</option>
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