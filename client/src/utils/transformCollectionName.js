export default function transformCollectionName(collection) {
    let collectionName = collection.toLowerCase().replace(' ', '-');

    return collectionName;
}