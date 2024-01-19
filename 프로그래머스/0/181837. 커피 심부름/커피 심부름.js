function solution(order) {
    var answer = 0;
     order.map(x => {
         if (x.includes("americano") || x === "anything") {
             answer += 4500
         } else if (x.includes("latte")) {
             answer += 5000
         }
     })
    
    return answer
}