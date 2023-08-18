function solution(num_list) {
    let odd = [];
    let even = [];
    
    num_list.forEach(x => {
        if (x % 2 == 1) {
            odd.push(x)
        } else { even.push(x) }
    })
    
    return Number(odd.join('')) + Number((even.join('')))
}