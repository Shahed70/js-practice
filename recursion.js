//f(n-1)+n = f(n)
//last step total = f(n-1)
//current value = n
// current total = f(n)

const sum = (n)=>{
    if(n===0){
        return 0
    }else{
      return  sum(n-1)+n;
    }
}
console.log(sum(3));