function solution(p) {
    if (p === '') return ''
    
    const [u, v] = getBalanced(p)
    let str = ''

    if (u.length === 0 || u[0] === ')' || u[u.length - 1] === '(') {
        str = '(' + solution(v.join('')) + ')'

        u.pop()  
        u.shift()  

        for (let i = 0; i < u.length; i++) {
            if (u[i] === '(') str += ')'
            if (u[i] === ')') str += '('
        }

        return str 
    }

    return u.join('') + solution(v.join(''))
}

const getBalanced = (arr) => {
    arr = Array.isArray(arr) ? arr : [...arr]
    let u = []
    let v = []
    let left = 0
    let right = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') left++
        if (arr[i] === ')') right++
        
        if  (left === right) {
            v = arr.splice(left + right)
            u = arr
            break
        }
    }
    
    return [u, v]
}