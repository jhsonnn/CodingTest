function solution(n)
{
    var answer = 0;

    let nStringArray = [];
    let nArrayToNum = [];

    //num -> string 변환한 걸 배열에 넣기
    nStringArray = String(n).split('');

    //다시 숫자로 변환
    nArrayToNum = nStringArray.map(Number);

    //n을 number로 변환한 배열 합 구하기
    nArrayToNum.forEach((element)=>{
        answer += element;
    })

    return answer;
}