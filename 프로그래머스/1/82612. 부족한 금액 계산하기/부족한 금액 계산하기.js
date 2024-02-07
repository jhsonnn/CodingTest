function solution(price, money, count) {
 let answer = 0;
    let sum = 0;

    // 등비수열의 합 공식 사용
    sum = (price * count * (count + 1)) / 2;
    answer = sum - money;

    // 만약 answer가 음수라면 부족한 금액이므로 0으로 변경
    answer = Math.max(0, answer);

    return answer;
}