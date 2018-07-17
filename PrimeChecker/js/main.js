
function divide(n) {
    var answer = 0;
    for (var i = 2; i < n; i++) {
        if (n % i >= 1) {
            answer=1;
        }else {
            answer = 0;
            break;
        }
       
    }
    if (answer>0) {
        return "prime";
    } else {
        return "not prime";
    }
}
console.log(divide(27));
