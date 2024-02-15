function solution(arr)
{
    var answer = [];
    let bCheck = false;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i])
        }
        for(let j = i+1; j<arr.length; j++){
            
            if(arr[i] === arr[j]){
                bCheck = true;
                break;
            }
        }     
    }

    return answer;
}