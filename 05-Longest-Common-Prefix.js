/*

Title: Longest Common Prefix
Link: https://leetcode.com/problems/longest-common-prefix/description/


Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/


/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let initialPush = '';
    for(let j=0;j<strs[0].length;j++){
        initialPush += strs[0][j];
        for(let i=0;i<strs.length;i++)
            if(strs[i][j]!=initialPush[j])
                return initialPush.slice(0,initialPush.length-1);  
    }
    return initialPush;
};


let strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs));