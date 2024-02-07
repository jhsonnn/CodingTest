function solution(n) {
   var answer = '';
    let cnt = 0;

    while(!(cnt === n)){//n = 3
        if(cnt === 0){
            answer += '수';
            ++cnt; //n = 3, cnt = 1, answer = '수'
        }else{
            if(answer.charAt(answer.length - 1) === '박'){
                answer += '수'; //n = 3, cnt = 2, answer = '수박수'
            }else{
                answer += '박';
            }
            ++cnt; //n = 3, cnt = 2, answer = '수박'
                    // n = 3, cnt = 3, answer = '수박수'
        }
    }
    return answer;
}