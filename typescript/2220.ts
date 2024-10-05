function minBitFlips(start: number, goal: number): number {
    let xorResult = start ^ goal;
    
    let flips = 0;
    while (xorResult > 0) {
        flips += xorResult & 1;
        xorResult >>= 1;
    }
    
    return flips;
}

// test cases
console.time('case 1')
console.log(minBitFlips(10, 7)) // Output: 3
console.timeEnd('case 1')
console.time('case 2')
console.log(minBitFlips(3, 4)) // Output: 3
console.timeEnd('case 2')