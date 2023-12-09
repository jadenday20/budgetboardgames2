import fs from 'fs';
import path from 'path';

const productsFilePath = path.join(process.cwd(), '@/json/games');

export function getAllProductIds() {
    const fileContents = fs.readFileSync(productsFilePath, 'utf8');
    const products = JSON.parse(fileContents);
    console.log("hi")

    return products.map((product: { id: any; }) => {
        return {
            params: {
                id: product.id,
            },
        };
    });
}

export function getProductData(id: any) {
    const fileContents = fs.readFileSync(productsFilePath, 'utf8');
    const products = JSON.parse(fileContents);

    const productData = products.find((product: { id: any; }) => product.id === id);

    return {
        id,
        ...productData,
    };
}