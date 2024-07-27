function frequencySort(numbers: number[]): number[] {
  const frequencyMap = new Map<number, number>()

  // Contar frecuencias
  numbers.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
  })

  // Ordenar con una función de comparación optimizada
  return numbers.sort((a, b) => {
    const freqA = frequencyMap.get(a) ?? 0
    const freqB = frequencyMap.get(b) ?? 0
    return freqA === freqB ? b - a : freqA - freqB
  })
}
