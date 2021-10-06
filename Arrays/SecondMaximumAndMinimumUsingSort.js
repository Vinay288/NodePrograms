let array = new Array();
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 90 + 10))
}
array.sort();
console.log(array)
console.log("Second largest : "+array[8])
console.log("second smallest "+array[1])