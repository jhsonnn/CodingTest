function solution(s) {
    let answer = '';
    let str = '';
    let start = 0;

    for(let i = start; i < s.length; i++){
        if(s[i] !== ' '){
            str += s[i];
            // 공백 아닌 것들 대소문자 바꾸고 answer에 넣기
            // 인덱스 짝홀수 판별이 아닌 단어 내 글자의 인덱스로 판별
            if(str.length % 2 !== 0){
                //str에 들어간 문자의 마지막 문자
                answer += str.charAt(str.length -1).toUpperCase();
            } else {
                answer += str.charAt(str.length -1).toLowerCase();
            }
        } else {
            answer += ' ';
            str = '';
            start = i+1;
        }
    }

    return answer;
}
