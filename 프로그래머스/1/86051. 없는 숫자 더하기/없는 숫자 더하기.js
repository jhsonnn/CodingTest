function solution(numbers) {
    var answer = 0;
    let arr = [0,1,2,3,4,5,6,7,8,9];
    let index;

    numbers.forEach((numsElement)=>{
        //같은 요소가 있는 arr의 인덱스 구하고
        index = arr.indexOf(numsElement);
        
        //-1 ; indexOf는 찾는 요소가 없으면 -1반환
        //찾는 요소가 있다면
        if(index !== -1){
            //해당 인덱스의 수를 제거
            arr.splice(index, 1); //1; index에서 시작해서 1개 요소 삭제
        } 
    })

    arr.forEach((element)=>{
        answer+=element;
    })
    //찾은 숫자 더한 값
    return answer;
}