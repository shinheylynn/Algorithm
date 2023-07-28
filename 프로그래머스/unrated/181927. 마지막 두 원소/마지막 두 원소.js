function solution(num_list) {
    let lastNum = num_list.length - 1;
    
    if (num_list[lastNum] - num_list[lastNum - 1] > 0) {
        num_list.push(num_list[lastNum] - num_list[lastNum - 1]);
        return num_list
    } else {
        num_list.push(num_list[lastNum] * 2);
        return num_list
    }
}