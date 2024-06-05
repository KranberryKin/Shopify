import { IProduct } from "../Interfaces/homepageInterface";

interface IHOMEPAGE_CONTANTS {
    products: IProduct[]
}

export const HOMEPAGE_CONSTANTS:IHOMEPAGE_CONTANTS = {
    products: [
        {
            productId: 1,
            productName: "Shoe",
            productPrice: 12,
            productImg: null,
        },
        {
            productId: 2,
            productName: "Socks",
            productPrice: 8,
            productImg: null,
        },
        {
            productId: 3,
            productName: "Hats",
            productPrice: 14,
            productImg: null,
        },
        {
            productId: 2,
            productName: "Shirts",
            productPrice: 9,
            productImg: null,
        },
        {
            productId: 2,
            productName: "Pants",
            productPrice: 20,
            productImg: null,
        },
        {
            productId: 2,
            productName: "Underwear",
            productPrice: 7,
            productImg: null,
        },
    ],
}