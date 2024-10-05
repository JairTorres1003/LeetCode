from collections import Counter

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        len_s1, len_s2 = len(s1), len(s2)
        
        if len_s1 > len_s2:
            return False
        
        s1_count = Counter(s1)
        
        window_count = Counter(s2[:len_s1])
        
        if s1_count == window_count:
            return True
        
        for i in range(len_s1, len_s2):
            window_count[s2[i]] += 1
            
            left_char = s2[i - len_s1]
            window_count[left_char] -= 1
            
            if window_count[left_char] == 0:
                del window_count[left_char]
            
            if s1_count == window_count:
                return True
        
        return False

# Test Cases
sol = Solution()
print(sol.checkInclusion("ab", "eidbaooo"))  # Output: True
print(sol.checkInclusion("ab", "eidboaoo"))  # Output: False

# Time Complexity: O(N)
# Space Complexity: O(1)

