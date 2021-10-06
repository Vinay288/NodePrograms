var myArgs = process.argv.slice(2);
let max=myArgs.reduce((a,b) => {return Math.max(a,b)});
let min=myArgs.reduce((a,b) => {return Math.min(a,b)});
console.log("maximum = "+max+" minimum = "+min);