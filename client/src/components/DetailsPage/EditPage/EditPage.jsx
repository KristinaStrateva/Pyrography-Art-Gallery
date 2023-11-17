import styles from './EditPage.module.css';

export default function EditPage() {
    const item = {};

    return (
        <section className={styles.edit}>
            <div className={styles.form}>
                <h2>Edit item</h2>
                <form className={styles["edit-form"]} method='POST'>
                    <select name="collectionName">
                        <option defaultValue="Home Decorations" selected={item.collectionName === "Home Decorations"} >Home Decorations</option>
                        <option defaultValue="Gift Items" selected={item.collectionName === "Gift Items"} >Gift Items</option>
                        <option defaultValue="Custom Text On Wood" selected={item.collectionName === "Custom Text On Wood"} >Custom Text On Wood</option>
                    </select>
                    <input type="text" name="name" placeholder="Name" defaultValue="" />
                    <input type="text" name="price" placeholder="Price" defaultValue="" />
                    <input type="text" name="imageUrl" placeholder="Image url starting with http:// or https://" defaultValue="" />
                    <textarea name="description" placeholder="Description..."></textarea>

                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    );
}