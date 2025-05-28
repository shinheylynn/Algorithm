function solution(array, commands) {
    let newArray = [];
    let answer = [];
    
    for (i = 0; i < commands.length; i++) {
        newArray.push(array.slice((commands[i][0] - 1), commands[i][1]));
    }

    let sorted = newArray.map(x => x.sort((a, b) => a - b));
    console.log(sorted)
    
    return sorted.map((x, i)=> x[commands[i][2] - 1]);

}