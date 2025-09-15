const calculateSum = () => {
    let aVal = document.getElementById("num1").value;
    let bVal = document.getElementById("num2").value;
    let cVal = document.getElementById("num3").value;

    if (aVal === "" || bVal === "") {
        document.getElementById("res").textContent = "Error: First and Second numbers are required";
        return;
    }

    let a = Number(aVal);
    let b = Number(bVal);
    let c = Number(cVal) || 0;

    let sum = a + b + c;
    document.getElementById("res").textContent = sum;
}

const calculateDiff = () => {
    let aVal = document.getElementById("num1").value;
    let bVal = document.getElementById("num2").value;
    let cVal = document.getElementById("num3").value;

    if (aVal === "" || bVal === "") {
        document.getElementById("res").textContent = "Error: First and Second numbers are required";
        return;
    }

    let a = Number(aVal);
    let b = Number(bVal);
    let c = Number(cVal) || 0;

    let diff = a - b - c;
    document.getElementById("res").textContent = diff;
}

const calculateProd = () => {
    let aVal = document.getElementById("num1").value;
    let bVal = document.getElementById("num2").value;
    let cVal = document.getElementById("num3").value;

    if (aVal === "" || bVal === "") {
        document.getElementById("res").textContent = "Error: First and Second numbers are required";
        return;
    }

    let a = Number(aVal);
    let b = Number(bVal);
    let c = Number(cVal) || 1;

    let prod = a * b * c;
    document.getElementById("res").textContent = prod;
}

const calculateQuot = () => {
    let aVal = document.getElementById("num1").value;
    let bVal = document.getElementById("num2").value;
    let cVal = document.getElementById("num3").value;

    if (aVal === "" || bVal === "") {
        document.getElementById("res").textContent = "Error: First and Second numbers are required";
        return;
    }

    let a = Number(aVal);
    let b = Number(bVal);
    let c = Number(cVal) || 1;

    if (b === 0 || c === 0) {
        document.getElementById("res").textContent = "Error: Division by zero";
        return;
    }

    let quot = a / b / c;
    document.getElementById("res").textContent = quot;
}
