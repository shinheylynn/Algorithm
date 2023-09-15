function solution(str1, str2) {
    for (i = 0; i < str2.length; i ++) {
        if (str2.slice(i, i + str1.length) == str1) {
            return 1
        }
    }
    return 0
}