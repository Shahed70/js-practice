//console.log(window.print());
const year = new Date().getFullYear();
if((year % 4 === 0 && year % 100==0) || year % 4000===0){
    console.log('it is a leap year');
}else{
    console.log('it is not a leap year');
}