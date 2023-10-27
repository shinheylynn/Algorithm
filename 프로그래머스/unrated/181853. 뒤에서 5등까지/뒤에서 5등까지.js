function solution(num_list) {
    return num_list.sort((a, b) => a - b, 0).slice(0, 5)
}