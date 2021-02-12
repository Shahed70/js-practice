const normalPerson = {
    firstName: 'Karim',
    lastName:'Ahmed',
    salary:15000,
    getFullName:function(){
        console.log(this.firstName, this.lastName);
    },

    chargeBill:function(amount){
        this.salary = this.salary-amount
        return this.salary
    }

}

const p1 = {
    firstName:'Salman',
    lastName:'Sah',
    salary:25000,
}

const p2 = {
    firstName:'Alman',
    lastName:'Sah',
    salary:20000,
}

const binded = normalPerson.chargeBill.bind(p2)
//console.log(normalPerson.chargeBill(200));
// normalPerson.chargeBill(500)
console.log(binded(100));
normalPerson.chargeBill.call(p1, 500)
console.log(p1.salary);