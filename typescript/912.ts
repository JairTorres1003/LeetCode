function countingSort(nums: number[]): number[] {
  let minVal = Math.min(...nums)
  let maxVal = Math.max(...nums)

  const countArray = new Array(maxVal - minVal + 1).fill(0)

  for (let num of nums) {
    countArray[num - minVal]++
  }

  let index = 0
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      nums[index++] = i + minVal
      countArray[i]--
    }
  }

  return nums
}

function mergeSort(nums: number[], temp: number[], left: number, right: number): void {
  if (left >= right) {
    return // Base case: subarray of one element
  }

  if (right - left <= 15) {
    // Umbral para Insertion Sort
    insertionSort(nums, left, right)
    return
  }

  const mid = Math.floor((left + right) / 2)

  // Recursively divide
  mergeSort(nums, temp, left, mid)
  mergeSort(nums, temp, mid + 1, right)

  // Combine the sorted subarrays
  merge(nums, temp, left, mid, right)
}

function insertionSort(nums: number[], left: number, right: number) {
  // Implementación de Insertion Sort
  for (let i = left + 1; i <= right; i++) {
    let key = nums[i]
    let j = i - 1
    while (j >= left && nums[j] > key) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = key
  }
}

function merge(nums: number[], temp: number[], left: number, mid: number, right: number): void {
  let i = left,
    j = mid + 1,
    k = left

  while (i <= mid && j <= right) {
    temp[k++] = nums[i] <= nums[j] ? nums[i++] : nums[j++]
  }

  // Copy the remaining elements from the left subarray (if any)
  while (i <= mid) {
    temp[k++] = nums[i++]
  }

  // Copy the remaining elements from the right subarray (if any)
  while (j <= right) {
    temp[k++] = nums[j++]
  }

  // Copy the sorted elements back to the original array
  for (let m = left; m <= right; m++) {
    nums[m] = temp[m]
  }
}

function sortArray(nums: number[]): number[] {
  const THRESHOLD = 100 // Threshold to choose the algorithm

  if (nums.length <= THRESHOLD) {
    return countingSort(nums)
  } else {
    let temp: number[] = new Array(nums.length)
    mergeSort(nums, temp, 0, nums.length - 1)
    return nums
  }
}

// Example usage
console.time('sortArray')
const nums1 = [5, 2, 3, 1]
console.log(sortArray(nums1)) // Output: [1, 2, 3, 5]
console.timeEnd('sortArray')

console.time('sortArray')
const nums2 = [5, 1, 1, 2, 0, 0]
console.log(sortArray(nums2)) // Output: [0, 0, 1, 1, 2, 5]
console.timeEnd('sortArray')
