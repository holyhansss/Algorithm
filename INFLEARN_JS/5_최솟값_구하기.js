
function solution(arr){
    let min = Number.MAX_SAFE_INTEGER;

    for(let i=0; i<arr.length; i++)
        if(min>arr[i]) min = arr[i];

    return min;

    // min = Math.min(...arr);
    // min = Math.min.apply(null, arr);
}

let arr =[5,7,1,3,2,9,11]
console.log(solution(arr));
