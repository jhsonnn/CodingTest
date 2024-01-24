function solution(n) {
    var answer = 0;

    for(let i = 1; i <= n; i++){
        if(n % i === 1){
            answer = i;
            //answer에 값 들어오면 반복문 나오기
            if(answer) break;
        }
    }
    return answer;
}