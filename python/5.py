class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) <= 1:
            return s
        
        def expand_from_center(left: int, right: int) -> str:
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left + 1:right]
        
        longest_palindrome = ""
        
        for i in range(len(s)):
            odd_palindrome = expand_from_center(i, i)
            even_palindrome = expand_from_center(i, i + 1)
            
            longest_palindrome = max(longest_palindrome, odd_palindrome, even_palindrome, key=len)
        
        return longest_palindrome

# Test Cases
sol = Solution()

# Case 1: The longest palindromic substring in "babad" is "bab" (or "aba")
print(sol.longestPalindrome("babad"))  # Output: "bab"

# Case 2: The longest palindromic substring in "cbbd" is "bb"
print(sol.longestPalindrome("cbbd"))  # Output: "bb"

# Case 3: A single character string is a palindrome by itself
print(sol.longestPalindrome("a"))  # Output: "a"

# Case 4: The longest palindromic substring in "ac" is either "a" or "c"
print(sol.longestPalindrome("ac"))  # Output: "a" (or "c")

# Case 5: The entire string "racecar" is a palindrome
print(sol.longestPalindrome("racecar"))  # Output: "racecar"

# Case 6: The longest palindromic substring in "forgeeksskeegfor" is "geeksskeeg"
print(sol.longestPalindrome("forgeeksskeegfor"))  # Output: "geeksskeeg"
