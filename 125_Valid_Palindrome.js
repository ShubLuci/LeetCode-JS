/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s==' ')
        return true
    const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    let reverseString = '',newString = '';
    for(let i=s.length-1;i>=0;i--) {
        if(arr.includes(s[i].toLowerCase()) && s[i]!=' ')
            reverseString += s[i].toLowerCase();
    }
    for(let i=reverseString.length-1;i>=0;i--) {
            newString += reverseString[i];
    }
    return newString === reverseString;
};

let s = 'A man, a plan, a canal: Panama'

console.log(isPalindrome(s));