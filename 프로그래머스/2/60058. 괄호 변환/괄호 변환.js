function solution(p) {
    if (p === '') return ''
    
    const [u, v] = getBalanced(p)

    if (u[0] === '(') {
        return u + solution(v)
    }

    let str = '(' + solution(v) + ')'

    for (let i = 1; i < u.length - 1; i++) {
        if (u[i] === '(') str += ')'
        if (u[i] === ')') str += '('
    }

    return str 
}

const getBalanced = (str) => {
    let u = ''
    let v = ''
    let left = 0
    let right = 0
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') left++
        if (str[i] === ')') right++
        
        if  (left === right) {
            u = str.slice(0, left + right)
            v = str.slice(left + right)
            break
        }
    }
    
    return [u, v]
}