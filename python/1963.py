class Solution:
    def minSwaps(self, s: str) -> int:
        balance = 0
        max_imbalance = 0
        
        # Recorremos la cadena para calcular el máximo desbalance
        for char in s:
            if char == '[':
                balance += 1
            else:
                balance -= 1
            
            # Si el balance es negativo, actualizamos el máximo desbalance
            max_imbalance = min(max_imbalance, balance)
        
        # El número de intercambios es la mitad del máximo desbalance en valor absoluto
        return (-max_imbalance + 1) // 2
