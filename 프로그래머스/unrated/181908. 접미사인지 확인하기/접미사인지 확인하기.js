function solution(my_string, is_suffix) {
    let len = is_suffix.length;
    
    return (my_string.slice(-len, my_string.length) == is_suffix) ? 1 : 0
}