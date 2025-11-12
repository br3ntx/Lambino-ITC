// clear butTons
document.getElementById("clearFah").addEventListener("click",
    function () {
        document.getElementById("fahInput").value = '';
        document.getElementById("fahToCel").value = '';
    }
)

document.getElementById("clearCel").addEventListener("click",
    function () {
        document.getElementById("celInput").value = '';
        document.getElementById("celToCel").value = '';
    }
)

document.getElementById("clearMeters").addEventListener("click",
    function () {
        document.getElementById("metersInput").value = '';
        document.getElementById("metersToFeet").value = '';
    }
)

document.getElementById("clearFeet").addEventListener("click",
    function () {
        document.getElementById("feetInput").value = '';
        document.getElementById("FeetToMeters").value = '';
    }
)

// conversions
document.getElementById("convertFah").addEventListener("click",
    function convertFah() {
        var x1, result;
        x1 = document.getElementById("fahInput").value * 1;
        result = (x1 - 32) * 5 / 9;
        document.getElementById("fahToCel").value = result;
    }
)

document.getElementById("convertCel").addEventListener("click",
    function convertCel() {
        var x1, result;
        x1 = document.getElementById("celInput").value * 1;
        result = (x1 * 9 / 5) + 32;
        document.getElementById("celToFah").value = result;
    }
)

document.getElementById("convertMeters").addEventListener("click",
    function convertMeters() {
        var x1, result;
        x1 = document.getElementById("metersInput").value * 1;
        result = x1 * 3.28084;
        document.getElementById("metersToFeet").value = result;
    }
)

document.getElementById("convertFeet").addEventListener("click",
    function convertMeters() {
        var x1, result;
        x1 = document.getElementById("feetInput").value * 1;
        result = x1 * 0.3048;
        document.getElementById("feetToMeters").value = result;
    }
)