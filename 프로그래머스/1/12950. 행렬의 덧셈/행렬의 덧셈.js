function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
        answer.push([]);
        for(let j = 0; j < arr1[i].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j]
            //console.log(answer[i][j])
        }
    }
    return answer;
}