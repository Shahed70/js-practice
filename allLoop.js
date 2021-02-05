 
//Object.keys()
//Object.value()
//Object.entries()

const user = {
    name:'Jhon Doe',
    age:32,
    occupation: 'Webdeveloper'
}

console.log( Object.keys(user)); //it provides and array of property 
console.log(Object.values(user));//it provide an array of value

for(const value of Object.values(user)){
  console.log(value);// it Provides all value
}

console.log(Object.entries(user));
for (const [key, value] of Object.entries(user)) { //Taking key and value through
                                                  //destructuring from the looped //array         
 console.log(key+": "+ value); 
}

console.log(Object.entries(user));
for (const entry of Object.entries(user)) {
    console.log(entry[0]+": "+ entry[1]);
}
for(i=0; i<Object.entries(user).length; i++){
    console.log(i);
}
for(const value of Object.values(user)){
  console.log(user.name); //it provide only one called value
}
for(const keys of Object.keys(user)){
  console.log(user.name); //To Provides only one value //it provides value accroding to property
}
for(const key of Object.keys(user)){
  console.log(user[key]); //To Provides only all value // it provides value accroding to property
}

for(let i = 0; i<Object.keys(user).length; i++){
  console.log(user.name);
}


let person = {
firstaname:"Steven",
lastName:"Hancock",
email:"hanckock@allthingsjavascript.com",
type:{
type1:"Admin",
type2:"User"
},
active:true,
address:{
street:"100 N. Main",
city:"Fake city",
zip:10001
}
}

for(let value in person){
console.log(value +": "+ person[value]);
}