function solution(my_string, index_list) {
    let arr = my_string.split('');
    let answer = [];
    
    for (i = 0; i < index_list.length; i++) {
        answer.push(arr[index_list[i]])
    }
    
    return answer.join('')
}