
function solution(number, arr){
    let answer=0;

    for(let x of arr){
        x = x.toString();
        if (x.slice(-1) === number.toString()) answer++;
    }

    return answer;

    // 강의자 answer
    // for(let x of arr){
    //     if(x%10 == number) answer++;
    // }
    // return answer;
}

let number = 3
let arr = [25, 23, 11, 47, 53, 17, 33]
console.log(solution(number, arr));