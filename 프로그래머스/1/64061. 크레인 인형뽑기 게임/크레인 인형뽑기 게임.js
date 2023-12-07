function solution(board, moves) {
    let basket = [];
    let noZeroArr = [];
    let answer = 0;
    
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < i; j++) {
            [board[i][j], board[j][i]] = [board[j][i], board[i][j]]
        }
    }
    
    noZeroArr = board.map(arr => arr.filter(x => x != 0));
    
    for (i = 0; i < moves.length; i++) {
        if (noZeroArr[moves[i] - 1].length) {
            if (noZeroArr[moves[i] - 1][0] === basket[basket.length - 1]) {
            basket.pop();
            answer += 2;
        } else basket.push(noZeroArr[moves[i] - 1][0]);
        noZeroArr[moves[i] - 1].shift();
        } 
    }
    
    return answer
}