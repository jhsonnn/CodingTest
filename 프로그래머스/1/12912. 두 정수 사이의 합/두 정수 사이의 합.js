function solution(a, b) {
    var answer = 0;
    let arr = [];
    //절대값 함수
    let arrLength = Math.abs(a - b) + 1;

    if(a === b){
        arr[0] = a;
    }else if(a-b<0){
        arr[0] = a;
        arr[arrLength-1] = b;
    }else if(a-b>0){
        arr[0] = b;
        arr[arrLength-1] = a;
    }

    for(let i = 0; i < arrLength; i++){
        arr[i] = arr[0]+i;
        answer += arr[i];
    }

    return answer;
}