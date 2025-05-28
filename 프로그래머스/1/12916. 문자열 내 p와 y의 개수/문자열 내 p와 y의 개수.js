function solution(s){
    let letters = s.split('');
    let a = 0;
    let b = 0;
    
    for (i=0; i<=letters.length; i++) {
        if (letters[i] == "y" || letters[i] =="Y") {
            a += 1;
        } else if (letters[i] == "p" || letters[i] =="P") {
            b += 1;
        };
    };
    
    return a == b ? true : false;
}