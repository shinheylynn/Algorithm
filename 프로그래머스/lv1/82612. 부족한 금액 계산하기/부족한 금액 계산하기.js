function solution(price, money, count) {
    let cost = 0;
    
    for (i = 1; i <= count; i++) {
        cost += i * price;
    };
    
    return money >= cost ? 0 : cost - money;
}