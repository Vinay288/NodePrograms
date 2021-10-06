let array = new Array();
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 90 + 10))
}
console.log(array)
let maximum = array.reduce((a, b) => { return Math.max(a, b) });
let minimum = array.reduce((a, b) => { return Math.min(a, b) });
var secondMinimum = Number.MAX_VALUE;
var secondMaximum = Number.MIN_VALUE;
for (let index = 0; index < 10; index++) {
    let number = array.pop();
    if (number > minimum && number < secondMinimum) {
        secondMinimum = number;
    }
    else if (number < maximum && number > secondMaximum) {
        secondMaximum = number;
    }

}
console.log("second minimum number is: " + secondMinimum)
console.log("second maximum number is: " + secondMaximum)