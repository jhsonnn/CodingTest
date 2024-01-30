function solution(absolutes, signs) {
    var answer = 0;

    for(let i = 0; i<absolutes.length; i++){
        let sign = signs[i] ? 1 : -1;

        answer += absolutes[i] * sign;
    }

    return answer;
}