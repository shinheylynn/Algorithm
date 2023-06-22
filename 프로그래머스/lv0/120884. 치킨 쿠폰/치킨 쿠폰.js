function solution(chicken) {
    let coupon = 0
    
    while (chicken >= 10) {
        const newCoupon = parseInt(chicken / 10);
        coupon += newCoupon;
        chicken = newCoupon + (chicken % 10);
    }
    
    return coupon
}