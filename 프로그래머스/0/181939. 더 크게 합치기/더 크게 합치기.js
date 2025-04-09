function solution(a, b) {    
    ab = Number(String(a) + String(b));
    ba = Number(String(b) + String(a));
    
    if(ab>ba) return ab;
    else return ba;
}