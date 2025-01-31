/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let tempArr = []
    if(nums.length==1)
        return nums[0];
    else {
        for(let i=0;i<nums.length;i++) {
            if(!nums.includes(nums[i],i+1) && !tempArr.includes(nums[i]))
                return nums[i];
            tempArr.push(nums[i]);
        }
    }
};

let nums = [2,2,1];

console.log(singleNumber(nums))