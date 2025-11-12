// payroll array 
let payroll = [];

function showEmployees() {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = '';
    payroll.forEach((emp, idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${idx + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.days}</td>
            <td>${emp.rate}</td>
            <td>${emp.gross}</td>
            <td>${emp.deduction}</td>
            <td>${emp.net}</td>
        `;
        tbody.appendChild(row);
    });
}

// add emp
document.getElementById("btnAdd").addEventListener("click", function () {
    const name = document.getElementById("empName").value;
    const days = parseInt(document.getElementById("empDays").value);
    const rate = parseFloat(document.getElementById("empRate").value);
    const deduction = parseFloat(document.getElementById("empDeduction").value);

    if (!name || isNaN(days) || isNaN(rate) || isNaN(deduction)) return;

    const gross = days * rate;
    const net = gross - deduction;

    payroll.push({ name, days, rate, gross, deduction, net });
    showEmployees();

    
    document.getElementById('empName').value = '';
    document.getElementById('empDays').value = '';
    document.getElementById('empRate').value = '';
    document.getElementById('empDeduction').value = '';
});

// delete emp
document.getElementById("btndelete").addEventListener("click", () => {
    let x = parseInt(document.getElementById("delemployee").value) - 1;
    if ((x >= 0) && (x < payroll.length)) {
        document.getElementById("dlgmsg").innerText = `Delete the employee ${x + 1} ${payroll[x].name}?`;
        dlgConfirmCancel.showModal();
        dlgConfirmCancel.dataset.deleteIndex = x;
    }
});

// delete all
document.getElementById("btndeleteall").addEventListener("click", () => {
    document.getElementById("dlgmsg").innerText = "Delete all records?";
    dlgConfirmCancel.showModal();
    dlgConfirmCancel.dataset.deleteIndex = '';
});

// confirm/cancel
const dlgConfirmCancel = document.getElementById("dlgConfirmCancel");
dlgConfirmCancel.addEventListener("close", (e) => {
    var rst = dlgConfirmCancel.returnValue;
    const msg = document.getElementById("dlgmsg").innerText;
    if (rst === "confirm") {
        if (msg === "Delete all records?") {
            document.getElementById("dlgmsg2").innerText = "Are you sure?";
            dlgAreYouSure.showModal();
        } else {
            // delete 1 emp
            const idx = parseInt(dlgConfirmCancel.dataset.deleteIndex);
            if (!isNaN(idx)) {
                payroll.splice(idx, 1);
                showEmployees();
                document.getElementById("delemployee").value = '';
            }
        }
    }
});

// are you sure
const dlgAreYouSure = document.getElementById("dlgAreYouSure");
dlgAreYouSure.addEventListener("close", (e) => {
    var rst = dlgAreYouSure.returnValue;
    if (rst === "yes") {
        payroll = [];
        showEmployees();
    }
});

showEmployees();