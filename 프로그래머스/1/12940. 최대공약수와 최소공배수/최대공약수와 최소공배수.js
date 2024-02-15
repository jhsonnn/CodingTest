function solution(n, m) {
    var answer = [];
    let nDivisor = [];
    let mDivisor = [];

    //n약수
    for(let i = 1; i<=n; i++){
        if(n%i === 0){
            nDivisor.push(i);
        }
    }
    //m약수
    for(let i = 1; i<=m; i++){
        if(m%i === 0){
            mDivisor.push(i);
        }
    }

    //최대공약수 구하기
    //두 수의 약수를 담은 배열 중에서 공통된 요소 중의 최대값
    let commonNumArr = [];
    commonNumArr = nDivisor.filter(element => mDivisor.includes(element))

    let gcd = 1;
    gcd = Math.max(...commonNumArr)
   //console.log(x)
   

   //최소공배수 구하기
    let lcm = 1;
    //최대공약수*(최대공약수로 n,m 나누면 생기는 각각의 몫)
    //최대공약수로 n,m을 나누면 생기는 몫 먼저 구하기
    let nQuotient = 1;
    let mQuotient = 1;

    nQuotient = n / gcd;
    mQuotient = m / gcd;

    lcm = gcd * nQuotient * mQuotient;

    
    answer = [gcd, lcm];
    return answer;
}