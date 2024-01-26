function solution(x) {
    var answer = true;

    //하샤드 수이려면 x의 자릿수 합으로 x가 나눠져야함
    //1. x의 자릿수의 합
    //x를 문자열로 바꾸고 펼쳐서 배열에 넣고 자리수 합 구하기
    //문자열로 바꾸고 펼쳐서 배열에 넣기
    let xSplitArr = x.toString().split('');

    let xSplitArrSum = 0;
    xSplitArr.forEach((element)=>{
        //문자를 숫자로 바꾸면서 자리수 합 구하기
        xSplitArrSum += Number(element);
    })
    //2. 자릿수 합으로 x가 나눠지는지 판별
    if(x % xSplitArrSum === 0){
        return answer;
    }else{
        return false;
    }

}