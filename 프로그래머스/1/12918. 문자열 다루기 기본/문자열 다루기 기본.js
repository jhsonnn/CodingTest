function solution(s) {
    var answer = true;

    if(s.length === 4 || s.length === 6){
        for(const element of s){
            let num = Number(element);
            // 숫자로 바꿀 수 있는지 확인하는 함수
            // 못바꾸면 true, 변환가능하면 false
            if(isNaN(num)){
                answer = false;
            }
        }
    }else{
        answer =  false;
    }

    return  answer;
}
