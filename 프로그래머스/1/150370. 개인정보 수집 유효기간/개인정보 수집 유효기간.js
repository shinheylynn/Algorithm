function isExpired(expiredDate, today) {
    return expiredDate <= today
}

function getExpiredDate(privacyDate, months) {
    const joinedDate = new Date(privacyDate)
    joinedDate.setMonth(joinedDate.getMonth() + months)
    
    return joinedDate
}

function convertAlphabetToMonth(privaciesArr, termsArr) {
    for (i = 0; i < privaciesArr.length; i++) {
        for (j = 0; j < termsArr.length; j++) {
            if (privaciesArr[i][1] === termsArr[j][0]) {
                privaciesArr[i][1] = termsArr[j][1]
            }
        }
    }
    
    return privaciesArr
}

function solution(today, terms, privacies) {
    let answer = []
    today = new Date(today)
    const termsArr = terms.map(term => term.split(' '))
    const privaciesArr = privacies.map(privacy => privacy.split(' '))
    
    convertAlphabetToMonth(privaciesArr, termsArr)
    
    privaciesArr.map((n, idx) => {
        const expirationDate = getExpiredDate(n[0], Number(n[1]))
        isExpired(expirationDate, today) ? answer.push(idx + 1) : ''
    })
    
    return answer
}
