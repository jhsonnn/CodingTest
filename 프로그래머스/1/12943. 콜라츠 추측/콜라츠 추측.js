function solution(num) {
    var answer = 0;
    let cnt = 0;

    while(num !== 1){
        if(num%2 === 0){
            num /= 2;
        }else if(num%2 === 1){
            num = num*3 + 1;
        }
        answer = ++cnt;

        if(cnt === 500){
            answer = -1;
            break;
        }
    }

    return answer;
}