function solution(id_pw, db) {
    let result = [];

    for (const x of db) {
      if (x[0] == id_pw[0] && x[1] == id_pw[1]) {
        result.push("login");
      } else if (x[0] == id_pw[0] && x[1] != id_pw[1]) {
        result.push("wrong pw");
      } else {
        result.push("fail");
      }
    }

    if (result.includes("login")) {
        return "login"
    } else if (result.includes("wrong pw")) {
        return "wrong pw"
    } else {
        return "fail"
    }
}