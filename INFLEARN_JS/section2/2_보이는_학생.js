
function solution(arr){
    let answer = 1;
    let min = arr[0];

    for(let x of arr) {
        if(x>min) {
            answer++;
            min = x
        }
    }

    return answer;
}

arr = [ 130, 135, 148, 140, 145, 150, 150, 153 ];
console.log(solution(arr));
