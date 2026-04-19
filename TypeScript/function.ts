type paymentOptionAvailable = "UPI" | "Net Banking" | "Card" | "Wallet";

function payment(modeOfPayment:paymentOptionAvailable, amount:number):number {
    if (modeOfPayment === "UPI") {
        const upiId = "user@bank";
        console.log(`Processing UPI payment of ${amount} using ${upiId}`);
        amount = amount - 0.05 * amount;
        return amount;
    } else if (modeOfPayment === "Net Banking") {
        const bankName = "ABC Bank";
        console.log(`Processing Net Banking payment of ${amount} through ${bankName}`);
        amount = amount - 0.10 * amount;
        return amount;
    } else if (modeOfPayment === "Card") {
        const cardNumber = "**** **** **** 1234";
        console.log(`Processing Card payment of ${amount} using card number ${cardNumber}`);
        amount = amount - 0.20 * amount;
        return amount;
    } else if (modeOfPayment === "Wallet") {
        const walletName = "Paytm";
        console.log(`Processing Wallet payment of ${amount} using ${walletName}`);
        amount = amount - 0.25 * amount;
        return amount;
    } else {
        console.log("Invalid payment option selected.");
        return 0;
    } 
}

console.log(payment("UPI", 1000));
console.log(payment("Net Banking", 1000));
console.log(payment("Card", 1000));
console.log(payment("Wallet", 1000));