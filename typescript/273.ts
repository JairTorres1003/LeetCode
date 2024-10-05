function numberToWords(num: number): string {
    if (num === 0) return "Zero";

    const lessThan20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];

    function helper(n: number): string {
        if (n === 0) return "";
        if (n < 20) return lessThan20[n] + " ";
        if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
        return lessThan20[Math.floor(n / 100)] + " Hundred " + helper(n % 100);
    }

    let result = "";
    let i = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[i] + " " + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
}

// test cases
console.time('case 1')
console.log(numberToWords(123)) // Output: "One Hundred Twenty Three"
console.timeEnd('case 1')
console.time('case 2')
console.log(numberToWords(12345)) // Output: "Twelve Thousand Three Hundred Forty Five"
console.timeEnd('case 2')
console.time('case 3')
console.log(numberToWords(1234567)) // Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
console.timeEnd('case 3')
