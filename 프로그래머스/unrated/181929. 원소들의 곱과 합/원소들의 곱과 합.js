function solution(num_list) {
    return num_list.reduce((prev, cur) => { return prev * cur }, 1) < Math.pow((num_list.reduce((prev, cur) => { return prev + cur })), 2) ? 1 : 0
}