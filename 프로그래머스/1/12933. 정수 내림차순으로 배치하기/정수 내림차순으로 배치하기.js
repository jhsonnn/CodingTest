function solution(n) {
    var answer = 0;
    //n 펼치기
    // 숫자를 문자열로 바꾸고 펼치기
    let nSplitArr = n.toString().split('')
    //내림차순으로 정렬
    //sort()함수 이용해서 내림차순
    let nSortArr = nSplitArr.sort((a,b)=>{
        return b-a;
    })
    //문자로 각각 나눠서 펼쳐진 nSortArr를 합치고 다시 숫자로 바꾸기
    answer = Number(nSortArr.join(''))

    return answer;
}