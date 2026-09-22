const products = [
    { id: 1, name: 'maker', qty: 100, price: 15 },
    { id: 2, name: 'taker', qty: 200, price: 30 },

]

let nextId = 3;
export const getAllProduct = () => {
    return products;
};

export const addProduct = (item) => {
    item.id = nextId;
    nextId++;
    products.push(item);
    return item;
};

export const DELETEProduct = (pid) => {
    const item = products.findIndex((prd) => prd.id === pid);
    if (item == -1)
        return false;
    products.splice(item, 1)
    console.log("products remaining:", products);
    return true;
};