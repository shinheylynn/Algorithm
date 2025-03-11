function sliceArr(arr, n) {
    const slicedArr = []
    
    for (let i = 0; i < arr.length; i += n) {
        slicedArr.push(arr.slice(i, i + n));
    }
    
    return slicedArr
}

function solution(n, arr1, arr2) {
    const answer = []
    arr1 = arr1.map(x => x.toString(2).padStart(n, '0')).join('')
    arr2 = arr2.map(x => x.toString(2).padStart(n, '0')).join('')
    
    const hintArr = [...arr1].map((x, i) => {
        return (x == 0 && [...arr2][i] == 0) ? ' ' : '#'
    })
    
    sliceArr(hintArr, n).map(x => answer.push(x.join('')))
    return answer
}