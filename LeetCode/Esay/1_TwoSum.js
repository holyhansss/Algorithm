/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let answer = [];
    
    nums.map((x, xindex)=>{
        nums.map((y, yindex)=> {
                if(!answer.includes(xindex) && !answer.includes(yindex)){
                    if(x+y == target && xindex !== yindex){
                        answer.push(xindex)
                        answer.push(yindex)
                    }else return;
                }
        })
    }) 

    return answer

};

twoSum([3,2,4],6)


// [3,2,4]
// 6