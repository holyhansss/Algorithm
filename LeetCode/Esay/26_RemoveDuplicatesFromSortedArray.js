/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    // const newNumbers = nums.filter((number, index, target) => {
    //     return target.indexOf(number) === index;
    // });

    // console.log(newNumbers.length)
    // return newNumbers.length;

    let newNumbers=[];

    for(let i=0;i<nums.length;i++){
        if(!newNumbers.includes(nums[i])){
            newNumbers.push(nums[i]);
        }
    }
    console.log(newNumbers.length)
    return newNumbers.length;
};

removeDuplicates([1,2,3])

var removeDuplicatess = function(nums) {
    let k = 0;
    for (let i = 1; i < nums.length;) {
        if (nums[k] === nums[i]) {
            i++;
        } else {
            nums[k+1] = nums[i];
            k++; i++;
        }
    }
    console.log(k+1)
    return k+1;
};

removeDuplicatess([1,2,3])