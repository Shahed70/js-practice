//implicit binding 
//explicit binding
//new binding
//window bindig



//implicit binding

function printPlayerNameFunction (obj){
    obj.printPlayerName = function(){
        console.log(this.name);
    }
}

const sakib = {
    name:'Sakib Al Hasan',
    age:35,
}

const tamim = {
    name:'Tamim iqbul Khan',
    age:34
}
printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);

sakib.printPlayerName()
tamim.printPlayerName()

function person(name, age){
    return{
        name,
        age,
        printName:function(){
            console.log(this.name);
        }
    }
}

let messi = person('Tmim', 35);
console.log(messi);
messi.printName()


//explicit binding

const printName = function(v1, v2, v3){
    console.log( `${this.name} ${v1} ${v2} & ${v3}`);
}

const mushfiq = {
        name:'Mushfiqur Rahim',
        age:33
}

const v1 = 'Handsome';
const v2 = 'All-rounder';
const v3 = 'Best player'
//bind and call are same the only difference is call directly call the function but the bind doesn't
printName.call(mushfiq, v1, v2, v3) //call method can not take arry it takes single single argument
printName.apply(mushfiq, [v1, v2, v3])
const binded = printName.bind(mushfiq, v1, v2, v3)
binded()
