function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false)
    let answer = 0
 
    const explore = (hp, count, visited) => {
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i]) {
                const [need, use] = dungeons[i]

                if (hp >= need) {
                    visited[i] = true
                    explore(hp - use, count + 1, visited)
                    visited[i] = false
                }
            }
        }
        
        answer = Math.max(answer, count)
    }

    explore(k, 0, visited)
    return answer
}