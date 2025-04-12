function solution(array, n) {
    var answer = 0;
    answer = array.filter((item) => item===n).length;
    return answer;
}