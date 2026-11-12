//spread operator
const nums1= [1, 2, 3]
const nums2= [4, 5, 6]
const nums3= [...nums1,...nums2]
console.log(nums3) //[1,2,3,4,5,6]

const numWithoutspread = [nums1, nums2 ]
console.log(numWithoutspread) //[[1,2,3,],[4,5,6]]


//spreadoperator with object
const person={
    name:"John Doe",
    age: 18}

const students={
    ...person,
    grade:"Diploma"
}

console.log(students)
//{ name: 'John Doe', age: 18, grade: 'Diploma' }

const studentWithoutSpread = {
    person,
    grade:"Diploma"
}
console.log(studentWithoutSpread)
//{ person: { name: 'John Doe', age: 18 }, grade: 'Diploma' }


//using spread operator in function arguementa
function sum(a, b, c){
    return a + b + c
}
const listOfNums = [15 , 30 ,45 ]
console.log(sum(...listOfNums)) //90

//destructing + spread operator 


//array
const phones = ["Iphone","Vivo","Samsung","Oppo","Nokia",]
const [first, ...rest] = phones

console.log(first)
console.log(rest)

//object
const phone ={
brand:"Apple",
name:"iphone 18 Pro",
year: 2026

}
const updatedphone ={
    ...phone,
    name:"iPhone Duo"
}
console.log(updatedphone)


//combining destructuring and spread in function arguements 
const printSoldierInfo = ({name, ...rest}) => {
    console.log(name)
    console.log(rest)
}

const soldier = {
    id:101,
    name: "Yoo Si Jin",
    age: 27,
    rank: "Captain"
}
printSoldierInfo(soldier)