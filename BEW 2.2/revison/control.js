const trueStatement = true

if(trueStatement){
    console.log("This statement is true")
}else{
    console.log("This statement is false")
}

//using comparison operators
const marks =70
const failGrade =59

if (marks <= failGrade){
    console.log ("you fail")
}else{
        console.log ("you pass")
}

//write the if else,but the code blocks for it and else have to be flipped

if (marks > failGrade){
    console.log ("you pass")
}else{
        console.log ("you fail")
}


const standardPay = 8
const minimumHours = 40
const otHours = 20

let OTRate= 1.5

if(otHours > 15){
    OTRate = 2
}
console.log("Your OT pay is " + OTRate * standardPay *otHours)