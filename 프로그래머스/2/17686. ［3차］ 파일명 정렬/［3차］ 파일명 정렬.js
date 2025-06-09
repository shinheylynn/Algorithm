function solution(files) {
    return files.sort((a, b) => {
        const [headA, numA] = a.match(/[a-zA-Z+-. ]+|\d{1,5}/g)
        const [headB, numB] = b.match(/[a-zA-Z+-. ]+|\d{1,5}/g)

        const lowerA = headA.toLowerCase()
        const lowerB = headB.toLowerCase()

        if (lowerA < lowerB) return -1
        if (lowerA > lowerB) return 1

        return parseInt(numA) - parseInt(numB)
    })
}