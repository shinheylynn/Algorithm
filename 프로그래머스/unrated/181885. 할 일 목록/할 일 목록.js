function solution(todo_list, finished) {
    let falseIdxArr = [];
    let answer = [];
    
    finished.map((x,idx) => {
        if (finished[idx] == false) falseIdxArr.push(idx)
    })
    
    for (let i = 0; i < falseIdxArr.length; i++) {
         answer.push(todo_list[falseIdxArr[i]])
    }
    
    return answer;
}