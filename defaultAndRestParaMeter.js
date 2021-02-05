//Default parameter
function sum(x=10, y = 20){
    return `${x} ${y}`
}
console.log(sum());

//Rest parameter

const add = (x, y, ...z)=>{
        console.log(x, y, z);
}
add(10, 20, 30, 40, 50, 60)


// es6 rest parameter 
function fun(...input){ 
    let sum = 0; 
    for(let i of input){ 
        sum+=i; 
    } 
    return sum; 
} 
console.log(fun(1,2)); //3 
console.log(fun(1,2,3)); //6 
console.log(fun(1,2,3,4,5)); //15


// rest with function and other arguments 
function fun(a,b,...c){ 
	console.log(`${a} ${b}`); //Mukul Latiyan 
	console.log(c); //[ 'Lionel', 'Messi', 'Barcelona' ] 
	console.log(c[0]); //Lionel 
	console.log(c.length); //3 
	console.log(c.indexOf('Lionel')); //0 
} 
fun('Mukul','Latiyan','Lionel','Messi','Barcelona'); 
