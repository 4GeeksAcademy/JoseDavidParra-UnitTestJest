const sum = (a,b) => {
    return a+b
}

let oneEuroIs = {
    "JPY":127.9,
    "USD":1.2,
    "GBP":0.8
}

const fromDollarToYen = (num) => {
    return parseFloat(((num/oneEuroIs.USD)*oneEuroIs.JPY).toFixed(2))
}
const fromEuroToDollar = (num) => {
    return parseFloat((num*oneEuroIs.USD).toFixed(2))
}
const fromYenToPound = (num) => {
    return parseFloat(((num/oneEuroIs.JPY)*oneEuroIs.GBP).toFixed(2))
}

// console.log(sum(7,3));
module.exports = {sum,fromDollarToYen,fromEuroToDollar,fromYenToPound};

