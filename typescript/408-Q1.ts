function canAliceWin(nums: number[]): boolean {
    let singleDigitSum = 0;
    let doubleDigitSum = 0;
    let totalSum = 0;

    for (const num of nums) {
        if (num < 10) {
            singleDigitSum += num;
        } else {
            doubleDigitSum += num;
        }
        totalSum += num;
    }

    return singleDigitSum > totalSum / 2 || doubleDigitSum > totalSum / 2;
}

console.log(canAliceWin([1,2,3,4,10])); // false
console.log(canAliceWin([1,2,3,4,5,14])); // true
console.log(canAliceWin([5,5,5,25])); // true
