var myArgs = process.argv.slice(2);
let a=myArgs[0]
let b=myArgs[1]
let c=myArgs[2]
let array=[];
array[0]=a+b*c;
array[1]=a%b+c;
array[2]=c+a/b;
array[3]=a*b+c;

let max=array.reduce((a,b) => {return Math.max(a,b)});
let min=array.reduce((a,b) => {return Math.min(a,b)});
console.log("maximum value: "+max);
console.log("minimum value: "+min);