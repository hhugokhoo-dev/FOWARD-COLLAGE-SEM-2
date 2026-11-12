//arrow function syntax 
const multiply = (a,b) => a * b

//traditional functional syntax 

function traditionalMultiply (a,b) {
    return a * b
}

//display all items from an argument 

const displyAll = (arr) => {
    for(item of arr) {
        console.log(item)
    }
}

const phones =["IP" , "Samsung", "Oppo"]
displyAll(phones)

const convertCMtoM = (cm) => {
    const m = cm / 100
    return m
}

const lengthOfCarInCm= 300
convertCMtoM(lengthOfCarInCm)


const lengthOfCarInM = convertCMtoM(lengthOfCarInCm)
const lengthOfLongCarInM = convertCMtoM(500)
console.log(lengthOfCarInM)
console.log(lengthOfLongCarInM)


//an arrow funtion that converts kgs to lbs, then return the result 


const convertKGStoLBS = (kgs) => kgs * 2.2


const itemweight = 400
const iTemWeightinWeight = convertKGStoLBS(itemweight)

console.log(iTemWeightinWeight)
