const baseUrl = 'http://localhost:3030/jsonstore/items';

export const getAllItems = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    const allItems = {...data.homeDecoration, ...data.giftSets, ...data.customTextOnWood};

    return allItems;
};

export const getAllHomeDecorations = async () => {

}