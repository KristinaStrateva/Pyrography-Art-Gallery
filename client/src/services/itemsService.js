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
}