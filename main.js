function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} este an bisect.`;
    } else {
        return `${year} nu este an bisect.`;
    }
}

console.log(isLeapYear(2024)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 
console.log(isLeapYear(2023)); 

// Ex. 1
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`Delfinii au cistigat (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas au cistigat (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log("Nu este cistigator.");
    }
}

// Test 1
let avgDolphins1 = calcAverage(44, 23, 71);
let avgKoalas1 = calcAverage(65, 54, 49);
checkWinner(avgDolphins1, avgKoalas1);

// Test 2
let avgDolphins2 = calcAverage(85, 54, 41);
let avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);
