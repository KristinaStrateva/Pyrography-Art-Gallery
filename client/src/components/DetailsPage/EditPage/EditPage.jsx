import styles from './EditPage.module.css';

export default function EditPage() {
    return (
        <section className={styles.edit}>
            <div className={styles.form}>
                <h2>Edit item</h2>
                <form className={styles["edit-form"]} method='POST'>
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