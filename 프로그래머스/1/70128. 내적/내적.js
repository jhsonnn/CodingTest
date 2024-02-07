function solution(a, b) {
    var answer = 0;
    let arr = [];

    for(let i = 0; i<a.length; i++){
        for(let j = 0; j<b.length; j++){
            if(i === j){
                arr[i] = a[i]*b[j];
            }
        }
    }
    arr.forEach(element=>{
        answer += element;
    })

    return answer;
}