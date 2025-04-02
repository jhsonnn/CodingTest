function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    answer = my_string.slice(0, s) + overwrite_string
    
    if(my_string.length - answer.length > 0) answer += my_string.slice(s+overwrite_string.length, my_string.length)

    return answer;
}