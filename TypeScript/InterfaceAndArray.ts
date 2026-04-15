interface product {
    id: number;
    name: string;
    price: number;
} 

let products: product[] = [
    { 
        id: 1, 
        name: "Laptop", 
        price: 450000 
    },
    { 
        id: 2, 
        name: "Smartphone", 
        price: 20000 
    },
    { 
        id: 3, 
        name: "Tablet", 
        price: 29999 
    }
];

console.log(products)