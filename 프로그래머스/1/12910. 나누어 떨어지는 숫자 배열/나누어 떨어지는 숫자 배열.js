function solution(arr, divisor) {
    var answer = [];

    arr.forEach(element => {
        //나누어 떨어지는 경우
        if(element % divisor === 0)
        {
            answer.push(element);
        }
    });

    //answer가 비어있다면 (나누어 떨어지는 수가 없던 경우)
    if(answer.length === 0){
        answer.push(-1);
    }else{
        //나누어 떨어지는 수가 있는 경우
        answer.sort((a,b)=>{
            return a-b;
        })
    }
    return answer;
}