/**
 * @param {number[]} digits
 * @return {number[]}
 */

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];


var plusOne = function(digits) {
    if(digits.length == 0)
        return [1];
    let newNum = (BigInt(digits.toString().replaceAll(',',''))+BigInt(1)).toString().split('');
    const sol = newNum.map((val) => {
        return (Number(val));
    })
    return sol;0  
};

console.log(plusOne(digits));