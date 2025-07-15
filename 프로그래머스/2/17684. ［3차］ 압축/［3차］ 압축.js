function solution(msg) {
    const dic = new Map('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((w, i) => [w, i + 1]))
    const answer = []

    let sliceIndex = 0
    let c = ''

    while (sliceIndex < msg.length) {
        let arr = msg.slice(sliceIndex).split('')
        let w = arr.join('')

        // w가 사전에 없다면, 마지막 글자 하나씩 제거하며 찾는다
        while (!dic.get(w)) {
            c = arr.pop()
            w = arr.join('')
        }

        answer.push(dic.get(w))
        dic.set(w + c, dic.size + 1)

        sliceIndex += w.length
    }

    return answer
}
