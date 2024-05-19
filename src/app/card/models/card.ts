export interface Card {
    userId: number,
    date: Date,
    products: { productId: number, quantity: number };
}

export interface sendProduct {

    productId: number,
    quantity: number
}
