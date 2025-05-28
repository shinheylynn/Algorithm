function solution(s) {
  let words = s.split(" "); 
  let answer = [];

  for (let i = 0; i < words.length; i++) {
    let word = "";
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        word += words[i][j].toUpperCase();
      } else {
        word += words[i][j].toLowerCase();
      }
    }
    answer.push(word); 
  }

  return answer.join(" ");
}
