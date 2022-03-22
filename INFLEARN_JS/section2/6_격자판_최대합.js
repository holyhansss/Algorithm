
function solution(arr){
    let answer = Number.MIN_SAFE_INTEGER; 
    let temp1 = 0; 
    let temp2 = 0;

    for(let i=0; i<arr.length; i++){
        
        for(let j=0; j<arr.length; j++){
            temp1+=arr[i][j];
            temp2+=arr[j][i]
        }
        answer =  Math.max(answer, temp1, temp2)
        temp1 = 0;
        temp2 = 0;
    }
    
    for(let i=0; i<arr.length; i++){
        temp1+= arr[i][i];
        temp2+= arr[i][arr.length-i-1];
    }
    answer =  Math.max(answer, temp1, temp2)

    return answer;
}

let arr =   [[10, 13, 10, 12, 15],
            [12, 39, 30, 23, 11],
            [11, 25, 50, 53, 15],
            [19, 27, 29, 37, 27],
            [19, 13, 30, 13, 19]];

console.log(solution(arr));
