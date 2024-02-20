function solution(d, budget) {
    var answer = 0;

    d.sort((a,b)=>{
        return a-b;
    })

    d.forEach(element => {
        if(element <= budget){
            budget -= element;
            answer++;
        }
    });
    return answer;
}