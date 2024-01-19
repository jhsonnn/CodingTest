function solution(arr) {
    var answer = 0;

    arr.forEach((element)=>{
       answer+= element;
    })

    answer /= arr.length;
    
    return answer;
}