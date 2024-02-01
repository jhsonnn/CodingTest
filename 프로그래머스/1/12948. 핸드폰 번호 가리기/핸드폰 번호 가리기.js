function solution(phone_number) {
    var answer = '';

    for(let i = 0; i< phone_number.length; i++){
        //4자리 빼두고 앞의 것만
        if(i < phone_number.length -4){
            answer += '*';
        }else{
            answer += phone_number[i];
        }
    }

    return answer;
}