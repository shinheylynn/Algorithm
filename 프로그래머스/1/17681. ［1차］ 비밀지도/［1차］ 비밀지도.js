function solution(n, arr1, arr2) {
    const answer = []
    arr1 = arr1.map(x => x.toString(2).padStart(n, '0'))
    arr2 = arr2.map(x => x.toString(2).padStart(n, '0'))
    
    return arr1.map((str, i) => {
        return [...str].map((x, j) => {
            return (x == 0 && [...arr2[i]][j] == 0) ? ' ' : '#'
        }).join('')
    })
}