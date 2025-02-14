const solution = (numbers, hand) => {
  const answer = [];
  const newNumbers = numbers.map(num => num === 0 ? num = 11 : num)
  let newHand = hand === 'left' ? 'L' : 'R'

  let leftHandPosition = 10;
  let rightHandPosition = 12;
    
  const distance = [0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4] 
  // 가야하는 숫자와 현재 손가락이 위치한 숫자의 차이로 규칙을 찾아서 거리 기준으로 상수화
  // 인덱스 = 숫자 차이
  // 값 = 거리 차이
  
  for (let number of newNumbers) {
      if ([1, 4, 7].includes(number)) {
          answer.push('L')
          leftHandPosition = number
      }
      
      else if ([3, 6, 9].includes(number)) {
          answer.push('R')
          rightHandPosition = number
      }
      
      else {
          let leftDistance = distance[Math.abs(leftHandPosition - number)]
          let rightDistance = distance[Math.abs(rightHandPosition - number)]
          
          if (leftDistance === rightDistance) {
            answer.push(newHand)
            hand === 'left' ? leftHandPosition = number : rightHandPosition = number 
          }
          else if (leftDistance < rightDistance) {
              answer.push('L')
              leftHandPosition = number
          }
          else {
              answer.push('R')
              rightHandPosition = number
          }
      }
  }
  
  return answer.join("");
};