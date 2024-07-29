class Solution {
  private maxX: number
  private maxY: number
  private num_c: number
  private cc: number
  private par: number[]
  private cx: number[]
  private cy: number[]
  private r: number[]

  constructor() {
    this.maxX = 0
    this.maxY = 0
    this.num_c = 0
    this.cc = 0
    this.par = new Array(2000).fill(0)
    this.cx = new Array(2000).fill(0)
    this.cy = new Array(2000).fill(0)
    this.r = new Array(2000).fill(0)
  }

  private find(idx: number): number {
    if (idx === this.par[idx]) {
      return idx
    } else {
      this.par[idx] = this.find(this.par[idx])
      return this.par[idx]
    }
  }

  private merge(idx1: number, idx2: number): void {
    this.par[this.find(idx1)] = this.find(idx2)
  }

  public canReachCorner(X: number, Y: number, circles: [number, number, number][]): boolean {
    this.maxX = X
    this.maxY = Y
    this.num_c = circles.length
    this.cc = 0

    for (let i = 1; i <= this.num_c; i++) {
      const [cx, cy, r] = circles[i - 1]
      if (cx - r >= this.maxX) continue
      if (cy - r >= this.maxY) continue
      this.cc++
      this.cx[this.cc] = cx
      this.cy[this.cc] = cy
      this.r[this.cc] = r
      this.par[this.cc] = this.cc
    }

    for (let i = 1; i <= this.cc; i++) {
      for (let j = i + 1; j <= this.cc; j++) {
        if (
          (this.cx[i] - this.cx[j]) ** 2 + (this.cy[i] - this.cy[j]) ** 2 <=
          (this.r[i] + this.r[j]) ** 2
        ) {
          this.merge(i, j)
        }
      }
    }

    let flag = false
    for (let i = 1; i <= this.cc; i++) {
      for (let j = 1; j <= this.cc; j++) {
        if (this.find(i) === this.find(j)) {
          if (this.cx[i] - this.r[i] <= 0 && this.cy[j] - this.r[j] <= 0) {
            flag = true
            break
          }
          if (this.cx[i] - this.r[i] <= 0 && this.cx[j] + this.r[j] >= this.maxX) {
            flag = true
            break
          }
          if (this.cy[i] - this.r[i] <= 0 && this.cy[j] + this.r[j] >= this.maxY) {
            flag = true
            break
          }
          if (this.cx[i] + this.r[i] >= this.maxX && this.cy[j] + this.r[j] >= this.maxY) {
            flag = true
            break
          }
        }
      }
      if (flag) break
    }

    return flag
  }
}

type Circle = [number, number, number]

function canReachCorner(X: number, Y: number, circles: Circle[]): boolean {
  const solution = new Solution()
  return solution.canReachCorner(X, Y, circles)
}

// Ejemplos de prueba
console.log(canReachCorner(3, 4, [[2, 1, 1]])) // true
console.log(canReachCorner(3, 3, [[1, 1, 2]])) // false
console.log(
  canReachCorner(3, 3, [
    [2, 1, 1],
    [1, 2, 1],
  ])
) // false
console.log(
  canReachCorner(5, 9, [
    [4, 7, 1],
    [2, 1, 1],
    [4, 7, 1],
    [3, 7, 1],
    [4, 1, 1],
    [4, 7, 1],
    [1, 5, 1],
  ])
) // true
console.log(
  canReachCorner(13, 5, [
    [3, 1, 1],
    [8, 3, 1],
    [12, 2, 1],
    [6, 4, 1],
    [6, 4, 1],
    [4, 3, 1],
    [5, 4, 1],
  ])
) // true
