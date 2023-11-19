const baseUrl = 'http://localhost:3030/jsonstore/items';

export const getAllItems = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    const allItems = {...data.homeDecorations, ...data.giftSets, ...data.customTextOnWood};

    return allItems;
};

export const getAllFromCollection = async (collectionName) => {
    const response = await fetch(`${baseUrl}/${collectionName}`);
    const data = await response.json();

    return data;
};

export const getItemById = async (collectionName, itemId) => {
    const response = await fetch(`${baseUrl}/${collectionName}/${itemId}`);
    const data = await response.json();

    return data;
};

export const addItem = async (collectionName, itemData) => {
    const body = {
        ...itemData,
        price: Number(itemData.price),
        'purchasesAmount': 0,
        'likesAmount': 0
    }
    const response = await fetch(`${baseUrl}/${collectionName}`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const result = await response.json();

    return result;
}