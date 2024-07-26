function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
  const INF = Number.MAX_VALUE
  const dist = Array.from({ length: n }, () => Array(n).fill(INF))

  // Inicializar la distancia de cada ciudad a sí misma a 0
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0
  }

  // Configurar las distancias iniciales basadas en las aristas (edges)
  for (const [from, to, weight] of edges) {
    dist[from][to] = weight
    dist[to][from] = weight
  }

  // Encontra el camino mínimo
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] < INF && dist[k][j] < INF) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
        }
      }
    }
  }

  let minCity = -1
  let minVisits = INF

  for (let i = 0; i < n; i++) {
    let visitsCount = 0
    for (let j = 0; j < n; j++) {
      if (i !== j && dist[i][j] <= distanceThreshold) {
        visitsCount++
      }
    }

    // Actualizar la ciudad con el menor número de ciudades que puede visitar
    if (visitsCount < minVisits || (visitsCount === minVisits && i > minCity)) {
      minCity = i
      minVisits = visitsCount
    }
  }

  return minCity
}

// V2 - Usando Dijkstra
// function dijkstra(n: number, edges: number[][], start: number): number[] {
//   const dist = Array(n).fill(Infinity)
//   const nodeDist: { node: number; dist: number }[] = []

//   dist[start] = 0
//   nodeDist.push({ node: start, dist: 0 })

//   while (nodeDist.length > 0) {
//     // Extraer el nodo con la distancia mínima
//     nodeDist.sort((a, b) => a.dist - b.dist)
//     const { node, dist: currDist } = nodeDist.shift()!

//     if (currDist > dist[node]) continue

//     // Actualiza las distancias de los nodos vecinos
//     for (const [from, to, weight] of edges) {
//       if (from === node || to === node) {
//         const neighbor = from === node ? to : from
//         const newDist = currDist + weight
//         if (newDist < dist[neighbor]) {
//           dist[neighbor] = newDist
//           nodeDist.push({ node: neighbor, dist: newDist })
//         }
//       }
//     }
//   }

//   return dist
// }

// function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
//   let minCity = -1
//   let minVisits = Infinity

//   for (let i = 0; i < n; i++) {
//     const distances = dijkstra(n, edges, i)
//     // Cuenta cuántas ciudades están dentro del umbral de distancia
//     const visitsCount = distances.filter((d) => d <= distanceThreshold).length - 1 // -1 para excluir la ciudad misma

//     // Obtiene la ciudad con el menor número de visitas dentro del umbral
//     if (visitsCount < minVisits || (visitsCount === minVisits && i > minCity)) {
//       minCity = i
//       minVisits = visitsCount
//     }
//   }

//   return minCity
// }

// Pruebas de rendimiento y funcionalidad
console.time('findTheCity Case 1')
console.log(
  findTheCity(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ],
    4
  )
) // Expected: 3
console.timeEnd('findTheCity Case 1')

console.time('findTheCity Case 2')
console.log(
  findTheCity(
    5,
    [
      [0, 1, 2],
      [0, 4, 8],
      [1, 2, 3],
      [1, 4, 2],
      [2, 3, 1],
      [3, 4, 1],
    ],
    2
  )
) // Expected: 0
console.timeEnd('findTheCity Case 2')
