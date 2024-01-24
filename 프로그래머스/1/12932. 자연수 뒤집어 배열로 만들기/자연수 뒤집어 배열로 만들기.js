function solution(n) {
    var answer = [];
    var answerToNumber = [];
    
    //n을 문자열로 바꾼 다음 배열에 자리수대로 나눠서 저장
    answer = String(n).split('');
    //나눠서 저장한 걸 뒤집기
    answer = answer.reverse(); //[ '5', '4', '3', '2', '1' ]
    // 숫자로 변환
    answer = answer.map(Number);
    /*
    answer = String(n).split('').reverse().map(Number);
    */
    return answer;
}