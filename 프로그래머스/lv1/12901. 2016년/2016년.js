function solution(a, b) {
    let dates = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let date = new Date("2016/"+a+"/"+b).getDay();
    return dates[date];
}