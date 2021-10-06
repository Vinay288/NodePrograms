
var number = process.argv[2]
let index = 0, value = 0;
while (index <= number && value < 256) {
    value = Math.pow(2, index)
    console.log(value)
    index++;
}