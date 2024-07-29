function nonSpecialCount(l: number, r: number): number {
    function generatePrimes(limit: number): number[] {
        const isPrime = Array(limit + 1).fill(true);
        isPrime[0] = isPrime[1] = false;
        for (let i = 2; i * i <= limit; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= limit; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        return isPrime.map((prime, index) => prime ? index : -1).filter(index => index !== -1);
    }

    const sqrtR = Math.floor(Math.sqrt(r));
    const primes = generatePrimes(sqrtR);
    let specialCount = 0;

    for (const prime of primes) {
        const square = prime * prime;
        if (square >= l && square <= r) {
            specialCount++;
        }
    }

    const totalNumbers = r - l + 1;
    const nonSpecialCount = totalNumbers - specialCount;

    return nonSpecialCount;
}

console.log(nonSpecialCount(5, 7));  // Output: 3
console.log(nonSpecialCount(4, 16));  // Output: 11
console.log(nonSpecialCount(1, 1));  // Output: 1
