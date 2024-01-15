function solution(numbers) {
    var answer = 0;
     let sum = 0;
    
    numbers.forEach(function(element){
        sum += element;
    })
    answer = sum / numbers.length;
    
    return answer;
}