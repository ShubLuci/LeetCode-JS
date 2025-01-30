/*

Link: https://leetcode.com/problems/valid-palindrome/description/

Title: Valid Palindrome

Question:

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/


/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    if(s==' ')
        return true
    const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    let tempArr = []
    for(let i=s.length-1;i>=0;i--) {
        if(arr.includes(s[i].toLowerCase()) && s[i]!=' ')
            tempArr.push(s[i].toLowerCase());
    }
    let reverseString = tempArr.toString().replaceAll(',','');;
    let newString = tempArr.reverse().toString().replaceAll(',','');
    return newString === reverseString;
};

let s = 'A man, a plan, a canal: Panama'

console.log(isPalindrome(s));