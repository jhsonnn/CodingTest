function solution(s) {
    let answer = '';
    let words = s.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                answer += word[j].toUpperCase();
            } else {
                answer += word[j].toLowerCase();
            }
        }

        if (i < words.length - 1) {
            // 마지막 단어가 아닌 경우에는 공백 추가
            answer += ' ';
        }
    }

    return answer;
}