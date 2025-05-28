function solution(my_string) {
    let arr = [...my_string];
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                i--;
            }
        }
    }
    return arr.join('');
}