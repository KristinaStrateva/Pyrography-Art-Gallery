const baseUrl = 'http://localhost:3030/jsonstore/cars';

export const getOneCar = async () => {
    const response = await fetch(baseUrl + '/car1');
    const data = await response.json();

    return data;
}