export default function formCollectionName(collection) {
    let collectionName = collection.toLowerCase().replace(' ', '-');

    return collectionName;
}