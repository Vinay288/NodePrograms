let number = process.argv[2];
let numberValue;
if (number == 1) {
    numberValue = "unit"
}
else if (number == 10) {
    numberValue = "ten"

}
else if (number == 100) {
    numberValue = "hundred"

}
else if (number == 1000) {
    numberValue = "thousand"

}
console.log(numberValue)