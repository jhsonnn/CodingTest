function solution(left, right) {
    var answer = 0;

    for(let i = left; i<=right; i++){
        let cnt = 0;

        //만약 left 가 13이면 1~13까지의 수로 나눠주게 되므로 13의 약수가 무엇인지 알게 됨
        for(let j = 1; j<= i; j++){
            if(i % j === 0){
                //13의 약수 개수
                ++cnt;
            }
        }
        //13의 약수가 짝수 개일 때 13을 answer에 더해줌
        if(cnt % 2 === 0){
            answer += i;
        }else{
            answer -= i;
        }
    }

    return answer;
}