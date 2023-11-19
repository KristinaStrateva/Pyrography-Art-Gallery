export const formCollectionName = (collection) => {
    const collectionNameWordsArr = collection.split(' ');
    collectionNameWordsArr[0] = collectionNameWordsArr[0].toLowerCase();

    const collectionName = collectionNameWordsArr.join('');

    return collectionName;
}