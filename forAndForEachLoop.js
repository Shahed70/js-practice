var cars = ["Saab", "Volvo", "BMW"];
let myarr = []
cars.forEach((x)=>{
     myarr.push(`${x} 1`)
})
//console.log(myarr);

let num = [10, 20, 30 ,40]
console.log(num);
num.forEach((x, ind, arr)=>{
    arr[ind] = x + 5
})
console.log(num);