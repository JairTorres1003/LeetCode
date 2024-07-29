function numTeams(rating: number[]): number {
  let count = 0
  const n = rating.length

  for (let j = 0; j < n; j++) {
    let minLeft = 0,
      maxLeft = 0,
      minRight = 0,
      maxRight = 0

    // Count elements less and greater than rating[j] to the left of j
    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) minLeft++
      if (rating[i] > rating[j]) maxLeft++
    }

    // Count elements less and greater than rating[j] to the right of j
    for (let k = j + 1; k < n; k++) {
      if (rating[k] < rating[j]) minRight++
      if (rating[k] > rating[j]) maxRight++
    }

    // Add the number of valid teams with rating[j] as the middle element
    count += minLeft * maxRight + maxLeft * minRight
  }

  return count
}

console.log(numTeams([2, 5, 3, 4, 1])) // 3
console.log(numTeams([2, 1, 3])) // 0
console.log(numTeams([1, 2, 3, 4])) // 4
