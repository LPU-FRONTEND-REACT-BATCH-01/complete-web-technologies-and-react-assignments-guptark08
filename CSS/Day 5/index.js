let cartData = [
    {
        id: 1, 
        name: "watch", 
        price: 2999, 
        quantity: 2
    }, 
    {
        id: 2, 
        name: "Shoes", 
        price: 299, 
        quantity: 4
    }, 
    {
        id: 3, 
        name: "EarPhones", 
        price: 499, 
        quantity: 20
    }
]

// cartData.sort((a, b) => {
//     return a.price - b.price
// })

// cartData.sort((a, b) => {
//     return a.quantity - b.quantity
// })

cartData.sort((a, b) => {
    return a.name.localeCompare(b.name)
})

console.log(cartData)   