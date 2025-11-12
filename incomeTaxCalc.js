document.getElementById("incomeClear").addEventListener("click", function () {
  document.getElementById("incomeInput").value = "";
  document.getElementById("incTax").value = "";
});

document.getElementById("incomeInput").addEventListener("keyup", function () {
  getIncTax();
});

function getIncTax() {
  const incomeInput = parseFloat(document.getElementById("incomeInput").value);
  const output = document.getElementById("incTax");
  
  if (isNaN(incomeInput) || incomeInput < 0) {
    output.value = "";
  } 
  else if (incomeInput >= 0 && incomeInput <= 250000) {
    output.value = "0.00";
  } 
  else if (incomeInput > 250000 && incomeInput <= 400000) {
    const tax = (incomeInput - 250000) * 0.20;
    output.value = tax.toFixed(2);
  } 
  else if (incomeInput > 400000 && incomeInput <= 800000) {
    const tax = 30000 + (incomeInput - 400000) * 0.25;
    output.value = tax.toFixed(2);
  } 
  else if (incomeInput > 800000 && incomeInput <= 2000000) {
    const tax = 130000 + (incomeInput - 800000) * 0.30;
    output.value = tax.toFixed(2);
  } 
  else if (incomeInput > 2000000 && incomeInput <= 8000000) {
    const tax = 490000 + (incomeInput - 2000000) * 0.32;
    output.value = tax.toFixed(2);
  }
  else if (incomeInput > 8000000) {
    const tax = 2410000 + (incomeInput - 8000000) * 0.35;
    output.value = tax.toFixed(2);
  }
}