function solution(s) {
    let arr = [...s]
    let answer = 0

    while (arr.length > 0) {
        const x = arr[0]
        let same = 0
        let diff = 0

        let i = 0
        while (i < arr.length) {
            if (arr[i] === x) same++
            else diff++

            if (same === diff) break

            i++
        }

        arr.splice(0, i + 1)
        answer++
    }

    return answer
}