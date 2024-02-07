function solution(price, money, count) {
    var answer = 0;
    let sum = 0;
    //answer = (money - 구해야하는 것)
    //구해야하는 것(놀이기구 이용금액)
    //price / money / count / result
    //3     / 20    / 4     / 10
    //놀이기구 이용금액
    //= 3 + (3*2) + (3*3) + (3*4)
    //=>다음 항에서 3 증가(등비수열)
    //즉, 놀이기구 이용금액은 등차수열의 합 이용
    //sn = n(2a+(n-1)d)/2

    //놀이기구 이용금액
    sum = (count * (2*price + (count-1)*price))/2;
    //금액이 부족할 경우
    if(sum > money){
        answer = sum - money;
    }else{
        answer = 0;
    }

    return answer;
}
