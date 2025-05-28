function solution(sizes) {
    let width = [];
    let height = [];
    
    for (i = 0; i < sizes.length; i++) {
        width.push(Math.max(sizes[i][0], sizes[i][1]));
        height.push(Math.min(sizes[i][0], sizes[i][1]));
    }
    
    return Math.max(...width) * Math.max(...height)
}