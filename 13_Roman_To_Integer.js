/*

Link: https://leetcode.com/problems/roman-to-integer/description/

Question:

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

*/

let s = 'MCMXCIV'

var romanToInt = function(s) {
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let sum = 0;
    for (let i = 0;i<s.length;i++){
        switch (s[i]){
            case 'I':
                if(i!=s.length && s[i+1]=='V'){
                    sum += 4;
                    i++;
                }
                else if(i!=s.length && s[i+1]=='X'){
                    sum += 9;
                    i++;
                } 
                else
                    sum += obj[s[i]];
                break;
            case 'X':
                if(i!=s.length && s[i+1]=='L'){
                    sum += 40;
                    i++;
                }
                else if(i!=s.length && s[i+1]=='C'){
                    sum += 90;
                    i++;
                }
                else
                    sum += obj[s[i]];
                break;
            case 'C':
                if(i!=s.length && s[i+1]=='D'){
                    sum+= 400;
                    i++;
                }
                else if(i!=s.length && s[i+1]=='M'){
                    sum+= 900;
                    i++;
                } 
                else
                    sum += obj[s[i]];
                break;
            default:
                sum += obj[s[i]];
                break;   
        }
    }
    return sum;
};

console.log(romanToInt(s));