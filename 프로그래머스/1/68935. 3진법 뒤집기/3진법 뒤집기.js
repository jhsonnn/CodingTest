function solution(n) {
    var answer = 0;
    let num3 = '';

    //3진수로 바꾸기
    for(; n>0; n=Math.floor(n/3)){
        //n=Math.floor(n/3) => 3진수 구할 때 몫을 3으로 나눠주는 과정 반복하니까
        let remainder = n % 3; //한자리씩
        num3 += remainder; //3진수를 거꾸로 넣은 값
    }
    //console.log(num3);

    //3진수를 10진수로 바꾸기
    answer = parseInt(num3, 3); //3: 3진수
    console.log(answer)
    return answer;
}