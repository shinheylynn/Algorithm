function solution(arr) {
    let indexOf = [];
    
    arr.map((x, idx) => {
        if (x === 2) {
            indexOf.push(idx)
        } 
    });
    
    const min = Math.min(...indexOf);
    const max = Math.max(...indexOf);
    
    if (!arr.includes(2)) {
        return [-1]
    } else if (indexOf.length === 1) {
        return [2]
    } else {
        return arr.slice(min, max + 1)
    }

}