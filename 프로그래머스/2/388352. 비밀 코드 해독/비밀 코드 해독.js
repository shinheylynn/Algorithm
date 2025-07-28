function solution(n, q, ans) {
    const combinations = getCombinations(n)
    const answer = []
    
    for (const combination of combinations) {
        if (isValid(combination, q, ans)) {
            answer.push(combination)
        }
    }
    
    return answer.length
}

// n의 최대값은 30, 배열의 길이는 5 
// 숫자 30개 중 5개를 뽑은 모든 조합을 구한다 (30C5) = 완전탐색
const getCombinations = (n) => {
    const results = []
    const temp = []
    const arr = Array.from({ length: n}, (_, i) => i + 1)
    
    const combination = (start) => {
        if (temp.length === 5) {
            results.push([...temp]);
            return;
        }   
        
        for (let i = start; i < arr.length; i++) {
            temp.push(arr[i])
            combination(i + 1)
            temp.pop() // 재귀함수가 실행되는 것과 상관 없이 실행됨 (리턴되는 게 아님)
        }
    }
    
    combination(0)
    return results
}

const isValid = (combination, q, ans) => {
    for (let i = 0; i < q.length; i++) {
        const arr = q[i]
        const expectedCount = ans[i]

        const count = arr.filter(num => combination.includes(num)).length

        if (count !== expectedCount) {
            return false
        }
    }
    return true
};