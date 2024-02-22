function solution(sizes) {
    var answer = 0;
    
    //각 요소들(배열)을 돌면서 해당 요소 안의 요소들 정렬
    // 요소 중 큰 수는 0번 인덱스, 작은 수는 1번 인덱스에 저장
    sizes.forEach(arrElement => {
        let maxElement = Math.max(...arrElement);
        let minElement = Math.min(...arrElement);
        arrElement[0] = maxElement;
        arrElement[1] = minElement;
    });

    let width = Math.max(...sizes.map(arrElement => arrElement[0]));
    let height = Math.max(...sizes.map(arrElement => arrElement[1]));

    answer = width * height;
    return answer;
}