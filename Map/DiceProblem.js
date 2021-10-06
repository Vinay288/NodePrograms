let diceMap = new Map();
let index = 0;
while (index < 10) {
    let diceNumber = (Math.floor(Math.random() * 10) % 6) + 1
    if (diceMap.has(diceNumber)) {
        diceMap.set(diceNumber, diceMap.get(diceNumber) + 1)
    }
    else {
        diceMap.set(diceNumber, 1)
    }
    index++;

}
console.log(diceMap)
let maximumRolledNumber, maximumRolledCount, minimumRolledNumber, minimumRolledNumberCount
for (const [key, value] of diceMap.entries()) {
    if (value == Math.max(...diceMap.values())) {
        maximumRolledNumber = key;
        maximumRolledCount = value
    }
    if (value == Math.min(...diceMap.values())) {
        minimumRolledNumber = key;
        minimumRolledNumberCount = value;
    }
}
console.log("Most rolled number is: " + maximumRolledNumber + " count is " + maximumRolledCount)
console.log("Most rolled number is: " + minimumRolledNumber + " count is " + minimumRolledNumberCount)