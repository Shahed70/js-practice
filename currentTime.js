const today = new Date();
const day = today.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`Today is : ${daylist[day]}`);
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let prepand = hours >= 12 ? "PM":"AM";


if (hours===0 && prepand===' PM ') 
{ 
if (minute===0 && second===0)
{ 
getHours=12;
prepand=' Noon';
} 
else
{ 
hours=12;
prepand=' PM';
} 
} 
if (hours===0 && prepand===' AM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Midnight';
} 
else
{ 
hours=12;
prepand=' AM';
} 
} 
console.log(`Current Time: ${hours}${prepand}:${minutes}:${seconds}`);
