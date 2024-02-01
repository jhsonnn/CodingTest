function solution(arr) {
    var answer = [];
    let min = 0;

    // //내림차순
    // arr = arr.sort((a,b)=>{
    //     return b-a;
    // })
    //가장 작은 값 구하기
    min = Math.min(...arr);
  
    //가장 작은 값 제외한 것들만 다시 배열 저장
    answer = arr.filter((element)=>{
        return element !== min;
    })

    if(answer.length === 0){
        answer.push(-1);
    }

    return answer;
}