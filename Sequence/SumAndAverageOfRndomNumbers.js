let sum=0;
for(let numbers=0;numbers<5;numbers++)
{
    let number=Math.floor(Math.random() * 90 + 10);
    console.log(number);
    sum+=number;

}
let average=sum/5;
console.log("Sum is "+sum);
console.log("Average is "+average);
