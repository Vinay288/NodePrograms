let birthMonthMap, birthYear;
let birthYearMap = new Map();

birthYearMap.set(1992, new Map())
birthYearMap.set(1993, new Map())

for (let index = 1; index <= 50; index++) {
    let getYear = Math.floor(Math.random() * 10) % 2;

    if (getYear == 0) {
        birthYear = 1992;
    }
    else if (getYear == 1) {
        birthYear = 1993;
    }

    birthMonthMap = birthYearMap.get(birthYear)
    let person = index;
    let birthMonth = (Math.floor(Math.random() * 100) % 12) + 1;
    if (birthMonthMap.has(birthMonth)) {
        let sameBirthMonthArray = birthMonthMap.get(birthMonth);
        sameBirthMonthArray.push(person);
        birthMonthMap.set(birthMonth, sameBirthMonthArray);
    }
    else {
        let sameBirthMonthArray = new Array();
        sameBirthMonthArray.push(person);
        birthMonthMap.set(birthMonth, sameBirthMonthArray);
    }
    birthYearMap.set(birthYear, birthMonthMap)
}
console.log("People with same birth month ")
console.log(birthYearMap)