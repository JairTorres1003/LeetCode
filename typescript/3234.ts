function numberOfSubstrings(s: string): number {
  const n = s.length
  let count = 0
  const onesUpTo = Array(n + 1).fill(0)

  for (let i = 0; i < n; i++) {
    onesUpTo[i + 1] = onesUpTo[i] + (s[i] === '1' ? 1 : 0)
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const ones = onesUpTo[j + 1] - onesUpTo[i]
      const zeros = j - i + 1 - ones

      if (ones >= zeros * zeros) {
        count++
      }
    }
  }

  return count
}

// Ejemplos de prueba
console.time('case 1')
console.log(numberOfSubstrings('00011')) // Output: 5
console.timeEnd('case 1')
console.time('case 2')
console.log(numberOfSubstrings('101101')) // Output: 16
console.timeEnd('case 2')
