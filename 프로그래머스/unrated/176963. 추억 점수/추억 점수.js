function solution(name, yearning, photo) {
    let answer = [];
    
    const score = name.reduce((acc, cur, idx) => {
        acc[cur] = yearning[idx];
        return acc;
    }, new Object);
    
    for (i = 0; i < photo.length; i++) {
        const img = photo[i];
        let sum = 0;
        
        for (j = 0; j < img.length; j++) {
            if(score[img[j]]) {
                sum += score[img[j]]
            }
        }
        answer.push(sum)
    }
    return answer
}