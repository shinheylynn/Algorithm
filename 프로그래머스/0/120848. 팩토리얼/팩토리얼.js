function solution(n) {
    for (i = 1; i <= 100; i++) {
        if (factorial(i) > n) {
            return i - 1
        }    
    }
    
}
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
   }

	
  return result;
}