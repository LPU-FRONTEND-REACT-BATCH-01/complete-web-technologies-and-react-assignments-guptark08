// let cartData = [
//     {
//         id: 1, 
//         name: "watch", 
//         price: 2999, 
//         quantity: 2
//     }, 
//     {
//         id: 2, 
//         name: "Shoes", 
//         price: 299, 
//         quantity: 4
//     }, 
//     {
//         id: 3, 
//         name: "EarPhones", 
//         price: 499, 
//         quantity: 20
//     }
// ]

// cartData.sort((a, b) => {
//     return a.price - b.price
// })

// cartData.sort((a, b) => {
//     return a.quantity - b.quantity
// })

// cartData.sort((a, b) => {
//     return a.name.localeCompare(b.name)
// })

// console.log(cartData)   

// let users = [
//     {
//         id: 1,
//         username: "arush",
//         password: "password"
//     },
//     {
//         id: 2,
//         username: "Esha", 
//         password: "roshan"
//     },
//     {
//         id: 3, 
//         username: "Durgesh", 
//         password: "RandomGirl"
//     }
// ]

// let inputData = {
//     username: "arush", 
//     password: "password"
// }

// // let result = users.some(ele => ele.username === inputData.username && ele.password === inputData.password)

// let usernData = users.find(ele => ele.username == inputData.username)
// if(usernData){
//     if(usernData.password === inputData.password){
//         console.log("Login Successfull")
//     } else {
//         console.log("Incorrect Password")
//     }
// }

// console.log(result);

function addSpices(callback){
    setTimeout(() => {
        console.log("Spices Added")
        callback()
    }, 2000)
}   

function pourOil(callback){
    setTimeout(() => {
        console.log("Oil Poured")
        callback()
    }, 3000)    
}

addSpices(() => {
    pourOil(() => {
        console.log("Cooking Started")
    })}   
)

