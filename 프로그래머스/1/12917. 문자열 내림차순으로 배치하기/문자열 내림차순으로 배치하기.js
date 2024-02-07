
function solution(s) {
    let answer = [];

    //문자열 => 문자 배열 => 정렬 -> 문자열로 다시 합치기
    answer = s.split('').sort().reverse().join('')

    return answer;

}