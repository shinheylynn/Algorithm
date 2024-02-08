function solution(strArr) {
    let lengthArr = [];
    
    strArr.map(x => lengthArr.push(x.length));
    return Object.values(lengthArr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1; // acc[curr]가 존재한다면 acc[curr]를 사용하고, 아니면 0을 사용. undefined이 반환되는 것을 방지하기 위함.
        return acc;
    }, {})).reduce((max, curr) => Math.max(max, curr), 0); 
    // 현재까지의 최대값 max와 현재 처리 중인 요소 curr 중 어떤 값이 더 큰 지 비교
    
}