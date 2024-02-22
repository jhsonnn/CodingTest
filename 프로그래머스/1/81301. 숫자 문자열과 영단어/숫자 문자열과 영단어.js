function solution(s) {
    var answer = 0;
    let sResult = '';
    let str = '';

    for(let i = 0; i < s.length; i++){
        if(!isNaN(s[i])){
            sResult += s[i];
        }else{
            str += s[i];
            checkIsStr();
        }
    }

    function checkIsStr(){
        switch (str) {
            case 'zero':
                sResult += 0;
                str = '';
                break;
            case 'one':
                sResult += 1;
                str = '';
                break;
            case 'two':
                sResult += 2;
                str = '';
                break;
            case 'three':
                sResult += 3;
                str = '';
                break;
            case 'four':
                sResult += 4;
                str = '';
                break;
            case 'five':
                sResult += 5;
                str = '';
                break;
            case 'six':
                sResult += 6;
                str = '';
                break;
            case 'seven':
                sResult += 7;
                str = '';
                break;
            case 'eight':
                sResult += 8;
                str = '';
                break;
            case 'nine':
                sResult += 9;
                str = '';
                break;
            default:
                break;
        } 
    }

    // 문자열인 answer을 숫자로 바꾸기
    answer = parseInt(sResult);
    return answer;
}