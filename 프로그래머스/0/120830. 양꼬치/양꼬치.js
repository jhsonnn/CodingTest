function solution(n, k) {
    var answer = 0;
    
    var beverage = Math.floor(n/10)
    
    answer = 12000*n + 2000*(k-beverage)
    
    return answer;
}