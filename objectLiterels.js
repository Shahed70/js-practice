function studentInfo(name, age){
    return {
        name,
        age
    }
}

console.log(studentInfo('Anisul Islam', 20));

//object concise method

let myObj = {
      body(){
          return 'I am object literels'
      }
}

console.log(myObj.body());


//object concise method

let myObj2 = {
    'body name'(){
        return 'I am object literels'
    }
}

console.log(myObj2['body name']());