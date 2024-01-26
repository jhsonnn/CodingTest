function solution(n) {
    var answer = 0;
    //n이 양의 정수 x의 제곱 이라면(x가 n의 제곱근이라면)
    //변수 x 선언
    let x = Math.sqrt(n);
 
    //x의 정수 여부 판별
    if(Number.isInteger(x)){
        //x+1 제곱 리턴
        answer = Math.pow(x+1, 2)
    }else{
        //n이 x 제곱근 아니면 -1 리턴
        answer = -1;
    }
    return answer;
}