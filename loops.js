//factorial (while loop)
function factorial(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result = result * i;
        i++;
    }
    return result;
}

//sum (do-while loop)
function sumDoWhile(n) {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
}

//average (for loop)
function averageFirstN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum / n;
}


document.getElementById("computeBtn").addEventListener("click", function () {
    const n = parseInt(document.getElementById("mainInput").value);
    const errorSpan = document.getElementById("errorMsg");
    
    if (isNaN(n) || n < 0) {
        document.getElementById("facResult").value = "";
        document.getElementById("sumResult").value = "";
        document.getElementById("avgResult").value = "";
        errorSpan.textContent = "Please enter a non-negative integer.";
        return;
    }
    
    errorSpan.textContent = "";
    const fac = factorial(n);
    document.getElementById("facResult").value = (isFinite(fac) ? fac : "Infinity");
    document.getElementById("sumResult").value = sumDoWhile(n);
    document.getElementById("avgResult").value = averageFirstN(n);
});



