const add = (x, y, z)=>{
    return x+y+z
}
const numbers = [2, 3, 4]
console.log(add(...numbers));

const num1 =[7, 5, 3]
const num2 = [10, 20, ...num1]
//Array concatenation with spread operator
const nums = [...num1, ...num2]
console.log(nums);

const obj1 = {
    name:'Anisul Islam',
    age:30
}
const obj2 = {
    occupation:'Student',
    city:'Dhaka'
}

//Concatinatin two object with spread operator

const newObj = {...obj1, ...obj2}
console.log(newObj);