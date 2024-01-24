function solution(x, n) {
    var answer = [];
    for(let i = 0; i < n; i++){
        //등차수열 : an = a1 + (n-1)d;
        //ai = x + ((i+i)-1)*x;
        answer.push(x + ((i+1)-1)*x);
    }
    return answer;
}
