function solution(msg) {
    const dic = new Map('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((w, i) => [w, i + 1]))
    const answer = []
    let arr = [...msg]
    let w = ''
    let n = 0
    
   while (arr.length > 0) {
       if (dic.get(arr.join(''))) {
           n += arr.join('').length
           answer.push(dic.get(arr.join('')))
           dic.set(arr.join('') + w, dic.size + 1)
           arr = [...msg]
           arr.splice(0, n)
        } else {
            w = arr[arr.length - 1]
            arr.pop()
        }
   }
    
    return answer
}