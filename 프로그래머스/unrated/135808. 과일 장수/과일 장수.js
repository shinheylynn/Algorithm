function solution(k, m, score) {
    function chunk(data = [], size = 1) {
        let arr = [];
    
        for (i = 0; i <= data.length; i += size) {
            arr.push(data.slice(i, i + size));   
        }
        
        return arr;
    }
    
    score.sort((a, b) => b - a);
    
    
    let dumps = chunk(score, m);
    let ans = 0;
    
    for (i = 0 ; i <= dumps.length - 1; i++) {
        if (dumps[i].length == m) {
            ans += Math.min(...dumps[i]) * m
        }
    }
    
    return ans;
}