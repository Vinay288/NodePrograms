let harmonic = 1.00;
var range = process.argv[2];
for (let i = 2; i <= range; i++) {
    harmonic += 1 / i;
}
console.log(harmonic);