function solution(s){
    var answer = true;
    //p의 개수, y의 개수 저장 변수
    let pCnt = 0;
    let yCnt = 0;

    //받아온 문자열 펼쳐서 배열에 저장
    //배열 저장할 변수
    let stringArr = [];
    //문자열 펼쳐서 넣기
    stringArr = s.split('');
    //반복문 돌면서 
    stringArr.forEach((element)=>{
        //p이면 pCnt 1증가
        if(element === 'p'|| element === 'P'){
            pCnt++;
        }else if(element === 'y' || element === 'Y'){
            yCnt++;
        }
    })
    if(pCnt === yCnt){
        answer = true;
    }else{
        answer = false;
    }

    return answer;
}