function solution(p) {
    if (p === '') return ''
    
    const [u, v] = getBalanced(p)
    let str = ''

    if (u.length === 0 || u[0] === ')' || u[u.length - 1] === '(') {
        str = '(' + solution(v) + ')'

        for (let i = 1; i < u.length - 1; i++) {
            if (u[i] === '(') str += ')'
            if (u[i] === ')') str += '('
        }

        return str 
    }

    return u + solution(v)
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