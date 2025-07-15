function solution(msg) {
    const dic = new Map('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((w, i) => [w, i + 1]))
    const answer = []

    let sliceIndex = 0
    let c = ''

    while (sliceIndex < msg.length) {
        let j = msg.length

        // w가 사전에 없다면, 마지막 글자 하나씩 제거하며 찾는다
        while (!dic.get(msg.slice(sliceIndex, j))) {
            j--
        }
        
        const w = msg.slice(sliceIndex, j)
        const c = msg[j] || ''

        answer.push(dic.get(w))
        dic.set(w + c, dic.size + 1)

        sliceIndex += w.length
    }

    return answer
}
